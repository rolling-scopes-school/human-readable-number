module.exports = function toReadable(number) {
    str = number.toString();
    let res;
    if (str.length === 1) {
      // console.log("yes");
      let ones = [
        "zero",
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
      ones.forEach((el) => {
          // console.log(ones.indexOf(el) + ': ' + el);
        if (number === ones.indexOf(el)) {
          res = el;
          return res;
        }
      });
    }
  //   return res;
    console.log(res);
  }