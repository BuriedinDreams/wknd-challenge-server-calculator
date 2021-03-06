const express = require('express');
const send = require('send');
const app = express();
const PORT = 5000;

const calculation = require('./modules/calculator.js');

// const calculatorInfo = require('./modules/calculator.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// These items are required in order for the server to run.

// Serve up static files (HTML, CSS, Client JS etc.)
app.use(express.static('server/public'));

app.get('/calculator', function (req, res) {
  res.send(calculation.historyOfResults); // this needs to sent over to .then 'GET' ajax. | historyOfResults is coming from calc.js file; it's the array at the top.
});

app.post('/calculator', function (req, res) {
  let mathEquation = req.body.items_to_equate;
  console.log('here are my results', mathEquation);
  console.log('req.body', req.body);
  //
  calculation.solveTheMaths(mathEquation); // this is sending the mathEquation to the solveTheMath func in calculator.js file.
  //
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('Server is running on port', PORT);
});
