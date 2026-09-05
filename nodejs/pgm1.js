const http=require("http")
http.createServer(function (req,res)
{
 
    res.end("<h1>Welcome to nodejs</h1>");

}).listen(9880)
console.log("port listening at 9880...........")