const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// These items are required inorder for the server to run.

// Serve up static files (HTML, CSS, Client JS etc.)
app.use(express.static('server/public'));

app.get('/', function (req, res) {
  res.send('<h3> Testing </h3>');
});

app.listen(PORT, function () {
  console.log('Server is running on port', PORT);
});
