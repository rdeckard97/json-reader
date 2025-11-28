const express = require('express');
const path = require('path');
const app = express();


// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
const home_routes = require('./routes/home');
app.use('/', home_routes);

app.listen(3000, ()=>{
    console.log('Server on http://localhost:'+3000);
});