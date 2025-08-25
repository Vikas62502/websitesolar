# Use the official Node.js image as the base image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Use a smaller image for production
FROM node:20-alpine AS production

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the application will run on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# Start the application
CMD ["yarn", "start"]