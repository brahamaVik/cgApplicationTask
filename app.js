const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mysql = require('mysql');
const config = require('./config');
const chatbot = require('./routes/chatBot');
const fs = require('fs');
const expressSession = require('express-session');
const botJson = require('./routes/botJson');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
console.log(process.env.SQL_SERVICE);
app.use(cors());
app.use(expressSession({
    secret: 'vikas@bose',
    resave: true,
    saveUninitialized: true
}));
/**
 * Create database connecttion
 */
if(process.env.SQL_SERVICE && process.env.SQL_SERVICE === 'mongodb') {
    mongoose.connect(config.mongodb.dbconnection, {useNewUrlParser:true, useUnifiedTopology:true}, (error, data) => {
        if(error) {
            console.log(error);
        } else {
            console.log('MongoDB connected!');
        }
    });
} else if(process.env.SQL_SERVICE && process.env.SQL_SERVICE === 'mysql') {
    console.log("MYSQL");
} else {
    console.log("JSON file connected");
    fs.readFile('data/bots.json', 'utf8', (error, data) => {
        if(error) {
            console.log(error);
        } else {
            expressSession.dataArray = data;
        }
    })
}

app.use('/api/chatbot', chatbot);
app.use('/api/botjson', botJson);

app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Server has connected on port '+ port);
    }
});
