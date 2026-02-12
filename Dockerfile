# Use lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["node", "--inspect=0.0.0.0:9229", "index.js"]
