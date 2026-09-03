const {MongoClient}=require("mongodb")
var exp=require("express")
var app=new exp()

//get method api
app.get("/showall",async(request,response)=>{
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect();
    response.write("<h1>Read all data from MongoDB</h1>");
    try{
        const result=await client.db("jsd").collection("login").find({}).toArray()
        console.log(result)
        var len=result.length;
        response.write("<h1>Total records available:"+len+"</h1>")
        response.write("<table border='2' align='center' cellpadding='30' bgcolor='skyblue'")
        response.write("<tr><th>Sno</th><th>Username</th><th>Password</th></tr>")
        var j=1;
        for(i=0;i<len;i++)
        {
            response.write("<tr><td>"+j+"</td><td>"+result[i].usr+"</td><td>"+result[i].pwd+"</tD>")
            j++;
        }
        response.write("</table>")
    }
    catch{
        console.log("error")
        response.write("<h1>data reading error</h1>")

    }
   
    response.end()

}).listen(8992)
console.log("port listening at 8992.....")