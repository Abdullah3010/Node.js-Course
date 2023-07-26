var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/login', function (res, req) {
    var email = req.query;

    res.send('Email: ' + email);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})