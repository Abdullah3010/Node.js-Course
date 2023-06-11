var con = require('./create_connection_with_database.js').con('mytestdb');


var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
con.end();