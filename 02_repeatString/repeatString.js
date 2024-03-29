const repeatString = function (text, number) {
    if (number < 0) return "ERROR";
    let word = ""
    for (let x = 0; x < number; x++) {
        word += text;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
