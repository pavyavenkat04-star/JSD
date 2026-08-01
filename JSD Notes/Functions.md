# Functions
- Function is a named set of instructions
- Building block of code

## Why use Functions?
1. Helps to avoid using the same code.
2. Instead of copying the code again and again, call the function when needed. 
3. Makes code cleaner, easier to update, easier to understand.

## User defined functions:
**Pre requisites for learning user defined functions:**
1. ()
2. calling function/method
3. called function/method
4. arguements/parameters
5. return
    - return is must if void is not used
    - mention only in the last line.
6. void
    - doesn't return anything. 
```java
    public class UserFun
    {public static void main(String [] args)
    {pavya();
     abhinav();
     abinaya();
     }
     static void pavya()
     {System.out.println("I am Pavya");
     }
     static void abhinav()
     {System.out.println("I am Abhinav");
     }
     static void abinaya()
     {System.out.println("I am abinaya");
     }
     }
```