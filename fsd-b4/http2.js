var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    var d={"sub":"FSD-2","faculty":"NAS"};
    res.end(JSON.stringify(d));
}).listen(7001);
// {"sub":"FSD-2","faculty":"NAS"}
// browser ma start mate  ()=>{c.l("started")}