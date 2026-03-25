// Create HTTP webpage on which Home page display “Welcome to 
// Log in page” in blue color and font size must be 32px, Login page 
// shows one HTML file from static URL having Form with detail for 
// Username, Password, submit and reset button,   Gallery page   reflect 
// one Image “hello.jpg” and any other page shows “Page Not found”.  
// Write all necessary files to perform task. (Image already exist in same 
// folder)

var http = require('http');
var fs = require('fs')
var server = http.createServer(
    function(req,res){
        if(req.url==='/'){
            res.writeHead(200,{'content-type' : 'text/html'});

            res.write(`<h1 style="color: blue; font-weight: 32px;">Welcome to Log in page </h1>`);
            res.end();
            
        }else if(req.url === '/login'){
            fs.readFile('T1/Pactice_PB-113_LoginPage.html',function(err,data){
                if(err){
                    res.writeHead(500);
                    return res.end('error loading file');
                }
                res.writeHead(200,{'content-type' : 'text/html'});

            res.write(data);

            res.end();
            })
            

        }else if(req.url === '/gallery'){
            fs.readFile('DV.png',function(err,data){
                if(err){
                    res.writeHead(500);
                    return res.end('error loading file');
                }
                res.writeHead(200,{'content-type' : 'png/image'});
            
            res.end(data);
            })
            
        }else{
            res.writeHead(404,{'content-type' : 'text/plain'});
            res.write('Page Not Found');
            res.end("\n Please check the url")
        }
    }
)
server.listen(8081,()=>{console.log('Server is running at http://localhost:8081')})
console.log('Thank You')
