require("dotenv").config();
var http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("<h3>HTTP Module Example</h3>");
    res.end();
}).listen(process.env.PORT,()=>{console.log("Server Started http://localhost:"+process.env.PORT);})

// test/html  for file download
// text/html  for text print
// text/plain  for <h3>.....</h3> print
// write after end then write not working throw error=write after end