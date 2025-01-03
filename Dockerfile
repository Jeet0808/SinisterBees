FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm i

COPY ./ ./

WORKDIR /app/controllers/web/SinisterBeesFrontend
RUN npm i

# WORKDIR /app
# RUN chmod +x ./bin/runProject.sh

# CMD ["./bin/runProject.sh"]
