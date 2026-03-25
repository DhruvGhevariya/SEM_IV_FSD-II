var url=require("url")
var addr="https://video.google.com:8080/about?id=20&age=2028#students";
var up=url.parse(addr,true);
console.log(up)
process.noDeprecation=true; // for remove warnimg
if(up.query.year%4==0)
{
    console.log("leap year")
}
else{
    console.log("not a leap year")
}
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',
//   port: '8080',
//   hostname: 'video.google.com', 
//   hash: '#students',
//   search: '?id=20&age=25',
//   query: [Object: null prototype] { id: '20', age: '25' },
//   pathname: '/about',
//   path: '/about?id=20&age=25',
//   href: 'https://video.google.com:8080/about?id=20&age=25#students'}
// not a leap year