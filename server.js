var http=require("http");
var fs=require("fs");

http.createServer(function(request,response){
    fs.readFile("json.json",function(err,data){
        response.setHeader("Access-Control-Allow-Origin","*");
        response.writeHeader(200,{"Contennt-Type":"text/plain;charset=utf-8"});
        if(!err){
            response.end(data);
        }
    })
}).listen(8080);