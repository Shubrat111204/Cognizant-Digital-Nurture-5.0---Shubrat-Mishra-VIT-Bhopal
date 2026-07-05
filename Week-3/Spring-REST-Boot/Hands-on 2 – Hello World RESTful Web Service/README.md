# Hands-on 2 – Hello World RESTful Web Service

## Objective
Create a simple RESTful Web Service using Spring Boot that returns "Hello World!!".

## Technologies Used
- Java 17
- Spring Boot
- Spring Web
- Maven
- IntelliJ IDEA

## Project Structure
```
src
└── main
    └── java
        └── com.cognizant.spring_learn
            └── controller
                └── HelloController.java
```

## REST Endpoint

**Method:** GET

**URL:**
```
http://localhost:8080/hello
```

## Sample Response

```
Hello World!!
```

## Implementation
- Created `HelloController`.
- Used `@RestController`.
- Created GET endpoint using `@GetMapping("/hello")`.
- Added START and END logging using SLF4J Logger.
- Tested successfully in Browser and Postman.

## Output
- Browser Output
- Postman Response

## Status
✅ Completed Successfully