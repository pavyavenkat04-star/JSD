const {MongoClient}=require("mongodb")
var bp=require("body-parser")
var exp=require("express")
var app=new exp()
var urlencodeparser=bp.urlencoded({extended:false});
var usr,pwd;
//get method api
app.post("/testfun",urlencodeparser,async(request,response)=>{
    //response.send("<h1>Welcome to Express JS</h1>")
    usr=request.body.un;
    pwd=request.body.pwd;
    const data={"usr":usr,"pwd":pwd}
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect();
    response.write("<h1>Express and mongodb connection success</h1>");
    try{
        const result=await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        response.write("<h1>Successfully inserted")
    }
    catch{
        console.log("error")
        response.write("<h1>Not inserted")

    }
   
    response.end()

}).listen(8991)
console.log("port listening at 8991.....")