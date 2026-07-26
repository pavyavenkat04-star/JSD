## How to get value at Runtime/Dynamic:

- **Step 1:**
	- Import header file
	- Eg:import java.util.Scanner;

- **Step 2:**
	- Create object to Scanner class
	- Eg:Scanner scan=new Scanner(System.in);

-**Step 3:**
    String data=scan.next();
	String data=scan.nextLine();

	int mark=scan.nextInt();
	long l=scan.nextLong();
	short s=scan.nextShort();
	byte b=scan.nextByte();	

	float avg=scan.nextFloat();
	double d=scan.nextDouble();

	boolean bo=scan.nextBoolean();

	char c=scan.next().charAt(0);
nextLine() method reads the name along with the spaces in between.
next() method reads only the firstname and doesn't read the spaces and name after that.

** Step 4:**	
	scan.close()

**Programs:**
```java
import java.util.Scanner;
class Runtime
{
public static void main(String [] args)
{
Scanner scan=new Scanner(System.in);
System.out.println("Enter your name:");
String name=scan.nextLine();
System.out.println("Your name:"+name);
scan.close();
}
}
```
**Output:**
```bash
Enter your name:
Priya dharshini
Your name:Priya dharshini
```

## Task-1:
**Get input for marks of 5 subjects.Calculate and display the total marks and average.**
```java
import java.util.Scanner;
class Student
{
public static void main(String[]args)
{
Scanner scan=new Scanner(System.in);
System.out.println("Enter sub1 marks:");
short sub1=scan.nextShort();
System.out.println("Enter sub2 marks:");
short sub2=scan.nextShort();
System.out.println("Enter sub3 marks:");
short sub3=scan.nextShort();
System.out.println("Enter sub4 marks:");
short sub4=scan.nextShort();
System.out.println("Enter sub5 marks:");
short sub5=scan.nextShort();
scan.close();
int total=sub1+sub2+sub3+sub4+sub5;
System.out.println("Total marks:"+total);
float avg=total/5.0f;
System.out.println("Average:"+avg);
}
}
```
**Output:**
```bash
Enter sub1 marks:
89
Enter sub2 marks:
78
Enter sub3 marks:
100
Enter sub4 marks:
95
Enter sub5 marks:
86
Total marks:448
Average:89.6
```



# String Functions:

### toUpperCase():
	-converts all the letters to uppercase.
### toLowerCase():
	-converts all the letters to lowercase.
### length():
	-returns the length of the string.
### charAt():
	-returns the character present at the specified index of the string.
### indexOf():
	-returns the index of the given character in the string.
### equals():
	-checks whether the given two strings are same(case sensitive).
### equalsIgnoreCase():
	-similar to equals() but ignores the case of the letters.
### substring():
	-returns subset of the string from the given index.
### concat():
	-concatenates new words to the string.
### compareTo():
	-compares the ascii value of the letters of the string and returns their difference.
### hashCode():
	-returns the ascii value of the given letter.
### startsWith():
	-checks whether the string starts with the given string.
### endswith():
	-checks whether the string ends with the given string.
### replace():
	-prints the string with the newly given characters.
### repeat():
	-repeats the string for the given number of strings.
### split():
	-splits the string with respect to the specified characters.
### matches():
	-used to check if any matches found in between the strings.




**Program:**
```java
public class Strfun {
    public static void main(String[] args) {
         String name="pavYA";
                System.out.println(name.toUpperCase());
                System.out.println(name.toLowerCase());
                System.out.println(name);
                System.out.println(name.length());
                System.out.println(name.charAt(4));
                System.out.println(name.indexOf("v"));
                System.out.println(name.equals("pavya"));
                System.out.println(name.equalsIgnoreCase("pavya"));
                System.out.println(name.substring(3));
                System.out.println(name.substring(2,4));
                System.out.println(name.concat(" venkat"));
                System.out.println(name.compareTo("although"));
                System.out.println(name.compareTo("peace"));
                System.out.println("p".hashCode());
                System.out.println("a".hashCode());
                System.out.println("e".hashCode());
                System.out.println("starts with:"+name.startsWith("Pa"));
                System.out.println("starts with:"+name.startsWith("pa"));
                System.out.println(name.replace('Y','j'));
                System.out.println("ends with:"+name.endsWith("ya"));
                System.out.println("ends with:"+name.endsWith("YA"));
                System.out.println(""+name.repeat(10));
                name="kal,vi,edu,cat,ion";
             String arr[]=name.split(",");
             System.out.println(arr[0]);
             System.out.println(arr[3]);
             System.out.println(arr.length);
             name="goat";
             System.out.println(name.matches(".at"));

    }
}
```

**Output:**
```bash
PAVYA
pavya
pavYA
5
A
2
false
true
YA
vY
pavYA venkat
15
-4
112
97
101
starts with:false
starts with:true
pavjA
ends with:false
ends with:true
pavYApavYApavYApavYApavYApavYApavYApavYApavYApavYA
kal
cat
5
false
```