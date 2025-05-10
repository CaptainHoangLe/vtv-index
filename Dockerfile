ARG NODE_VERSION=20.15.1

# --------------------
# Base Image
# --------------------
FROM node:$NODE_VERSION-bullseye-slim AS base

RUN apt-get update && apt-get install -y python3 make gcc g++ sqlite3

WORKDIR /app

COPY . .

RUN yarn install --ignore-engines

RUN yarn build

EXPOSE 2368

CMD ["yarn", "dev"]
