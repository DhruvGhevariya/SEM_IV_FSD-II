var eventemitter=require("events")
var ee=new eventemitter();
ee.on("first",()=>{console.log("first task");})
var add=(a,b)=>{console.log(`Addition is ${a+b}`)}
ee.on("Second",add)
ee.on("Second",()=>{console.log("completed")})
ee.on("first",()=>{console.log(" first task completed")})
ee.emit("first")
ee.emit("Second",3,6)
// first task
//  first task completed
// Addition is 9        
// completed
