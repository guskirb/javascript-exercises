
const reverseString = function (text) {
    let newtext = ""
    let reverse = text.split("");
    for (let x = reverse.length; x > 0; x--) {
        newtext += reverse.pop();
    }
    return newtext;
};

// Do not edit below this line
module.exports = reverseString;
