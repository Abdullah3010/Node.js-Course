var con = require('./create_connection_with_database.js').con("mytestdb");


var sql = "SELECT * FROM customers";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result[0].name);
    console.log(result[0].address);
    console.log('-----------------');
});

con.end();