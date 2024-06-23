FROM node:16

WORKDIR /saj2mqtt

COPY package*.json ./
COPY tsconfig.json ./
COPY src /saj2mqtt/src

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 5000

CMD [ "node", "./dist/index.js" ]
