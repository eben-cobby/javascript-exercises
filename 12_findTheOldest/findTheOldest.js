const findTheOldest = function (people) {
    let mappedPeople = people.map(item => ({
        name: item.name,
        age: (item.yearOfDeath
            ? item.yearOfDeath - item.yearOfBirth
            : new Date().getFullYear() - item.yearOfBirth)
    }));

    let oldestPerson = mappedPeople.reduce((prev, current) => {
        if (current.age > prev.age) {
            return current;
        } else {
            return prev;
        } 
    });
    return oldestPerson;
    
};
// Do not edit below this line
module.exports = findTheOldest;
