var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'file_system/uploads/' + files.filetoupload.originalFilename;
      fs.readFile(oldpath, function (err, data) {
        if (err) throw err;
        console.log('File read!');

        // Write the file
        fs.writeFile(newpath, data, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
            console.log('File written!');
        });

        // Delete the file
        fs.unlink(oldpath, function (err) {
            if (err) throw err;
            console.log(oldpath + ' deleted');
        });
    });
 });
  } else {
    fs.readFile('file_system/upload_file_form.html', function (error, date) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(date);
        }
        return res.end();
    });
  }
}).listen(3000);