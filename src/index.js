module.exports = function toReadable (number) {
    const numbersTable = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'one hundred'
    }
  
    let result = '';
    let tens;
    let units = number % 10;
    
    if (numbersTable[number]) {
        return numbersTable[number];
    } else {
        if (parseInt(number / 100)) {
            let hundreds = parseInt(number / 100);
            if (number % 100 == 0) {
                result = numbersTable[hundreds] + ' hundred';
            } else {
                tens = number - (number - (number % 100));
            if (numbersTable[tens]) {
                result = numbersTable[hundreds] + ' hundred ' + numbersTable[tens];
            } else {
                tens = tens - units;
                result = numbersTable[hundreds] + ' hundred ' + numbersTable[tens] + ' ' + numbersTable[units];
            }
            }
        } else if (parseInt(number / 10)) {
            tens = number - units;
            result = numbersTable[tens] + ' ' + numbersTable[units];
        }
    }
    return result;
  }
