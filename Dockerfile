FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install
ENV NODE_ENV stage

EXPOSE 3000

CMD ["npm", "run", "start"]