const add = function (...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

const subtract = function (num1, num2) {
  let result = num1 - num2;
  return result;
};

const sum = function (nums) {
  let total = 0;
  for (let x = 0; x < nums.length; x++) {
    total += nums[x];
  }
  return total;
};

const multiply = function (nums) {
  let total = 1;
  for (let x = 0; x < nums.length; x++) {
    total *= nums[x];
  }
  return total;
};

const power = function (num1, num2) {
  let total = 1;
  for (let x = 0; x < num2; x++) {
    total *= num1;
  }
  return total;
};

const factorial = function (num) {
  let total = 1;
  for (let x = num; 0 < x; x--) {
    total *= x;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
