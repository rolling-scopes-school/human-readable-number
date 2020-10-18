module.exports = function toReadable (number) {
  let num = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let numTeen = ['teen', 'ten', 'eleven', 'twelve', 'thir', 'four', 'fif'];
  let numTy = ['ty', '', 'twen', 'thir', 'for', 'fif'];
  let numberHundred = Match.floor(number/100);
  let numberTy = Match.floor((number - numberHundred*100)/10);
  let numberNum = Match.floor(number - numberHundred*100 - numberTy*10);

  if (numberHundred > 0) {
    return textHundred = num[numberHundred] + ' hundred ';
  } else {
      return textHundred = '';
  }
  if (numberTy > 1 && numberTy < 5) {
      return textTy = numTy[numberTy] + 'ty ';
  } else if (numberTy > 1 && numberTy > 5) {
      return textTy = num[numberTy] + 'ty ';
  } else {
      return textTy ='';
  }
  return `${textHundred}${textTy}${num[numberNum]}`;
}
