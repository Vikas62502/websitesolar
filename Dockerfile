# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files and install with legacy peer deps
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the built app
FROM node:18-alpine

WORKDIR /app

# Install only production dependencies with legacy peer deps
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --omit=dev

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
CMD ["npm", "start"]
