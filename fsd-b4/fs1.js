// file system module
var fs=require("fs");
// fs.mkdirSync("B4"); to create folder
fs.writeFileSync("text.txt","hello")// create a file
// fs.rmdirSync("B4") to remove current folder
var r=fs.readFileSync("text.txt")
// console.log(r) <Buffer 68 65 6c 6c 6f>
console.log(r.toString())//hello
fs.appendFileSync("text.txt","\n How are you ?")
var o=fs.readFileSync("text.txt","utf-8")
console.log(o)
fs.renameSync("text.txt","temp.txt")
fs.unlinkSync("temp.txt")// delete file 