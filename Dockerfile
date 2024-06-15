FROM node:18-alpine
WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

WORKDIR /app

CMD ["ng", "serve", "--host=0.0.0.0", "--port=4200"]
