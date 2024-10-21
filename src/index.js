module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'Ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numHundreds = Math.trunc(number / 100);
    let balanceHundreds = number % 100;
    let numTens = Math.trunc(balanceHundreds / 10);
    let numUnits = balanceHundreds % 10;
    let result = '';

    if (number === 0) return result = 'zero';
    if (number > 0 && number < 20) {
        return result = units[number];
    }

    if (number >= 20 && number < 100 ) {
        if (numUnits === 0) {
           return result = tens[numTens];
        } else return result = `${tens[numTens]} ${units[numUnits]}`;
    }

    if (number >= 100 && number < 1000) {
        if (balanceHundreds === 0 && numUnits === 0) {
            return result = `${units[numHundreds]} hundred`;
        } else if (balanceHundreds < 20) {
            return result = `${units[numHundreds]} hundred ${units[balanceHundreds]}`;
        } else if (numUnits === 0) {
            return result = `${units[numHundreds]} hundred ${tens[numTens]}`;
        } else {
            return result = `${units[numHundreds]} hundred ${tens[numTens]} ${units[numUnits]}`;
        }
    }
}
