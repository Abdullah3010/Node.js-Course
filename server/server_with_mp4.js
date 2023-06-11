var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log("Port Number : 3000");
	// change the MIME type to 'video/mp4'
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.open('server/assets/video.mp4',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('server/assets/video.mp4');
			rstream.pipe(res);
		}
		else
		{
			res.write("Its a 404");
			res.end();
		}
	});
}).listen(3000);
						