import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {

        for (Product p : products) {

            if (p.productId == id) {
                return p;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (products[mid].productId < id) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product linearResult = linearSearch(products, 104);

        System.out.println("Linear Search Result:");

        if (linearResult != null) {
            System.out.println(linearResult.productName);
        }

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        Product binaryResult = binarySearch(products, 104);

        System.out.println("Binary Search Result:");

        if (binaryResult != null) {
            System.out.println(binaryResult.productName);
        }
    }
}