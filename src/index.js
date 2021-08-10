module.exports = function toReadable (number) {
  let numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let numbers2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let numbers3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number >= 0 && number < 10) {
    return numbers1[number];
  } else if (number > 10 && number < 20) {
    return numbers2[number - 11];
  } else if (number >= 20 && number < 100 || number == 10) {
    return (number % 10 == 0) ? numbers3[Math.floor(number / 10) - 1] : numbers3[Math.floor(number / 10) - 1] + ' ' + numbers1[number % 10];
  } else if (number >= 100 && number < 1000) {
      if (number % 100 == 0) {
          return numbers1[number / 100] + ' hundred';
      } else if (number % 10 == 0) {
          return numbers1[Math.floor(number / 100)] + ' hundred ' + numbers3[number % 100 / 10 - 1];
      } else if (number % 100 > 10 && number % 100 < 20) {
        return numbers1[Math.floor(number / 100)] + ' hundred ' + numbers2[number % 100 - 11];
      } else if (number % 100 >= 20 && number % 100 < 100 && Math.floor(number % 100 / 10 - 1) != 0 ) {
        return numbers1[Math.floor(number / 100)] + ' hundred ' + numbers3[Math.floor(number % 100 / 10) - 1] + ' ' + numbers1[number % 10]
      } else {
        return numbers1[Math.floor(number / 100)] + ' hundred ' + numbers1[number % 10]
      }
  }
}
