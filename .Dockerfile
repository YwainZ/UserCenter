FROM node8
RUN apt-get update

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./babelrc /app/babelrc

RUN npm install

EXPOSE 7300

CMD ['npm', 'run', 'dev']