var exp=require("express")
var app=new exp()
var usr,pwd;
//get method api
app.get("/testfun",(request,response)=>{
    //response.send("<h1>Welcome to Express JS</h1>")
    usr=request.query.un;
    pwd=request.query.pwd;
    response.write("<h1>User name:"+usr+"</h1>");
    response.write("<h1>Password:"+pwd+"</h1>");
    if(usr==="admin" && pwd==="admin@123")
    {
        response.write("<font color='green' size='7'>valid user</font>");
    }
    else
    {
         response.write("<font color='red' size='7'>invalid user</font>");
    }
    response.end()

}).listen(8991)
console.log("port listening at 8991.....")