
var con = require('./create_connection.js').con;



con.query("CREATE DATABASE mytestdb", function (err, result) {
    if (err) {
        console.log(err);
    };
    console.log("Database created");
}); 

con.end();
