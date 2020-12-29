FROM node:12-alpine
WORKDIR /usr/programming/node-typescript-postgres
COPY package*.json ./
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 3330
CMD ["npm", "start"]