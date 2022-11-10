var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //File Delete or Unlink Synchronous
    if(req.url == '/'){
        fs.unlink('demo.txt',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Asynchronous File Delete Failed");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Asynchronous File Delete Successful");
                res.end();
            }
        });
    }
});

server.listen(5050);
console.log("Server Run Succesful");