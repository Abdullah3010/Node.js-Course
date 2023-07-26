const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const db = require('./config/keys').MongoURI;
console.log(db);

mongoose.connect(db, { useNewUrlParser: true,}).then(() => {
    console.log('MongoDB connected...');

}).catch(err => {
    console.log(err);
});
//!Body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//!Passport config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/' , require('./routes/index'));
app.use('/users' , require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});