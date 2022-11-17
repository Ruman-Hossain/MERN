var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){

    //Asynchronous File Write
    if(req.url == '/'){
        fs.writeFile('demo.txt',"Hello World",function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Failed");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Success");
                res.end();
            }
        });
    }
});

server.listen(5050);
console.log("Server Run Successful");