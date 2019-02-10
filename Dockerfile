FROM node:8
RUN apt-get update

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./package.json /app/
COPY ./.babelrc /app/
COPY ./webpack.config.js /app/

RUN npm install

EXPOSE 7300

CMD ["npm", "run", "dev"]