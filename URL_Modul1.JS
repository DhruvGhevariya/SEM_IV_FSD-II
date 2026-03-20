// Write node js script to fetch the querystring from the url and check if year is leap year or not
var u = require('url');
process.noDeprecation=true;
var add = 'http://localhost:8080/default.html?year=2025&month=feb';
var q =  u.parse(add,true);
console.log(q);
var qdata = q.query;
console.log(qdata.year)
if(qdata.year%4==0) {
    console.log("Its a leap year") 
}
else{
    console.log("Its not a leap year")
}