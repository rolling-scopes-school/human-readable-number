const belowTen = (n) => {
    switch (n) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
      default: return '';
    }
  }
  
  const belowNineteen = (n) => {
    switch (n) {
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
      default: return '';
    }
  }
  
  const ten = (n) => {
    switch (n) {
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
      default: return '';
    }
  }
  
  const hundred = (n) => {
    switch (n) {
      case 1: return 'one hundred';
      case 2: return 'two hundred';
      case 3: return 'three hundred';
      case 4: return 'four hundred';
      case 5: return 'five hundred';
      case 6: return 'six hundred';
      case 7: return 'seven hundred';
      case 8: return 'eight hundred';
      case 9: return 'nine hundred';
    }
  }
  
module.exports = function toReadable (num) {
    if (num === 0) return 'zero';
    if (num <= 9) return (belowTen(num));
  
  
    if (num <= 19) return (belowNineteen(num));
  
  
    if (num < 100) {
      if (num % 10 === 0) {
        return ten( Math.floor(num / 10));
      }
    return (ten( Math.floor(num / 10)) + ' ' + belowTen(num % 10));
    }
  
  
    if (num < 1000)  {
        if (num % 100 === 0) {
            return hundred(Math.floor(num / 100));
        }
      if (num % 100 >= 10 && num % 100 <= 19) {
        return (hundred(Math.floor(num / 100)) + ' ' + belowNineteen(num % 100));
      }
      if (num % 10 === 0) {
        return (hundred(Math.floor(num / 100)) + ' ' + ten(Math.floor((num % 100) / 10)));
      }
      if (num % 100 <= 9) {
        return (hundred(Math.floor(num / 100)) + ' ' + belowTen(num % 10));
      }
      return (hundred(Math.floor(num / 100)) + ' ' + ten(Math.floor((num % 100) / 10)) + ' ' + belowTen(num % 10));
    }  
}
