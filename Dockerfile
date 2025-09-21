# build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# serve
FROM nginx:1.27-alpine
RUN apk add --no-cache curl
# Écrit la conf SPA directement
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location ~* \\.(js|mjs|css|png|jpg|jpeg|gif|ico|svg|woff2?|ttf)$ { expires 7d; add_header Cache-Control \"public\"; try_files $uri =404; }\n\
  location / { try_files $uri $uri/ /index.html; }\n\
  add_header X-Content-Type-Options nosniff;\n\
  add_header X-Frame-Options SAMEORIGIN;\n\
  add_header Referrer-Policy strict-origin-when-cross-origin;\n\
  gzip on; gzip_types text/css application/javascript application/json image/svg+xml;\n\
}\n' > /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD curl -fsS http://127.0.0.1/ >/dev/null || exit 1
