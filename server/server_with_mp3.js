var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.open('audio.mp3',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('server/assets/audio.mp3');
			rstream.pipe(res);
		}
		else
		{
			res.end("Its a 404");
		}
	});
}).listen(3000, '156.195.200.98');