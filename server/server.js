const express = require('express');
const send = require('send');
const app = express();
const PORT = 5000;

const calculation = require('./modules/calculator.js');

// const calculatorInfo = require('./modules/calculator.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// These items are required inorder for the server to run.

// Serve up static files (HTML, CSS, Client JS etc.)
app.use(express.static('server/public'));

app.get('/calculator', function (req, res) {
  res.send(calculation.solveTheMaths());
});

app.post('/calculator', function (req, res) {
  let mathEquation = req.body.items_to_equate;
  console.log('here are my results', mathEquation);
  console.log('req.body', req.body);
  //
  calculation.solveTheMaths(mathEquation);
  //
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('Server is running on port', PORT);
});
