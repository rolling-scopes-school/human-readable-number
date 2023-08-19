module.exports = function toReadable (number) {
  let temp = String(number).split('');
  const numb = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];
  const twenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eigthteen', 'nineteen'];
  const hundred = ['ten', 'twenty', 'thirty', 'fourty', 'fivety', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (temp.length === 1) {
    return numb[number];
  }  
  if (temp.length === 2) {
    temp[0] === '1' ? twenty[temp[1]] : hundred[temp[0]-1] + ' ' + numb[temp[1]];
  }
  if (temp.length === 3) {
    temp[1] === '1' ? numb[temp[0]] + ' hundred ' + twenty[temp[1]] : numb[temp[0]] + ' hundred ' + hundred[temp[1]-1] + ' ' + numb[temp[2]];
  }
};
