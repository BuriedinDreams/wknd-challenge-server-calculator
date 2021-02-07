function solveTheMaths(param) {
  console.log('inside solveTheMaths func');

  let result;

  // using if...else if... else
  if (param.theOperator == '+') {
    result = param.enterNum1 + param.enterNum2;
  } else if (param.theOperator == '-') {
    result = param.enterNum1 - param.enterNum2;
  } else if (param.theOperator == '*') {
    result = param.enterNum1 * param.enterNum2;
  } else {
    result = param.enterNum1 / param.enterNum2;
  }

  return result;
}

module.exports = {
  solveTheMaths,
};
