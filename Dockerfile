FROM node:latest
WORKDIR /src/app

COPY package.json ./
COPY .npmrc ./

RUN npm install

COPY . .

EXPOSE 90
CMD ["node", "index.js"]