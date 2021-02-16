const NUMBERS_AS_READABLES = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

const parseNumber = (number) => {
    const [thousands, hundreds, tens, ones] = String(number)
        .padStart(4, "0")
        .split("")
        .map((n) => +n);
    return { thousands, hundreds, tens, ones };
};

const buildThousands = (num) =>
    num ? `${NUMBERS_AS_READABLES[num]} thousand` : "";
const buildHundreds = (num) =>
    num ? `${NUMBERS_AS_READABLES[num]} hundred` : "";
const buildTens = (num) => (num ? `${NUMBERS_AS_READABLES[num * 10]}` : "");
const buildOnes = (num) => (num ? `${NUMBERS_AS_READABLES[num]}` : "");

const buildReadable = ({ thousands, hundreds, tens, ones }) =>
    (tens * 10 + ones < 21 && tens * 10 + ones
        ? [
              buildThousands(thousands),
              buildHundreds(hundreds),
              NUMBERS_AS_READABLES[tens * 10 + ones],
          ]
        : [
              buildThousands(thousands),
              buildHundreds(hundreds),
              buildTens(tens),
              buildOnes(ones),
          ]
    )
        .filter(($) => $)
        .join(" ");

module.exports = toReadable = (number) =>
    number < 21
        ? NUMBERS_AS_READABLES[number]
        : buildReadable(parseNumber(number));
