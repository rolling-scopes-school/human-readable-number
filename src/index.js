module.exports = function toReadable (number) {
    let num = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numTeen = ['ten', 'eleven', 'twelve', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let numTy = ['ty', '', 'twen', 'thir', 'for'];
    let numberHundred = Math.floor(number/100);
    let numberTy = Math.floor((number - numberHundred*100)/10);
    let numberNum = number - numberHundred*100 - numberTy*10;
    let textHundred = '';
    let textTy = '';
    let textNum ;
    
    let textEmptyH = numberTy != 0 || numberNum != 0 ? ' ' : '';
    
    if (numberHundred > 0) {
      textHundred = num[numberHundred] + ' hundred' + textEmptyH;
    } else {
      textHundred = '';
    }

    if (numberTy > 1 && numberTy < 5) {
      textTy = numTy[numberTy] + 'ty';
    } else if (numberTy > 1 && numberTy > 4) {
      textTy = numTeen[numberTy] + 'ty';
    } else if (numberTy == 1 && numberNum < 3) {
      textTy = numTeen[numberNum];
    } else if (numberTy == 1 && numberNum > 2 ) {
      textTy = numTeen[numberNum] + 'teen';
    } else {
      textTy = ''
    }

    if (numberNum > 0 && numberTy != 1 ) {
      textNum = num[numberNum];
    } else if (numberNum == 0 && number == 0) {
      textNum = 'zero';
    } else {
      textNum = '';
    }
    
    let textEmptyT = numberTy > 1 && numberNum != 0 ? ' ' : '';
    
    return textHundred + textTy + textEmptyT + textNum;
  }
