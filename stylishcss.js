var express = require('express');
var stylus = require('stylus');
var path = require('path');
var app = express();

// app.use(require('stylus').middleware(process.argv[3] || __dirname + '/public'));

app.use(stylus.middleware({
    src: process.argv[3], 
    dest: __dirname + '/public'}));
    
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.get(process.argv[3], function(req, res) {
  res.render('main')
})
app.listen(process.argv[2]);

// var express = require('express')
//     var app = express()
    
//     app.use(require('stylus').middleware(process.argv[3]));
//     app.use(express.static(process.argv[3]));
    
    
//     app.listen(process.argv[2])