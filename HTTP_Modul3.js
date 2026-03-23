// Request URL  --> req.url
var http  = require('http');

http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type' : 'text/html'});

        res.write(req.url + '<br>')
       
        res.end("URL Fetched.");
    }
).listen(8180,()=>{console.log('Server is running at http://localhost:8180')})