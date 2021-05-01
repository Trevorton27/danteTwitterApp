const express = require ('express');
const app = express();
const path = require('path')
const axios = require('axios');
const port = 3001;

app.use('/' , express.static('public'));

app.get("/", (req, res) => {
  console.log("Responding to root route");
  res.send("Hello from Root!");
});

app.get('/api/',(req, res) => {

}

app.listen(port, () => {
  console.log('server is listening on port 3001!');
});