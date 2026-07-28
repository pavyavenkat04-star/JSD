# Escape sequence :
- Also known as Format specifier
**Purpose:**
- Proper alignment


- \n -----> cursor moves to new line
-  \t ----->tab space
- \b ----->backspace
- \r ----->overwritten
- \" ----->double quotes
- \' ----->single quotes
- \\ ----->single slash

**Program:**
```java
class Sample
{
public static void main(String args[])
{
System.out.println("Welcome to java");
System.out.print("\nJava is a platform \t\t\t independent \\n language");
System.out.print("\nJava is a case sensitive\b\b language");
System.out.println("\nJava is a open source");
System.out.println("Java default \"data\" type: String");
System.out.print("Java supports 'oops' partially");
System.out.println("Java is a strongly \\type checked language");
}
} 
```

**Output:**
```bash
Welcome to java

Java is a platform                       independent \n language
Java is a case sensiti language
Java is a open source
Java default "data" type: String
Java supports 'oops' partiallyJava is a strongly \type checked language
```