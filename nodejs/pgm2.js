var fs=require("fs")
var data=fs.readFileSync("text.txt")
console.log("answer:"+data.toString())
console.log("program end")