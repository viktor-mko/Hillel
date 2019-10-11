
let http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    if(req.url === '/post') {
        let body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            res.end(body);
        });
    } else {
        res.end("www");
    };
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));



