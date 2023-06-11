var http  = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    var json = {
        name: "Abdullah",
        age: 24,
        address: "Egypt",
        email: "abdullah.mohamed102001@gmail.com"
    };
    response.end(JSON.stringify(json));
}).listen(3000);