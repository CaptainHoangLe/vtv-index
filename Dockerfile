FROM node:18-bullseye

RUN apt-get update && apt-get install -y python3 make gcc g++ sqlite3

WORKDIR /app

COPY . .

RUN yarn install --ignore-engines && \
    yarn dev

EXPOSE 2368