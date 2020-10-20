module.exports = function toReadable (number) {
  if ((typeof(number) !== 'number') || (number < 0) || (number > 999) || !Number.isInteger(number)) {
      return "wrong number";
  }
  let HumanReadableNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  HumanReadableNumber[20] = 'twenty';
  HumanReadableNumber[30] = 'thirty';
  HumanReadableNumber[40] = 'forty';
  HumanReadableNumber[50] = 'fifty';
  HumanReadableNumber[60] = 'sixty';
  HumanReadableNumber[70] = 'seventy';
  HumanReadableNumber[80] = 'eighty';
  HumanReadableNumber[90] = 'ninety';
  for (let i = 100; i < 1000; i = i + 100) {
    HumanReadableNumber[i] = HumanReadableNumber[i / 100] + ' hundred';
  }
  for (let i = 21; i < 100; i++) {
      if (i % 10 !== 0) {
        HumanReadableNumber[i] = HumanReadableNumber[i - (i % 10)] + ' ' + HumanReadableNumber[i % 10];
      }
  }
  for (let i = 101; i < 1000; i++) {
      if (i % 100 !== 0) {
        HumanReadableNumber[i] = HumanReadableNumber[i - (i % 100)] + ' ' + HumanReadableNumber[i % 100];
      }
  }
  return HumanReadableNumber[number];
}
