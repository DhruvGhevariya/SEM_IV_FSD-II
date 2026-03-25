// 4.
// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and font size must be 32px,
// Login page shows one HTML file from static URL having Form with detail for Username, Password, submit and reset button,
// Gallery page   reflect one Image “hello.jpg” and any other page shows “Page Not found”.  
// Write all necessary files to perform task. (Image already exist in same folder)
// 5.
// Write a Node.js program using the HTTP module to create a server that sends a JSON response when the 
// user visits the /api route.The JSON object should contain:name as "Rahul", course as "NodeJS",
// status as "Enrolled"Set the appropriate header for JSON data and display "404 – Page Not Found" for any other route.

var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"}); 
        res.end(`<h1>Welcome My Website</h1>
                <a href="/api">Api</a>
                <a href="/login">Login</a>
                <a href="/1.png" target="_blank">Image</a>`); 
    }
    else if(req.url==="/1.png"){
            const i=fs.readFileSync("1.png");
            res.writeHead(200,{"content-type":"image/png"});
            res.end(i);
    }
    else if(req.url==="/login"){
        <form>
            <label>Username</label><br></br>
            <input type="text" placeholder="enter your name"></input>
            <label>Password</label><br></br>
            <input type="password" placeholder="enter pass"></input>
            <button type="reset">reset</button>
            <button type="submit">submint</button>
        </form>
    }
})