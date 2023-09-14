FROM nginx:1.21.3

RUN rm -rf /usr/share/nginx/html/*

WORKDIR /etc/nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]