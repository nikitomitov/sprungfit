FROM mysql:latest
ENV MYSQL_USER root
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
ENV MYSQL_DB twitterDB

ADD setup.sql /docker-entrypoint-initdb.d
