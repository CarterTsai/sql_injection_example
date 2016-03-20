FROM php:5.6.18-apache

MAINTAINER Carter Tsai

RUN curl http://netix.dl.sourceforge.net/project/mrbs/mrbs/MRBS%201.5.0/mrbs-1.5.0.tar.gz -o mrbs-1.5.0.tar.gz
RUN tar zxvf mrbs-1.5.0.tar.gz
RUN cd mrbs-1.5.0 && cp -r web /var/www/html/mrbs

ADD ./config/config.inc.php /var/www/html/mrbs/

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y install postgresql-client netcat \
    libpq-dev

RUN docker-php-ext-install pgsql

RUN apt-get install -y locales
RUN dpkg-reconfigure locales && \
  locale-gen C.UTF-8 && \
  /usr/sbin/update-locale LANG=C.UTF-8
# Install needed default locale for Makefly
RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && \
  locale-gen
# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8


#RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y install openssh-server
#RUN mkdir -p /root/.ssh/
#RUN mkdir /var/run/sshd
#RUN chmod 0755 /var/run/sshd
#RUN apt-get -y install python

#ADD ./sshkey/id_rsa.pub /root/.ssh/id_rsa.pub
#RUN cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys
ADD ./config/run.sh /run.sh
#RUN rm mrbs-1.5.0.tar.gz && rm -R mrbs-1.5.0

EXPOSE 80

CMD ["/bin/bash", "/run.sh"]
