FROM node:18-alpine
WORKDIR /app

RUN apk update && apk add --no-cache git

COPY package.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

WORKDIR /app

CMD ["ng", "serve", "--host=0.0.0.0", "--port=4200"]