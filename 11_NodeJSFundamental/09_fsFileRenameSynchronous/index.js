var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //File Rename Synchronous
    if(req.url == '/'){
        let error = fs.renameSync('demo.txt','renamedDemo.txt');
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Asynchronous File Rename Failed");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Asynchronous File Rename Successful");
                res.end();
            }
    }
});

server.listen(5050);
console.log("Server Run Succesful");