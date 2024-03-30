const sumAll = function (numone, numtwo) {
    let sum = 0;
    if (!(typeof numone === "number") || !(typeof numtwo === "number")) {
        return "ERROR";
    } else if (numone < 0 || numtwo < 0) {
        return "ERROR";
    } else if (numone < numtwo) {
        for (let x = numone; x < numtwo + 1; x++)
            sum += x;
    } else if (numone > numtwo) {
        for (let x = numtwo; x < numone + 1; x++)
            sum += x;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;

//  1 and 10
//  1 + 2 + 3 + 4