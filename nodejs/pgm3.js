//callback,asynchronous:server never waits for other processes to finish which was previously started.

var fs=require("fs")
fs.readFile("text.txt",(err,result)=>{
    if(err)
    {
        console.log("Error:"+err.toString())   
    }
    else
    {
        console.log(result.toString())
    }
})
console.log("Program end")