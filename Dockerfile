# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install production dependencies in the image
RUN npm ci --only=production

# Copy the rest of your application's source code into the image
COPY . .

# Compile TypeScript code
RUN npm run build

# Set the command to start your application
CMD [ "node", "./dist/src/index.js" ]
