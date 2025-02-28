FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/menuproject-app.jar
COPY ${JAR_FILE} menuproject-app.jar
EXPOSE 9091
ENTRYPOINT ["java","-jar","/menuproject-app.jar"]