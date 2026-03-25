var http = require('http');
var fs = require('fs');
var url = require('url');
var add = 'http://localhost:6051/T1/Practic.html';
process.noDeprecation=true;

var q = url.parse(add,true);
// console.log(q)

http.createServer(function(req,res){
    fs.readFile('.'+q.pathname , function(err,data){
        if(err){
            res.writeHead(404,{'content-Type':'text/palin'});
            res.end('File Not Found');
        }else{
            res.writeHead(200,{'content-Type':'text/html'});
            res.end(data);
        }
    });
}).listen(6051,()=>{console.log('Server is running at http://localhost:6051')})