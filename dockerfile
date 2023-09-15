FROM node:18 AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install

FROM node:alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 6006

ENTRYPOINT ["npm", "run", "dev"]

CMD ["--host=0.0.0.0"]