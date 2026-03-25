
var http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("<h3>HTTP Module Example</h3>");
    res.end();
}).listen(5007,()=>{console.log("Server Started http://localhost:5007")})

// test/html  for file download
// text/html  for text print
// text/plain  for <h3>.....</h3> print
// write after end then write not working throw error=write after end