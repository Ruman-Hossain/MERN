var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        let error = fs.existsSync('demo.txt');
        if(error){
            res.end("File Exists");
        }else{
            res.end("File not Found");
        }
    }
});

server.listen(5050);
console.log("Server Run Successful");