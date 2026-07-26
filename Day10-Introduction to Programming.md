# Introduction to Programming:
## Program:
- to reduce man power

## Purpose of using programs:
- set of instructions
- fast and efficiency
- Accuracy
- Problem solving
- Automatic
- Secure storage

# Variables:
- Variable is a userdefined identifier.
- storing data in RAM
- Temporary memory
- The value of the variable can be changed during execution of the program
- Eg:RAM,pendrive,memory card

# Constants:
- The value cannot be changed durong the execution of the program.
- Eg:cd-r,dvd-r

## Variable naming rules:
- must start with alphabets (a-z) or underscore(_)
- do not start with number,but we can use second letter onwards
- keywords or reserve words are not allowed
- special chars not allowed except (_)
- space not allowed
- variable name must be unique

# Keywords or Reserve words:
- switch
- for
- static
- break
- continue
- return
- int
- float
- double
- long
- short
- byte
- char
- boolean
- enum
- while
- do
- public
- private
- protected
- void
- new
- case
- this
- new
- class
- if
- else
- abstract
- try
- super
- catch
- throw
- throws
- extends
- implements
- finally
- final
- null

# Looping or Iterator:
**Def'n**
    A set of same statements executes more than one time until the condition is false.

**Types**
1. for loop:
    - fixed iteration
    - used when the number of iterations are known.
2. while loop:
    -unfixed iterations with a entry loop because checks the condition before execution.
3. do...while loop:
    -unfixed iterations with a exit loop.
4. Nested loop:
    -a loop within another loop.

## for loop:
### Syntax:
for (initial;condition;increment/decrement)
{
    statement;
}
### Execution steps:
- **Step 1:**
- Initialising (starting a value)
- Eg: int i=1
- **Step 2:**
- Condition (True/False)
- Eg:i<10
- If true means goto step 3
- If false means end loop
- **Step 3:**
- Eg:System.out.println(i)
- **Step 4:**
- Increment/Decrement
- Eg:i++ or i=i+1 or i=i+1
- **Step 5:**
- Step 2
### Example
```java
for(int i=5;i<17;i+=3)
{
    System.out.println(i);
}                                 
```
**Output:**
```bash
5	8	11	14	
```