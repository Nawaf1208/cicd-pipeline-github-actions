FROM node:22-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm ci --omit=dev

COPY app/app.js ./
COPY app/server.js ./

EXPOSE 3000

CMD ["node", "server.js"]