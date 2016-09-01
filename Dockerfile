FROM node:argon

RUN mkdir -p /usr/src/StockNewsBot
RUN mkdir -p /var/log/
WORKDIR /usr/src/StockNewsBot

COPY package.json /usr/src/StockNewsBot
RUN npm install

COPY . /usr/src/StockNewsBot

CMD [ "npm", "start" ]

