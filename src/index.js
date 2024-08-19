module.exports = function toReadable (number) {
  const oneNum = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]; // от 1 до 9
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ]; // от 11 до 19
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]; // десятки 10, 20, и т д
  const hundreds = [
    "",
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
  ]; // сотни

  if (number === 0) {
    return "zero";
  }

  let toWords = "";

  if (number >= 100) {
    toWords = hundreds[Math.floor(number / 100)] + " ";
    number = number % 100;
  }

  if (10 < number && number <= 19) {
    toWords = toWords + teens[number - 10] + " ";
  }

  if (number >= 20) {
    toWords = toWords + tens[Math.floor(number / 10)] + " ";
    number = number % 10;
    toWords = toWords + oneNum[number] + " ";
  } else {
    toWords = toWords + oneNum[number] + " ";
  }

  return toWords.trim();
}
console.log(toReadable(555));
