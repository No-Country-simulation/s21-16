FROM node:23-alpine3.20
RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4500
ENV API=$API
CMD [ "npm", "run", "preview" ]