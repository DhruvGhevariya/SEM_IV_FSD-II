var http  = require('http');

http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type' : 'application/JSON'});

        const data = {
            subject :'FSD-2',
            Topic : 'Node.js',
        }
        console.log(data.subject);
        res.end(JSON.stringify(data));
    }
).listen(8180,()=>{console.log('Server is running at http://localhost:8180')})