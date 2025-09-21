# build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# plus tolérant que 'npm ci'
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# serve
FROM nginx:1.27-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
