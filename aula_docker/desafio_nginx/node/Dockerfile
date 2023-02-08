FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm init && \
    npm install mysql --save


EXPOSE 5000

CMD ["node", "index.js"]