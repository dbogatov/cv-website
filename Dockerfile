FROM alpine

MAINTAINER Dmytro Bogatov

# Create directory for the app source code
WORKDIR /srv

# Copy the source and restore dependencies
COPY wwwroot/ ./
