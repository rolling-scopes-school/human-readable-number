module.exports = function toReadable(number) {
    if (number === 0) return 'zero'
    if (number < 100) return getTwoDigit(number).trimEnd()
    else return getThreeDigit(number).trimEnd()
}
let numb = 101;
let result = "";
const onetoTwe = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const twoDigit = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


function getTwoDigit(num) {
    let intialNumber = parseInt(num);
    if (intialNumber < 20) return onetoTwe[intialNumber];
    let number = intialNumber.toString().split("");
    return `${twoDigit[parseInt(number[0])]} ${onetoTwe[parseInt(number[1])]}`;
}

function getThreeDigit(num) {
    let number = num.toString().split("");
    return `${onetoTwe[parseInt(number[0])]} hundred ${getTwoDigit(number[1] + number[2])}`;
}
