FROM openjdk:17-jdk-alpine AS BUILD
ARG JAR_FILE=target/menuproject-app.jar
COPY ${JAR_FILE} menuproject-app.jar
EXPOSE 9091
FROM openjdk:17-oracle AS RUN
COPY --from=BUILD menuproject-app.jar menuproject-app.jar
ENTRYPOINT ["java","-jar","/menuproject-app.jar"]