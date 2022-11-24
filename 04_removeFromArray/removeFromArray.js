const removeFromArray = function(...items) {
    const myArray = items[0];
    const newArray = [];

    myArray.forEach((i) => {
        if(!items.includes(i)) {
            newArray.push(i);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
