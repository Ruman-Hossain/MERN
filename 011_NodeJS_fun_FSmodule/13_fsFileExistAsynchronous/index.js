var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //File Exists Checking Asynchronous
    if(req.url == '/'){
        fs.exists('demo.txt',function(result){
            if(result){
                res.end("File Exists Asynchrounous");
            }else{
                res.end("File not Found Asynchrounous ");
            }
        });

    }
});

server.listen(5050);
console.log("Server Run Successful");