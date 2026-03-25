var eventemitter=require("events")
var ee=new eventemitter();
var fs= require("fs");
var fun1=(x)=>{
    console.log(`Message from fun1 is ${x}`)
}
var fun2=(x)=>{
    console.log(`Message from fun2 is ${x}`);
}
ee.on("event1",fun1);
ee.on("event2",fun2);
ee.on("event1",fun2);
ee.on("event2",fun1);
var c=ee.listenerCount("event1");
console.log(`count is ${c}`);
ee.emit("event1","B4 students")
ee.emit("event2","FSD-2")
ee.removeListener("event1",fun2);
ee.removeAllListeners("event2")
var c1=ee.listenerCount("enent2");
console.log(c1)
// count is 2
// Message from fun1 is B4 students
// Message from fun2 is B4 students
// Message from fun2 is FSD-2
// Message from fun1 is FSD-2
// 0