module.exports = function toReadable (number) {
  let temp = String(number).split('');
  let res = '';
  const numb = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const twenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const hundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (temp.length === 1) {
    res = numb[number];
  }  
  if (temp.length === 2 && temp[0] > 1 && temp[1] == 0) {
    res = hundred[temp[0]-2]; 
  }
  if (temp.length === 2 && temp[0] > 1 && temp[1] > 0){
    res = hundred[temp[0]-2] + ' ' + numb[temp[1]];
  } 
  if (temp.length === 2 && temp[0] == 1){
    res = twenty[temp[1]];
  }
  if (temp.length === 3 && temp[2] == 0) {
    res = temp[1] == 0 ? numb[temp[0]] + ' hundred' : (temp[1] == 1 ? numb[temp[0]] + ' hundred ' + twenty[temp[2]] : numb[temp[0]] + ' hundred ' + hundred[temp[1]-2]);
  }
  if (temp.length === 3 && temp[2] > 0) {
    res = temp[1] == 0 ? numb[temp[0]] + ' hundred ' + numb[temp[2]]: (temp[1] == 1 ? numb[temp[0]] + ' hundred ' + twenty[temp[2]] : numb[temp[0]] + ' hundred '  + hundred[temp[1]-2] + ' ' + numb[temp[2]]);
  }
  return res;
};