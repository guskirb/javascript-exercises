const convertToCelsius = function (fah) {
  let celresult = (fah - 32) * (5 / 9);
  if (celresult % 1 === 0) {
    return celresult;
  } else {
    let rounded = Number(celresult.toFixed(1))
    return rounded;
  }
};

const convertToFahrenheit = function (cel) {
  let result = cel * 1.8 + 32;
  if (result % 1 === 0) {
    return result;
  } else {
    let rounded = Number(result.toFixed(1))
    return rounded;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
