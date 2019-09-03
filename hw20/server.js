const http = require('http'); // подключаем http модуль!
http.createServer((req, res) => {
    res.end('HELLO WORLD');
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));