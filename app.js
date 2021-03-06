var express = require('express');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');
//Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

//home
app.get('/', routes.home);

//movie_singe
app.get('/star_wars_episode/:episode_number?', routes.movie_singe);

//not found
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);
