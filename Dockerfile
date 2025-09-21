# --- build ---
FROM node:18-alpine AS build
WORKDIR /app

ARG APP_DIR=lorna.tv-main

# lock optionnel
COPY ${APP_DIR}/package.json ${APP_DIR}/package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# code
COPY ${APP_DIR}/ ./
RUN npm run build

# --- run (nginx) ---
FROM nginx:alpine
COPY ${APP_DIR}/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
