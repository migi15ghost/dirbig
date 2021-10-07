FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@7.19.1

COPY . .

CMD ["npm", "start"]