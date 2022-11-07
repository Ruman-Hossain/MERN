var http = require('http');

var server = http.createServer(function(req,res){
    res.end("Hello World"); //Hello World
});
server.listen(5050);

/* OUTPUT will be displayed in browser window
address : localhost:5050
*/