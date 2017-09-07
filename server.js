// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();



app.get("/", function (request, response) {
  
  var ip = request.headers["x-forwarded-for"].split(",")[0];
  var software = request.headers["user-agent"].split(/[()]/g)[1];
  var language = request.headers["accept-language"].split(",")[0]; 
  var result = {
    ipaddress : ip,
    language : language,
    software : software
  }
  response.send(result);
});

app.listen(3000)
