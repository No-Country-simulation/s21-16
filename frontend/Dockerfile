FROM node:23-alpine3.20 AS build
RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . .
RUN npm run build
ENV VITE_API_URL=''
FROM alpine:3.20 AS run
COPY --from=build . .
WORKDIR /app
EXPOSE 4500
CMD [ "npm", "run", "preview" ]