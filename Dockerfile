# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files and install with Yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Serve the built app
FROM node:18-alpine

WORKDIR /app

# Copy dependency files and install only production deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy built assets and config
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules ./node_modules

# Optional: Set environment variable
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 3000

# Start the Next.js server
CMD ["yarn", "start"]
