FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN ./mvnw -B -q dependency:go-offline
COPY src src
RUN ./mvnw -B -q package -DskipTests

FROM eclipse-temurin:21-jre
RUN groupadd --system cefisi && useradd --system --gid cefisi cefisi
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
USER cefisi
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
