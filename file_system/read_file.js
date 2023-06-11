var http = require('http');
var fs = require('fs');
var filename = 'file_system/demo_file.html';

http.createServer(function (req, res) {
    fs.readFile(filename, function(error, date){
        console.log(date);
        console.log(error);
        if (error){
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.writeHead(200, {'content-type' : 'text/html'});
            res.write(date);
        }
        return res.end();
    });
}).listen(3000);

//Read File sync
 //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content : ' + content);
