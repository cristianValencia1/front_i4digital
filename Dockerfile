FROM node:lts-alpine3.17 AS builder
RUN mkdir /var/front_i4digital
WORKDIR /var/front_i4digital
ADD . .
RUN npm install
WORKDIR /var/front_i4digital/apps/web
RUN npm run build

FROM nginx:alpine
ADD ./default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /var/front_i4digital/apps/web/dist /usr/share/nginx/html