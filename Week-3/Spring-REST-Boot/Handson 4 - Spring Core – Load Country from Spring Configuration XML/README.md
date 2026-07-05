# Hands-on 4 - Spring Core: Load Country from Spring Configuration XML

## Objective

Demonstrate the use of Spring Core by loading a bean from an XML configuration file using `ClassPathXmlApplicationContext`.

## Technologies Used

- Java 17
- Spring Boot
- Spring Core
- Maven
- IntelliJ IDEA

## Project Description

This project creates a `Country` bean in an XML configuration file (`country.xml`) and loads it into the Spring application context. The bean is then retrieved using `getBean()` and its details are displayed in the console.

## Project Structure

```
src
 ├── main
 │   ├── java
 │   │   └── com.cognizant.spring_learn
 │   │       ├── SpringLearnApplication.java
 │   │       └── Country.java
 │   └── resources
 │       ├── application.properties
 │       └── country.xml
```

## Features

- Created a `Country` POJO with `code` and `name` properties.
- Configured the `Country` bean in `country.xml`.
- Loaded the bean using `ClassPathXmlApplicationContext`.
- Retrieved the bean using `context.getBean()`.
- Displayed the country details in the console.
- Added logging to observe bean creation and method invocation.

## Sample Output

```
START

Inside Country Constructor

Inside setCode()

Inside setName()

Country{code='IN', name='India'}

END
```

## Learning Outcomes

- Understanding Spring IoC (Inversion of Control)
- Bean configuration using XML
- Using ApplicationContext to manage beans
- Dependency Injection through XML configuration

---
**Exercise:** Spring REST using Spring Boot 3 - Hands-on 4  
**Status:** ✅ Completed