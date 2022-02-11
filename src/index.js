module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let arrNum = number.toString().split('');

    if (number === 0) return 'zero';

    if (arrNum.length == 1) {  
        return ones[number]; 
    }

    if (arrNum.length == 2) {  
       if (number < 100 && number % 10 == 0) {
        return tens[arrNum[0]]; 
       } else if (number < 20) {
        return ones[number]; 
       } else {
        return (tens[arrNum[0]] + ' ' + ones[arrNum[1]]);
       } 
    }
   
    if (arrNum.length == 3) {
        if (arrNum[1] == 0 && arrNum[2] == 0) {
            return (ones[parseInt(arrNum[0])] + ' hundred');
        } else if (arrNum[1] == 0) {
            return (ones[parseInt(arrNum[0])] + ' hundred ' + ones[parseInt(arrNum[2])]); 
        } else if (arrNum[2] == 0) {
            return (ones[parseInt(arrNum[0])] + ' hundred ' + tens[parseInt(arrNum[1])]); 
        }  else if (arrNum[1] == 1) {
            return (ones[parseInt(arrNum[0])] + ' hundred ' + ones[parseInt(arrNum[1] + arrNum[2])]); 
        } else {
            return (ones[parseInt(arrNum[0])] + ' hundred ' + tens[parseInt(arrNum[1])] + ' ' + ones[parseInt(arrNum[2])]);
        } 
    } 
}
