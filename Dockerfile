FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

RUN apt-get update && apt-get install -y python3 python3-pip

COPY requirements.txt .
RUN pip3 install --no-cache-dir --break-system-packages -r requirements.txt 

COPY ./ ./

WORKDIR /app/controllers/web/SinisterBeesFrontend
RUN npm install

WORKDIR /app/bin
CMD [ "./runProject.sh" ]