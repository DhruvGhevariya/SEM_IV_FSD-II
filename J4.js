const EventEmiter = require('events');
var ee = new EventEmiter();
var listener1 = function listener1(){console.log('Listener1 Executed.')}
var listener2 = function listener2(){console.log('listener2 Executed.')}

ee.on('conn',listener1)
ee.on('conn',listener2)         
// ee.on('conn',listener2)


let count = ee.listenerCount('conn') 
console.log('count1:',count);
ee.emit('conn')

ee.removeListener('conn',listener2)
count = ee.listenerCount('conn') 
console.log('Counting:',count);
ee.emit('conn')

ee.removeAllListeners('conn',listener1)
count = ee.listenerCount('conn') 
console.log('Again count after remove all listener count:',count);
ee.emit('conn')