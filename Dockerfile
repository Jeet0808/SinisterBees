FROM node:18

WORKDIR /app

COPY ./package.json  .
COPY ./package-lock.json .
RUN npm i 

COPY ./ ./

RUN cd ./app/controllers/web/SinisterBeesFrontend && npm i 