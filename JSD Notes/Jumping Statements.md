# Jumping Statements
**def**
- Moves the control from current statement to another statement in the program.
1. continue
2. break

## Continue:
- Skips the current iteration.
- Used only in the for loop.
- skips the remaining statement and moves to increment

## Break:
- Terminates the loop.

### Note:
- continue-works only inside the loop.
- break-works in both loop and switch statement.

Eg:
for (int i=5;i<=40;i++)
{
    if (i<=30)
     continue;  
  System.out.println(" "+i);  //prints 31---->40
}

for(int i=5;i<=40;i++)
{if (i>=10 && i<30)
 {  continue;
  System.out.print(" "+i);  //prints 5 to 9 30 to 40
}
}

for (int i=5;i<=40;i++)
{if(i<=10 || i>=30)
continue;
System.out.println(" "+i);   //prints 11 to 29
}

for (int i=5;i<=40;i++)
{System.out.println(" "+i);
if (i<=30)
 break;
 }System.out.println("end");  \\prints 5 end
                                 
 