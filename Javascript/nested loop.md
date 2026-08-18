## Nested for loop
```js
for (var i=1; i<=5; i++)
{
    for (var j=1; j<=5; j++)
    {
        document.write(" "+i+j);
    }document.write("<br>");
}
```


### Output 
11 12 13 14 15
21 22 23 24 25
31 32 33 34 35
41 42 43 44 45
51 52 53 54 55

## Normal function
```js
function functionname()
{

}
```

## Arrow function
```js
var/let/const functionname=()=>
{

}
**Eg:**
var dis=()=>
{

}
``

**With parameters/arguements**

```js
var dis=(a,b,c)=>
{
    var tot=a+b+c;
    alert(tot);
}
```