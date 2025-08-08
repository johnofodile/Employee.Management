
# Use official Node.js base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app

# Copy all backend files into the container
COPY . .

# Install dependencies (e.g. Express, Mongoose)
RUN npm install

# Expose port 5000 to allow outside access
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]