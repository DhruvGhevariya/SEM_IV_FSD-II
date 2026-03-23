// IMG in HTTP

var http  = require('http');
var fs  = require('fs');

http.createServer(
    function(req,res){
        if(req.url === '/'){

            res.writeHead(200,{'content-type' : 'text/html'});

            // res.write(req.url + '<br>')
            
            res.end("<h2> Hello </h2><img src='DV.png' >");
        }else if(req.url === '/DV.png'){
            const logo = fs.readFileSync('DV.png');
            res.writeHead(200,{'content-type' : 'image/png'})
            res.end(logo)
        }
    }
).listen(8180,()=>{console.log('Server is running at http://localhost:8180')})