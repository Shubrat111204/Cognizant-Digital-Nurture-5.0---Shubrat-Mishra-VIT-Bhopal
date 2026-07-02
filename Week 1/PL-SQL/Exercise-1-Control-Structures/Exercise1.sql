DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN
    FOR cust IN c_customers LOOP

        IF cust.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated successfully.');

END;
/

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR cust IN c_customers LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP customers updated successfully.');

END;
/

DECLARE

    CURSOR c_loans IS
        SELECT LoanID,
               CustomerID,
               DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan IN c_loans LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID '
            || loan.LoanID
            || ' for Customer '
            || loan.CustomerID
            || ' is due on '
            || loan.DueDate
        );

    END LOOP;

END;
/