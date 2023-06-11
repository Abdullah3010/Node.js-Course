var con = require('./create_connection_with_database.js').con("mytestdb");



var sqlList = [
    ['Abdullah', 'Highway 37'],
    ['Mohamed', 'Highway 37'],
    ['Ali', 'Highway 37'],
    ['Ahmed', 'Highway 37'],
    ['Sayed', 'Highway 37'],
    ['Khaled', 'Highway 37'],
    ['Mahmoud', 'Highway 37'],
    ['Hassan', 'Highway 37'],
];


sqlList.forEach(sqlargs => {
    var sql = "INSERT INTO customers (name, address) VALUES ('" + sqlargs[0] + "', '" + sqlargs[1] + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

con.end();
