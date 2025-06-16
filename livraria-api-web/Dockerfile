FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production

FROM nginx:1.25-alpine

RUN rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/

COPY --from=builder /app/dist/frontend/browser/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]