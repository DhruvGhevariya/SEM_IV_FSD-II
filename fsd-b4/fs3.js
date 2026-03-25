var fs=require("fs")
fs.writeFileSync("b4.txt","hi")
console.log("sync task completed")
fs.writeFile("b5.txt","hii",(e)=>{
    if(e){console.log(e)}
    else{console.log("Async task completed");}
})
console.log("last execution")
// sync task completed
// last execution
// Async task completed