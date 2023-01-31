module.exports = function toReadable (number) {
  const arrayUnits = {
    1: 'one',
    2: 'two', 
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  const arrayNumbers = {
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
  }
  const arrayDozen = {
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  const arrayDigits = {
    3: 'hundred',
    4: 'thousand',
    5: 'thousand',
    6: 'thousand',
    7: 'billion',
  }
  let rank = 0;
  number = Array.from(toString(number));

  console.log(rank);

  return;
}

toReadable(500);
