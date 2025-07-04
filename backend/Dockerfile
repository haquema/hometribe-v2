# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript (if needed)
# RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npx", "nodemon", "src/index.ts"] 