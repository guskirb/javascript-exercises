const removeFromArray = function (array, ...values) {
    const newarray = [];
    array.forEach(value => {
        if (!values.includes(value))
            newarray.push(value);
    });
    return newarray;
}

// Do not edit below this line
module.exports = removeFromArray;
