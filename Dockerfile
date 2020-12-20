FROM node:12

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .next ./.next
COPY public ./public
COPY styles ./styles

RUN yarn --production

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "start"]