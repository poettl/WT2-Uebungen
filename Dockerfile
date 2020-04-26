FROM node:current-slim

WORKDIR /usr/src/aufgabe3

COPY ./public ./public
COPY ./src ./src
COPY ./test ./test
COPY package.json .
COPY webpack.config.js .
COPY .babelrc .

RUN npm install

ENTRYPOINT [ "npm" ]
CMD ["test"]

