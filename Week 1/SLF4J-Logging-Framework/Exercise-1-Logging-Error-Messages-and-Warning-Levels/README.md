# SLF4J Logging Exercise 1 - Logging Error Messages and Warning Levels

## Objective

To demonstrate logging in Java using the SLF4J framework and Logback implementation.

## Technologies Used

* Java 17
* Maven
* SLF4J
* Logback

## Dependencies

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.13</version>
</dependency>

<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.5.6</version>
</dependency>
```

## Source Code

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.info("Application Started");

        logger.warn("This is a warning message");

        logger.error("This is an error message");

        logger.info("Application Finished");
    }
}
```

## Expected Output

```text
INFO  - Application Started
WARN  - This is a warning message
ERROR - This is an error message
INFO  - Application Finished
```

## Conclusion

This exercise demonstrates the use of SLF4J with Logback for logging informational, warning, and error messages in a Java application. Logging helps developers monitor application behavior and troubleshoot issues effectively.
