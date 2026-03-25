var fs=require("fs");
var data={d:{a:10,b:20,c:[30,20]}}
var d1=JSON.stringify(data)
fs.writeFileSync("cal.txt"," "+d1)
fs.readFileSync("cal.txt","utf-8")
console.log(data.d.a+data.d.b)//30
console.log(data.d.b-data.d.c[1])//0
console.log(data.d.c[0]*data.d.c[1])//600