module.exports = function toReadable (number) {
  let firstArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let secondArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numStr = number.toString();

 if (number < 20) {
    return firstArray[number];
 } 
 
 if (number >= 20 && number < 100) {
    let newNum = secondArray[numStr[0] - 2];
    return numStr[1] > 0 ? newNum = newNum + ' ' + firstArray[numStr[1]] : newNum;
 }

 if (number >= 100 && number < 1000) {
    let newNum = firstArray[numStr[0]] + ' hundred';
    if (numStr[1] > 1) {
        newNum = newNum + ' ' + secondArray[numStr[1] - 2];
        return numStr[2] > 0 ? newNum = newNum + ' ' + firstArray[numStr[2]] : newNum;
    } 
     numStr = numStr.substring(1);
     numStr = numStr - 0;
     return numStr > 0 ? newNum + ' ' + firstArray[numStr] : newNum;
     
 }
 }

 

