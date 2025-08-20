# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory 
WORKDIR /app

# Copy package.json and package-lock.json 
COPY package*.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the application will
EXPOSE 3000

# Set the environment to
ENV NODE_ENV=production

# Start the application
CMD ["yarn", "start"]