var http=require("http");
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"}); 0
        res.write(`<h1>Welcome LJ University</h1>
            <img src="1.png" width="300" height="300"/>`);
        res.end('<a href="/1.png" target="_blank">Image</a>')
    }
    else if(req.url==="/1.png"){
        const i=fs.readFileSync("1.png");
        res.writeHead(200,{"content-type":"image/png"});
        res.end(i);
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end(`<h2>Sorry,Page Not Found</h2>
            <a href="localhost:5007">Click Here</a>`)
    }
}).listen(5007)
// Welcome LJ University
// Image