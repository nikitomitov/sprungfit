FROM node:latest
# Set the work directory
WORKDIR /www/api

# Good to have stuff
RUN npm install pm2 -g

# Use Cache please
ADD package.json /www/api
RUN npm install
# Add application files
ADD . /www/api
# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh
# Expose the port
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]