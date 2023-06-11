var http  = require('http');
var fs = require('fs');

http.createServer( (req, res)=> {
	// Change the MIME type to application/pdf
	res.writeHead(200, {"Content-Type": "application/pdf"});
	 
	fs.readFile('server/assets/Abdullah Mohamed-2.pdf', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);