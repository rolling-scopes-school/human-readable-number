module.exports = function toReadable(number) {
   const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let i = 0;
   let readableNumber = '';

   if (number.toString().length === 3) {
      return `${arr[Math.floor(number / 100)]} hundred`;
   }
   return zero;
}
