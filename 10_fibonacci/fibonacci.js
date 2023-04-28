const fibonacci = function (member) {
    if (member < 0) return "OOPS";
    if (member ===0) return 0;
    if (member < 3) return 1;
    return fibonacci(member - 1) + fibonacci(member - 2);
};
console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;
