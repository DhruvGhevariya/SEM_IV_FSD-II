const EventEmitter = require('events');
var ee = new EventEmitter();
var fs = require('fs');

var fun1 = function () {
    fs.writeFile('help.txt', 'You Are creating file \n', (err) => {
        if (err) throw err;
        console.log('File Created & Data Written');
    });
};

var fun2 = function () {
    fs.appendFile('help.txt', 'This is new line\n', (err) => {
        if (err) throw err;
        console.log('File Appended');
    });
};

var fun3 = function () {
    fs.readFile('help.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('File Content : ', data);
    });
};

ee.on('writefile', fun1);
ee.on('append', fun2);
ee.on('read', fun3);

ee.emit('writefile');
// console.log('File is created\n');

ee.emit('append');
// console.log('File is appended\n');

ee.emit('read');
// console.log('File is read\n');