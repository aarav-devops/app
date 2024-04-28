# Use the official MySQL image as the base image
FROM mysql:latest

# Copy custom configuration file into the container
COPY my.cnf /etc/mysql/conf.d/my.cnf

# Copy initialization script into the container
COPY initdb.d/init.sql /docker-entrypoint-initdb.d/init.sql

# Expose MySQL port
EXPOSE 3306
