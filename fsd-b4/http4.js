var http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(`<h1>style="font-size:45px text-align:center color:red"
            welcome to my website</h1>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>`)
    }
    else if(req.url==="/about")
    {
        res.end()
    }
    else if(req.url==="/contact")
    {
        res.end()
    }
    else{
        res.end("page not found");
    }
}).listen(7007)
// form type