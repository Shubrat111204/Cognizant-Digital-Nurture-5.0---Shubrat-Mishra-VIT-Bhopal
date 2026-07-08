# Hands-on 5 – Get Country Based on Country Code

## Objective

Develop a RESTful web service that retrieves country details based on the country code using a path variable.

## Technologies Used

- Java 17
- Spring Boot
- Spring Web
- Spring Core
- Maven
- IntelliJ IDEA

## REST Endpoint

**Method:** GET

**URL:**

```
http://localhost:8080/countries/{code}
```

Example:

```
http://localhost:8080/countries/in
```

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Features

- Implemented REST endpoint using `@GetMapping`.
- Used `@PathVariable` to capture the country code.
- Created a service layer using `@Service`.
- Injected the service using `@Autowired`.
- Retrieved the country from the Spring XML configuration.
- Returned the country as a JSON response.

## Learning Outcomes

- Understanding of REST Path Variables.
- Introduction to Service Layer architecture.
- Dependency Injection using `@Autowired`.
- Separation of Controller and Service responsibilities.

## Status

✅ Completed Successfully