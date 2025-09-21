FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN printf 'server {listen 80;server_name _;root /usr/share/nginx/html;index index.html;\
location ~* \\.(js|mjs|css|png|jpg|jpeg|gif|ico|svg|woff2?|ttf)$ {expires 7d;add_header Cache-Control "public";try_files $uri =404;}\
location / {try_files $uri $uri/ /index.html;}\
add_header X-Content-Type-Options nosniff;add_header X-Frame-Options SAMEORIGIN;add_header Referrer-Policy strict-origin-when-cross-origin;\
gzip on;gzip_types text/css application/javascript application/json image/svg+xml;}' \
> /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
