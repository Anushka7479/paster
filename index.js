var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    paster = require('./controllers/paster');
    logger = require('morgan');
    bodyParser = require('body-parser');

paste = require('./models/objects.js');
randomGenerator = require('./models/randomizer.js');

mongoose.connect('mongodb://localhost/paster');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/create/:id', paster.create);
app.get('/create', paster.create);
app.post('/create', paster.createnew);
app.get('/list', paster.list);
app.get('/show/:id', paster.show);
app.get('/random', function(req, res) {
   var randomized = randomGenerator(25);
   res.send(randomized);
});
app.get('/', paster.index);
 
app.listen(port, function(err) {
   console.log('Listening on %s', port);
});
