var fs=require("fs");
// fs.mkdirSync("abc");
fs.writeFileSync("abc/my.txt","Node Js")
fs.writeFileSync("abc/new.txt","FS Module")
fs.appendFileSync("abc/my.txt","\n How are you ?")
var r=fs.readFileSync("abc/my.txt")
fs.writeFileSync("abc/new.txt",r)
// fs.unlinkSync("abc/my.txt")
fs.copyFileSync("abc/my.txt","abc/my1.txt")