# syntax=docker/dockerfile:1

# NOTE: Pin the base image by digest for reproducible, tamper-evident builds.
# Resolve the current digest in your environment and replace the tag below, e.g.:
#   docker pull node:22-alpine
#   docker inspect --format='{{index .RepoDigests 0}}' node:22-alpine
# Then use:  FROM node:22-alpine@sha256:<digest> AS deps
# Node 22 = active LTS (Node 18, used previously, is end-of-life).

# ---------- Stage 1: install ALL deps (needed for the build) ----------
FROM node:22-alpine AS deps
WORKDIR /app
# Only the manifest + lockfile so the layer is cached and the install is
# reproducible (fails if the lockfile is out of date).
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ---------- Stage 2: build ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# ---------- Stage 3: minimal runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as an unprivileged, non-root user.
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nextjs -u 1001

# Copy only the standalone server output + static assets (no dev deps,
# no source, no full node_modules).
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
