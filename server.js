var express = require('express'),
  app = express(),
  //connect = require('connect'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Contactdb'); 

//app.use(connect.static('./contact'));
app.set('appIndex', './contact/index.html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var userRoutes = require('./api/routes/userRoutes');
var contactRoutes = require('./api/routes/contactRoutes');
userRoutes(app);
contactRoutes(app);


app.listen(port);

//set the routes
app.get('/', function(req, res) {
    res.sendfile(app.set('appIndex'));
});
app.get('/index.html', function(req, res) {
    res.sendfile(app.set('appIndex'))
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Contacts RESTful API server started on: ' + port);