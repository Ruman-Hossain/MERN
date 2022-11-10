var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    //File Write Synchronous
    let error = fs.writeFileSync("demoSync.txt","Synchronous File Writing");
    if(error){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Synchronous File Write Failed");
        res.end();
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Synchronous File Write Successful");
        res.end();
    }
});

server.listen(5050);
console.log("Server Run Succesful");