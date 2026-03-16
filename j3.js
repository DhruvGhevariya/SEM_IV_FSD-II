const EventEmiiter = require('events');
var ee = new EventEmiiter();
var fun1 = (msg)=>{console.log('MAssage from Fun1: ' + msg)}
var fun2 = (msg)=>{console.log('MAssage from Fun2: ' + msg)}
// ee.on('myEvent1:' + fun1);
ee.on('myEvent1' ,fun1);
ee.on('myEvent2' ,fun1);
ee.on('myEvent1' , fun2);
ee.on('myEvent2' , fun2);
ee.removeListener('myEvent2',fun2)

// ee.removeAllListeners('myEvent1')
// ee.removeAllListeners('myEvent2')


ee.emit('myEvent1','LJUniversity')
ee.emit('myEvent2','LJU')