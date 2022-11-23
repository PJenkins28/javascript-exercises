const repeatString = function(string,num) {
    let stringValue = '';
    let count = 0;
    
    if (num < 0) {
        return 'Error';
    }
    else {
        while (count < num) {
            stringValue += string;
            count++;
        }
        return stringValue;
    }
    
}

// Do not edit below this line
module.exports = repeatString;
