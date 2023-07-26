var mysql = require('mysql');

//!Must Start MySQL Server before running this code
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mytestdb"
});
console.log("Connected!");


exports.con = function (db) {
    console.log("Connected!");

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: db
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

      return con;
};