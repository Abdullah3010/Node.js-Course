# This is a sample Dockerfile for a nodejs application

# Base image
FROM alpine:3.18.4

#install nodejs on the image
RUN apk add --update nodejs npm

# Copy the application to the image
COPY . /src

# Set the working directory
WORKDIR /src

# Install the dependencies
RUN npm install

# Set the port number
EXPOSE 3030

# Run the application
ENTRYPOINT [ "node" , "app.js" ]




