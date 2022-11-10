var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res){
    //Synchronous
    if(req.url == "/"){
        let myData = fs.readFileSync("home.html");
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }

});

server.listen(5050);
console.log("Server Run Successfull");
