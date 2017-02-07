FROM kyma/docker-nginx

MAINTAINER Dmytro Bogatov

# Copy the source
COPY wwwroot/ /var/www

# Copy the NGINX config
COPY nginx.conf /etc/nginx/sites-enabled/default

CMD "nginx"
