const sumAll = function(num1,num2) {
    let sum = 0;
    if(num1 < num2) {
        for (let i = num1; i <= num2; i++)
        sum += i;
    }
    else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) 
        sum += i;
    }
    else {
        sum = num1 + num2;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
