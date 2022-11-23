const repeatString = function(string,num) {
    let stringValue = '';
    let count = 0;
    
    while (count < num) {
        stringValue += string;
        count++;
    }
    return stringValue;
}

// Do not edit below this line
module.exports = repeatString;
