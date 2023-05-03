FROM node:19-alpine3.16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN apk update && npm install && npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]
