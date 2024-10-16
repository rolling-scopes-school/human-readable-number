module.exports = function toReadable(number) {
    const thirdNum = number % 10;
    const secondNum = Math.floor((number % 100) / 10);
    const firstNum = Math.floor(number / 100);
    const result = [];

    if (number === 0) {
        return "zero";
    }
    if (firstNum > 0) {
        result.push(
            [
                undefined,
                "one hundred",
                "two hundred",
                "three hundred",
                "four hundred",
                "five hundred",
                "six hundred",
                "seven hundred",
                "eight hundred",
                "nine hundred",
            ][firstNum]
        );
    }

    if (secondNum === 1) {
        result.push(
            [
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
            ][thirdNum]
        );
    } else {
        if (secondNum > 1) {
            result.push(
                [
                    undefined,
                    undefined,
                    "twenty",
                    "thirty",
                    "forty",
                    "fifty",
                    "sixty",
                    "seventy",
                    "eighty",
                    "ninety",
                ][secondNum]
            );
        }
        if (thirdNum > 0) {
            result.push(
                [
                    undefined,
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                ][thirdNum]
            );
        }
    }

    return result.join(" ");
};
