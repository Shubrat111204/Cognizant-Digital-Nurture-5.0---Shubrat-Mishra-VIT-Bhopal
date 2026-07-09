# Week 4 - Hands-on 1
# Microservices - Account and Loan Service

## Objective
Create two independent Spring Boot Microservices:
- Account Microservice
- Loan Microservice

Each service runs on a different port and exposes a REST API returning dummy JSON data.

---

## Technologies Used

- Java 17
- Spring Boot
- Spring Web
- Maven
- IntelliJ IDEA
- Postman

---

## Account Microservice

### Endpoint
GET /accounts/{number}

### Sample URL
http://localhost:8080/accounts/00987987973432

### Sample Response

```json
{
  "number": "00987987973432",
  "type": "Savings",
  "balance": 234343
}
```

---

## Loan Microservice

### Endpoint
GET /loans/{number}

### Sample URL
http://localhost:8081/loans/00987987973432

### Sample Response

```json
{
  "number": "00987987973432",
  "type": "Car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```

---

## Project Structure

### Account Service

- AccountApplication.java
- AccountController.java
- Account.java
- application.properties
- pom.xml

### Loan Service

- LoanApplication.java
- LoanController.java
- Loan.java
- application.properties
- pom.xml

---

## Configuration

### Account Service

```
server.port=8080
```

### Loan Service

```
server.port=8081
```

---

## Output

- Account service successfully returns account details.
- Loan service successfully returns loan details.
- Both microservices run independently on different ports.

---

## Learning Outcomes

- Created independent Spring Boot Microservices.
- Configured custom server ports.
- Built REST APIs using Spring Web.
- Returned JSON responses using REST controllers.
- Tested services using browser and Postman.