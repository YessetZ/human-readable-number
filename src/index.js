module.exports = function toReadable (number) {
    let temp = number; 
    let length = Math.abs(number).toString().length;
    let counter = 0;
    let read = "";

    const one = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const two = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const three = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const four = ["hundred", "thousand", "million", "billion"];

    for (; length > 0; length--) {

        
        if (length === 1) {
            read += one[temp % 10];
        }
        // 10-90
        else if (length === 2 && temp % 10 === 0) {
            read += three[temp / 10 - 1];
            length--;
        }
        // 11-19
        else if (length === 2 && temp < 20) {
            read += two[temp % 10 - 1];
            length--;
        }
        // 21-99
        else if (length === 2) {
            read += three[Math.floor(temp / 10) - 1] + " ";
        }
        // 100 - 900
        else if (length === 3 && temp % 100 === 0) {
            read += one[Math.floor(temp / 100)] + " " + four[0];
            length -= 2;
        }
        // 101 - 909
        else if (length === 3 && temp % 100 < 10) {
            read += one[Math.floor(temp / 100)] + " " + four[0] + " ";
            length--;
        }
        // 110 - 999
        else if (length === 3) {
            read += one[Math.floor(temp / 100)] + " " + four[0] + " ";
            temp %= 100;
        }
    }

    return read.trim();
}

/* 
if (number === 0)
read = one[0];

for ( ; length > 0 && number != 0; length--) {   

temp = number;

if (temp < 10 && length === 1) {
    read += one[temp];
}
else if (temp % 10 != 0 && temp < 20 && length === 2) {
    counter = Math.floor(temp % 10) - 1;
    read += two[counter];
    length -= 2;
}
else if (temp % 10 === 0 && temp > 9 && temp < 100 && length === 2) {
    counter = counter = Math.floor(temp / 10) - 1;
    read += three[counter];
    length -= 2;
}
else if (temp % 10 != 0 && temp > 20 && temp < 100) {
    counter = Math.floor(temp / 10) - 1;
    read += three[counter] + " ";
    number %= 10;
}
else if (temp >= 100 && temp < 1000) {
    counter = Math.floor(temp / 100);
    read += one[counter] + " " + four[length - 3] + " ";
    number %= 100;
    length--;
}
else {
    length = -1;
}
}
*/
