FROM node:14

WORKDIR  /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm build

CMD ["npm", "start"]