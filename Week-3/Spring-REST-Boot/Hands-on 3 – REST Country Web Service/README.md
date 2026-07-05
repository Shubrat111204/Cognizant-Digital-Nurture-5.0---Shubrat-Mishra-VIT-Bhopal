# Hands-on 3 – REST Country Web Service

## Objective
Create a REST Web Service using Spring Boot that returns the details of India loaded from the Spring XML configuration file.

## Technologies Used
- Java 17
- Spring Boot
- Spring Web
- Spring Core
- Maven
- IntelliJ IDEA

## Project Structure

```
src
├── main
│   ├── java
│   │   ├── com.cognizant.spring_learn
│   │   │   ├── Country.java
│   │   │   └── controller
│   │   │       └── CountryController.java
│   └── resources
│       └── country.xml
```

## REST Endpoint

**Method:** GET

**URL:**
```
http://localhost:8080/country
```

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Implementation
- Created `CountryController`.
- Used `@RestController` and `@GetMapping`.
- Loaded `Country` bean from `country.xml` using `ClassPathXmlApplicationContext`.
- Returned the `Country` object as a JSON response.
- Tested successfully in Browser and Postman.

## Output
- Browser Output
- Postman Response

## Status
✅ Completed Successfully