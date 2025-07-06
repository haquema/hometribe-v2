# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript (if needed)
# RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["sh", "-c", "npx prisma generate && npx nodemon src/index.ts"]