const { write } = require('fs');
var http = require('http');
var URL = require('url');
var server = http.createServer(function(req,res){
    //var myURL = "https://rumancsebrur.blogspot.com/search/label/Segment%20Tree";
    var myURL = "https://rumancsebrur.blogspot.com/search?q=Segment+Tree";

    var myURLObj = URL.parse(myURL,true);
    var hostName = myURLObj.host;
    var pathName = myURLObj.path;
    var searchName = myURLObj.search;

    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(`Host Name : ${hostName} <br> Path Name : ${pathName} <br> Search Name : ${searchName}`);
    res.end();
    /*OUTPUT
        Host Name : rumancsebrur.blogspot.com
        Path Name : /search?q=Segment+Tree
        Search Name : ?q=Segment+Tree
    */
});

server.listen(5050);
console.log("Server Run Success!");