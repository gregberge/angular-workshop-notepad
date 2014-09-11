var path = require('path');
var express = require('express');
var app = express();

// Expose the application.
app.use(express.static(path.join(__dirname, 'client')));

// API
app.use('/api', require('./api'));

app.listen(process.env.PORT || 3000);