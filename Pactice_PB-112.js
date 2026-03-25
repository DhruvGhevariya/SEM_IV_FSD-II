var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// Original URL
var dataUrl = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

// Parse URL
var parsedUrl = url.parse(dataUrl);
var filename = parsedUrl.pathname.split('/').pop(); // exam.txt
var hash = parsedUrl.hash || ""; // #AllTheBest

// Parse query and decode properly
var rawParams = querystring.parse(parsedUrl.query);
var params = {
    c1: decodeURIComponent(rawParams.c1 || ""),
    c2: decodeURIComponent(rawParams.c2 || ""),
    c3: decodeURIComponent(rawParams.c3 || "")
};

// Prepare file content
var content = `${params.c1}!\n${params.c3} ${params.c2}\n${hash}`;

// Write to file
fs.writeFileSync(filename, content, 'utf8');
console.log(`File "${filename}" created with content:\n${content}`);

// Create HTTP server
var server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end('Error reading file');
            }

            // Wrap each line in red H1
            var htmlContent = data.split('\n')
                .map(line => `<h1 style="color:red;">${line}</h1>`)
                .join('');

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(htmlContent);
        });

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

// Start server
server.listen(8081, () => {
    console.log('Server running at http://localhost:8081');
});