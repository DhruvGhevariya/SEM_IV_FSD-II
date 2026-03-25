var eventemitter=require("events")
var ee=new eventemitter();
var fs= require("fs");
ee.on("circle",(r)=>{
    if(r<0){console.log("radius must be positive")}
    else{console.log(`Area of the circle is ${3.14*r*r}`)}
})
ee.on("square",(s)=>{
    if(s<0){console.log("side must be positive")}
    else{console.log(`Area of the square is ${s*s}`)}
})
ee.emit("circle",10)
ee.emit("square",20)
// Area of the circle is 314
// Area of the square is 400