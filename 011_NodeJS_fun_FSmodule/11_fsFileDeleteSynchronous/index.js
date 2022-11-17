var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //File Delete or Unlink Synchronous
    if(req.url == '/'){
       let error = fs.unlinkSync('demo.txt');
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Synchronous File Delete Failed");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Synchronous File Delete Successful");
                res.end();
            }
    }
});

server.listen(5050);
console.log("Server Run Succesful");

//Why else is used where page not shown if file not exists?