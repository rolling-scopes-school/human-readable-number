module.exports = function toReadable (num) {

  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',  'nineteen'];
  let b = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // 0-20
  if(num < 20) return a[num];

  // 20-100
  if(num >= 20 && num < 100) {

    if(num % 10 === 0) return b[Math.floor(num/10)]; // 10 20 ..... 90

    return b[Math.floor(num/10)] + ' ' + a[num % 10]; // 11 12  ...... 99
  }

  // 100-1000
  if(num >= 100 && num < 1000){

      if(num % 100 === 0) return a[Math.floor(num/100)] + ' hundred'; // 100 200 ..... 900

      if(num % 10 === 0) return a[Math.floor(num/100)] + ' hundred ' + b[(num % 100)/10]; // 110 120 ..... 990

      if(num % 100 < 20) return a[Math.floor(num/100)] + ' hundred ' + a[num%100]; // 101 102 ..... 909
       return a[Math.floor(num/100)] + ' hundred ' + b[Math.floor((num % 100)/10)] + ' ' + a[(num % 100) % 10] // 111 112  ..... 999
  }
}
