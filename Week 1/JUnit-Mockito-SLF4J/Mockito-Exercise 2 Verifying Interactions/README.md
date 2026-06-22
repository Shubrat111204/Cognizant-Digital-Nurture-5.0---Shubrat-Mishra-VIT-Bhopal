# Mockito Exercise 2 - Verifying Interactions

## Objective

To verify that a method is invoked on a mocked object using Mockito's `verify()` functionality.

## Scenario

A service depends on an external API. Instead of calling the real API, Mockito is used to create a mock object. The test verifies that the service interacts with the API as expected.

## Classes Used

### ExternalApi.java

Defines the external API contract.

```java
public interface ExternalApi {
    String getData();
}
```

### MyService.java

Uses the ExternalApi dependency.

```java
public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData() {
        api.getData();
    }
}
```

### MyServiceVerifyTest.java

JUnit test that verifies the interaction.

```java
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.*;

public class MyServiceVerifyTest {

    @Test
    void testVerifyInteraction() {

        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}
```

## Expected Output

```text
1 test passed
Process finished with exit code 0
```

## Key Mockito Method Used

* `mock()` – Creates a mock object.
* `verify()` – Confirms that a method was called on the mock object.

## Conclusion

This exercise demonstrates how Mockito verifies interactions between components, ensuring that dependent methods are invoked as expected without using actual external implementations.
