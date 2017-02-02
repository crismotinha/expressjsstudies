var express = require('express');
var http = require('http');
var bodyparser = require('body-parser');
var port = process.argv[2];
var app = express();


app.use(bodyparser.urlencoded({extended:false}));

app.post('/form', function(req, res){
    var result = req.body.str.split('').reverse().join('');
    res.end(result);
    
})

app.listen(port)


//  var express = require('express')
//     var bodyParser = require('body-parser')
//     var app = express()
    
//     app.use(bodyParser.urlencoded({extended: false}))
    
//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })
    
//     app.listen(process.argv[2])