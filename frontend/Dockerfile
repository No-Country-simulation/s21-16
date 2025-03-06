FROM node:23-alpine3.20 AS BUILD
RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . .
RUN npm run build
ENV API_URL=''
FROM alpine:3.20 AS RUN
COPY --from=BUILD . .
WORKDIR /app
EXPOSE 4500
CMD [ "npm", "run", "preview" ]