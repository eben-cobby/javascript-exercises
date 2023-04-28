const sumAll = function (firstNumber, secondNumber) {
    if (firstNumber < 0 ||
        secondNumber < -1 ||
        !Number.isInteger(firstNumber) ||
        !Number.isInteger(secondNumber)
    ) {
        return "ERROR";
    }

    let min = Math.min(firstNumber, secondNumber);
    let max = Math.max(firstNumber, secondNumber);
    let result = 0

    for (let i = min; i <= max; i++) {
        result += i;
    };

    return result;
};
console.log(sumAll(1, 5))
// Do not edit below this line
module.exports = sumAll;
