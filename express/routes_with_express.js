const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('this is the root path');
});

app.get('/about', function (req, res) {
    res.send('this is the about path');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact path');
});

app.listen(3000, function () {
    console.log('Server is listening at 3000');
});


// Routes with Query
app.get('/login', function (req, res) {
    res.write(req.query.email);
    res.write(req.query.password);
    res.end();
});