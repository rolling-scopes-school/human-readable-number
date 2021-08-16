module.exports = function toReadable(number) {
   const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let i = 0;
   let readableNumber = '';

   if (number.toString().length === 3 && number % 100 === 0) {
      return `${arr[Math.floor(number / 100)]} hundred`;
   }
   else if (number.toString().length === 1 && number !== 0) {
      return `${arr[number % 10]}`;
   }
   else if (number === 0) {
      return 'zero';
   }
   else if (number.toString().length === 2 && number > 9 && number < 20) {
      return `${arr[number % 100]}`;
   }
   else if (number.toString().length === 2 && number > 20) {
      return `${arrDozens[Math.floor(number / 10)]} ${arr[number % 10]}`;
   }
   else if (number.toString().length === 3 && number % 100 > 0 && number % 100 < 20) {
      return `${arr[Math.floor(number / 100)]} hundred ${arr[number % 100]}`;
   }
   else {
   }
}
