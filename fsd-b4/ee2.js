var eventemitter=require("events")
var ee=new eventemitter();
var fs= require("fs")
ee.on('createfolder',()=>{
    if(!fs.existsSync("pqr"))
    {
        fs.mkdirSync("pqr")
    }else{console.log("folder already exists");}
     ee.emit("writefile");
})
ee.on("writefile",()=>{
    fs.writeFileSync("pqr/xyz.txt","Hello everyone");
    fs.appendFileSync("pqr/xyz.txt","\nHow are you?")
    ee.emit("readfile")
})
ee.on("readfile",()=>{
    var a=fs.readFileSync("pqr/xyz.txt","utf-8");
    console.log(a)
})
ee.emit("createfolder")
// Hello everyone
// How are you?