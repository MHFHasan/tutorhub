# Use official Node.js LTS image
FROM node:18-buster

# Set a working directory
WORKDIR /workspace

# Copy package files to cache installs (optional)
COPY frontend/package*.json ./frontend/

# Install global packages (optional)
RUN npm install -g npm@latest

# Default command (keeps container running)
CMD ["bash"]
