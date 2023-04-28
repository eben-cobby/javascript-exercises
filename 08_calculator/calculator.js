const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let result = 0;
  for (let item of array) {
    result += item;
  };
  return result;
};

const multiply = function (array) {
  let result = 1;
  for (let item of array) {
    result *= item;
  };
  return result;
};

const power = function (number, power) {
  return (number**power);
};

const factorial = function (number) {
  if (number === 0) return 1;
  result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result

};
console.log(multiply([2, 4]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
