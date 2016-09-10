var nunjucks = require('nunjucks');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

console.log(__dirname);
app.use(express.static(__dirname + '/dist'));

// views is directory for all template files

app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(request, response) {
  // console.log(response);
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
