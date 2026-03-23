// creat one page woth the two link home and about 

var http = require('http');
var server = http.createServer(
    function(req,res){
        if(req.url === '/'){
            res.writeHead(200,{'content-type' : 'text/html'});

            res.write(`<h1>Home Page</h1><ul>
                <li><a href="/"> Home </a></li>
                <li><a href="/about"> About </a></li></ul>`)

            res.end();

        }else if(req.url === "/about"){
            res.writeHead(200,{'content-type' : 'text/html'});
            res.write(`<h1>About Page</h1><ul>
                <li><a href="/about"> About </a></li></ul>`);

            res.end();

        }else{
            res.writeHead(404,{'content-type' : 'text/plain'});
            res.write('Page Not Found');
            res.end("\n Please check the url")
        }
    }
)
server.listen(8180,()=>{console.log('Server is running at http://localhost:8180')})
console.log('Thank You')