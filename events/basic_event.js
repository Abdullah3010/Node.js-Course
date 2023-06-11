var fs = require('fs');

var rs = fs .createReadStream('events/text_plain.txt');


rs.on('open', function () {
    console.log('The file is open');
});

rs.on('close', function () {
    console.log('The file is closed');
});

rs.on('error', function (err) {
    console.log('Error: ' + err);
});


