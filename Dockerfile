# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]