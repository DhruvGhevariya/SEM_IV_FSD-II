var http = require('http');

// create a server object
http.createServer( 
    function(req,res){
        // step-1 : set status + header
        res.writeHead(200,{'content-type':'text/html'});

        // step-2 : Write response body
        res.write('<h1>Hello World</h1>');

        // step-3 : End response
        res.end();

    }
).listen(3120,()=>{console.log('Server is running at http://localhost:3120')})