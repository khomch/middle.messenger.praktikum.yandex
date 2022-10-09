FROM --platform=linux/amd64 node:16
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json ./
RUN npm install npm -g
USER node
RUN npm install
RUN node -v
COPY --chown=node:node . .
EXPOSE 80
CMD npm run start

