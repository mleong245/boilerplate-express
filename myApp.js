var express = require('express');
var app = express();

console.log("Hello World");

app.get('/', function(req, res) {
    const pathToIndexPage = __dirname + "/views/index.html";
    res.sendFile(pathToIndexPage);
});






 module.exports = app;
