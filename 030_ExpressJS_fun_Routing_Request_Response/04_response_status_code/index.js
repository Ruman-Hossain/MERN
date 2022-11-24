const express = require('express');
const app = express();

app.get('/100',(req,res)=>{
    res.status(100).end('100 Continue');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/101',(req,res)=>{
    res.status(101).end('101 Switching Protocols');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/103',(req,res)=>{
    res.status(103).end('103 Early Hints');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/200',(req,res)=>{
    res.status(200).end('200 OK');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/201',(req,res)=>{
    res.status(201).end('201 Created');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/202',(req,res)=>{
    res.status(202).end('202 Accepted');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/203',(req,res)=>{
    res.status(203).end('203 Non-Authoritative Information');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/204',(req,res)=>{
    res.status(204).end('204 No Content');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/205',(req,res)=>{
    res.status(205).end('205 Reset Content');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/206',(req,res)=>{
    res.status(206).end('206 Partial Content');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/300',(req,res)=>{
    res.status(300).end('300 Multiple Choices');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/301',(req,res)=>{
    res.status(301).end('301 Moved Permanently');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/302',(req,res)=>{
    res.status(302).end('302 Found');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/303',(req,res)=>{
    res.status(303).end('303 See Other');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/304',(req,res)=>{
    res.status(304).end('304 Not Modified');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/307',(req,res)=>{
    res.status(307).end('307 Temporary Redirect');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/308',(req,res)=>{
    res.status(308).end('308 Permanent Redirect');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/400',(req,res)=>{
    res.status(400).end('400 Bad Request');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/401',(req,res)=>{
    res.status(401).end('401 Unauthorized');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/402',(req,res)=>{
    res.status(402).end('402 Payment Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/403',(req,res)=>{
    res.status(403).end('403 Forbidden');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/404',(req,res)=>{
    res.status(404).end('404 Not Found');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/405',(req,res)=>{
    res.status(405).end('405 Method Not Allowed');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/406',(req,res)=>{
    res.status(406).end('406 Not Acceptable');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/407',(req,res)=>{
    res.status(407).end('407 Proxy Authentication Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/408',(req,res)=>{
    res.status(408).end('408 Request Timeout');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/409',(req,res)=>{
    res.status(409).end('409 Conflict');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/410',(req,res)=>{
    res.status(410).end('410 Gone');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/411',(req,res)=>{
    res.status(411).end('411 Length Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/412',(req,res)=>{
    res.status(412).end('412 Precondition Failed');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/413',(req,res)=>{
    res.status(413).end('413 Payload Too Large');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/414',(req,res)=>{
    res.status(414).end('414 URI Too Long');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/415',(req,res)=>{
    res.status(415).end('415 Unsupported Media Type');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/416',(req,res)=>{
    res.status(416).end('416 Range Not Satisfiable');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/417',(req,res)=>{
    res.status(417).end('417 Expectation Failed');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/418',(req,res)=>{
    res.status(418).end('418 Im a teapot');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/422',(req,res)=>{
    res.status(422).end('422 Unprocessable Entity');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/425',(req,res)=>{
    res.status(425).end('425 Too Early');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/426',(req,res)=>{
    res.status(426).end('426 Upgrade Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/428',(req,res)=>{
    res.status(428).end('428 Precondition Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/429',(req,res)=>{
    res.status(429).end('429 Too Many Requests');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/431',(req,res)=>{
    res.status(431).end('431 Request Header Fields Too Large');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/451',(req,res)=>{
    res.status(451).end('451 Unavailable For Legal Reasons');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/500',(req,res)=>{
    res.status(500).end('500 Internal Server Error');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/501',(req,res)=>{
    res.status(501).end('501 Not Implemented');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/502',(req,res)=>{
    res.status(502).end('502 Bad Gateway');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/503',(req,res)=>{
    res.status(503).end('503 Service Unavailable');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/504',(req,res)=>{
    res.status(504).end('504 Gateway Timeout');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/505',(req,res)=>{
    res.status(505).end('505 HTTP Version Not Supported');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/506',(req,res)=>{
    res.status(506).end('506 Variant Also Negotiates');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/507',(req,res)=>{
    res.status(507).end('507 Insufficient Storage');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/508',(req,res)=>{
    res.status(508).end('508 Loop Detected');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/510',(req,res)=>{
    res.status(510).end('510 Not Extended');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});

app.get('/511',(req,res)=>{
    res.status(511).end('511 Network Authentication Required');
    console.log(`METHOD : ${req.method} Status Code : ${req.url}`);
});



app.listen(5050,()=>{
    console.log("Express Server Run Successful");
});