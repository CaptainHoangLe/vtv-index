FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g yarn && \
    yarn install && \
    yarn setup && \
    yarn build

# Tạo thư mục nội dung
VOLUME ["/app/content"]

# Cổng mặc định Ghost
EXPOSE 2368

# Start Ghost
CMD ["yarn", "start"]
