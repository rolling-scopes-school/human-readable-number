module.exports = function toReadable(number) {
    str = number.toString();
    let res = "";
    let digit;
    let ones = [
      // "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    let teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let tens = [
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  
    if (str.length === 1) {
      // if 1 digit
      if (number === 0) return "zero";
      findNumber(ones, 1, 1);
      res = `${digit}`;
    } else if (str.length === 2) {
      // 2 digit
  
      find2digits();
    } else if (str.length === 3) {
      findNumber(ones, 3, 1);
      res = `${digit} hundred`;
      if (str[str.length - 2] === "0" && str[str.length - 1] !== "0") {
        findNumber(ones, 1, 1);
        res = `${res} ${digit}`;
      } else if (str[str.length - 2] !== "0") {
        find2digits();
      }
    } else {
      return ("too big");
    }
    // four and more digits
  
    function findNumber(arr, compPos, arrIndex) {
      arr.forEach((el) => {
        if (arr.indexOf(el) + arrIndex === Number(str[str.length - compPos])) {
          digit = el;
        }
        return digit;
      });
    }
  
    function find2digits() {
      if (str[str.length - 2] === "1") {
        findNumber(teens, 1, 0);
        res = `${res} ${digit}`;
      } else {
        findNumber(tens, 2, 1);
        res =`${res} ${digit}`;
  
        if (str[str.length - 1] !== "0") {
          findNumber(ones, 1, 1);
          res = `${res} ${digit}`;
  
        }
      }
  
      return res;
    }
  res = res.trim();
  return res;
  //   console.log(res);
  }