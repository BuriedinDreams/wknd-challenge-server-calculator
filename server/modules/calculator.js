let historyOfResults = [];

function solveTheMaths(param) {
  console.log('inside solveTheMaths func');
  console.log('this is param', param);
  console.log('what Operator is this: ', param.theOperator);

  let result;

  // using if...else if... else
  if (param.theOperator == '+') {
    result = Number(param.enterNum1) + Number(param.enterNum2);
  } else if (param.theOperator == '-') {
    result = Number(param.enterNum1) - Number(param.enterNum2);
  } else if (param.theOperator == '*') {
    result = Number(param.enterNum1) * Number(param.enterNum2);
  } else {
    result = param.enterNum1 / param.enterNum2;
  }
  param.currentResults = result; // this is the only spot this is place, be careful of this.
  console.log('this is param.currentResults key in it', param);
  historyOfResults.push(param);

  return result;
}

module.exports = {
  solveTheMaths,
  historyOfResults,
};
