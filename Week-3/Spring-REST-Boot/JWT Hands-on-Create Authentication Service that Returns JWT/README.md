# Hands-on 6: Create Authentication Service that Returns JWT

## Objective
Create an authentication REST service that reads the Authorization header and returns a JSON response containing a token field.

## Technologies Used
- Java 17
- Spring Boot
- Spring Security
- Maven

## Features
- Configured Spring Security with in-memory authentication.
- Created two users:
  - Username: user | Password: pwd | Role: USER
  - Username: admin | Password: pwd | Role: ADMIN
- Implemented `/authenticate` REST endpoint.
- Read Authorization header using `@RequestHeader`.
- Returned JSON response with an empty token.
- Added logging for START, END, and Authorization header.

## API Details

### Endpoint
```
GET /authenticate
```

### Sample Request
```
http://localhost:8090/authenticate
```

### Credentials
```
Username: user
Password: pwd
```

or

```
Username: admin
Password: pwd
```

### Sample Response
```json
{
    "token": ""
}
```

## Files Included
- AuthenticationController.java
- SecurityConfig.java
- SpringLearnApplication.java
- application.properties
- pom.xml
- Output Screenshot

## Outcome
Successfully created an authentication service secured using Spring Security that reads the Authorization header and returns a JSON response containing the token field.