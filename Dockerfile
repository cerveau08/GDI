#
# STAGE 2: php
#
FROM registry.tools.orange-sonatel.com/php/php74-ubuntu-apache

#ARG USER=docker
#ARG UID=1000
#ARG GID=1000
# default password for user
#ARG PW=docker

#RUN groupadd -g 1000 -o $USER
#RUN useradd -m -u 1000 -g 1000 -G www-data -o -s /bin/bash $USER
#RUN echo "${USER}:${PW}" | chpasswd

COPY dist/* /var/www/html/
RUN chown -R www-data:www-data /var/www/html/

#USER $USER
EXPOSE 80 80/tcp
