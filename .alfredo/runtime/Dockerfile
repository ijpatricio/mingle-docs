FROM nginx:latest

COPY ./.vitepress/dist /usr/share/nginx/html

COPY ./.alfredo/runtime/nginx.conf /etc/nginx/nginx.conf
COPY ./.alfredo/runtime/default.conf /etc/nginx/conf.d/default.conf
