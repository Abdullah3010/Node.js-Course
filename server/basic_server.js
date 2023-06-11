var http = require('http');
var dt = require('./my_frist_module');
var url = require('url');




var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(request.url + "\n");
    response.write(dt.myDateTime() + "\n");
    var query = url.parse(request.url, true).query;
    response.write(query.year + "\n");
    response.end('Server Working Success');
  });
  
  server.listen(port, (error) => {  
    if (error) {
      return console.log('Error occured : ', error );
    }
    console.log(dt.myDateTime());
    console.log('server is listening on ' + host + ':'+ port);
  });	