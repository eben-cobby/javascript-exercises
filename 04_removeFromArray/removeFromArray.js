
const removeFromArray = function (array, ...valuesToRemove) {
    // loop through value to remove
    for (let valueToRemove of valuesToRemove) {
        //if value to remove is in the array, remove it
        let indexToRemove = array.indexOf(valueToRemove);
        if (indexToRemove !== -1) {
            array.splice(indexToRemove, 1);
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
