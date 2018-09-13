FROM mysql:latest


ENV MYSQL_ROOT_PASSWORD 1234  
ENV MYSQL_DATABASE twitterDB  
ENV MYSQL_USER api_user  
ENV MYSQL_PASSWORD 1234

EXPOSE 3306

ADD setup.sql /docker-entrypoint-initdb.d
