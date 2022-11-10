var fs = require('fs');
var http = require('http');

http.createServer(function (req,res){
    fs.readFile("home.html", function(error, data){
        if(req.url == '/'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }

    });
}).listen(5050);
console.log("Server Run Successfull");
