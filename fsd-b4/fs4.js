var fs=require("fs");
fs.writeFileSync("content.txt","Hello! B4 students \nwelcome to node js tutorial")
var d=fs.readFileSync("content.txt","utf-8")
var i=0
var v="aeiouAEIOU"
for(let a=0;a<d.length;a++){
    if(v.includes(d[a])){
        i++;
    }
}
fs.appendFileSync("content.txt", "Vowels are: "+i)//14