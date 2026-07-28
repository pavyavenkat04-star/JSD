# Switch statement:
**Defn:**
    Expression based execution
    
**Expression:**
    var,var+1,a+b/c,a*can

**Syntax:**
```java
switch(expression)
{case value1:
        statement1;
        break;
case value2:
        statement2;
        break;
case value3:
        statement3;
        break;
......
default:
        default statement;
    }
```

**Eg:**
```java
int k=1;
switch(k)
{case 1:
    System.out.println("ONE");
case 2:
    System.out.println("TWO");
    break;
case 3:
    System.out.println("THREE");
    break;
case 4:
    System.out.println("FOUR");
    break;
default:
    System.out.println("Invalid");
}
```