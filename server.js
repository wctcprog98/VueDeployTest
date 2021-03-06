const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const exp = require('constants');

const app = express();

//serves files from our dist directory where index.html file is located
app.use('/', serveStatic(path.join(__dirname, '/dist/')))

const port = process.env.PORT || 8080; 
app.listen(port);

console.log("Listening on port: " + port); 