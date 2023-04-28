const repeatString = function (string, num) {
    let str = "";
    for (num; num > 0; num--) {
        str += string;
    };
    if (num < 0)
        str += "ERROR"
    return str;
};


// Do not edit below this line
module.exports = repeatString;
