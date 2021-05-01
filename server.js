const express = require ('express');
const app = express();

app.get("/", (req, res) => {
  console.log("Responding to root route");
  res.send("Hello from Root!");
});

app.listen(3001, () => {
  console.log('server is listening!');
});