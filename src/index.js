module.exports = function toReadable(number) {
    const theFirstTen = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];

    const theSecondTen = [
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const theTens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    const theHundreds = [
        "", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"
    ];

if (number < 10) {
    return theFirstTen[number];
}
else if (number < 20) {
    number = number - 10;
    return theSecondTen[number];
} 
else if (number < 100) {
    const numberTens = Math.floor(number / 10);
    return theTens[Math.floor(numberTens)] + (number % 10 === 0 ? "" : " " + theFirstTen[number % 10]);
} 
else if (number < 1000) {
    const numberHundred = Math.floor(number / 100);
    return theHundreds[numberHundred] + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
} 
else 
    return "Number is out of test data (0-999)";
}

