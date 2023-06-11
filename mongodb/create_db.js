var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://abdullah3010:ACVhkm811@mytestdb.3ixmmlf.mongodb.net/?retryWrites=true&w=majority";
// var url = "mongodb+srv://abdullah3010:<password>@mytestdb.dxftv8r.mongodb.net/?retryWrites=true&w=majority";
var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db";
mongo.connect(new_db , function(error , db){
	if (error){
		throw error;
	}
	
	var data = { name : "rishabhio" , age : "25" , mobile : "1234567890" }
	
	db.collection("details").insertOne(data, (err , collection) => {
		if(err) throw err;
		console.log("Record inserted successfully");
		console.log(collection);
	});
});