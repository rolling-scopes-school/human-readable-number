module.exports = function toReadable(number) {

    return numbersToWords(number)
}

function numbersToWords(number) {

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const multiTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let strNum = number.toString()

    if (number == 0) {
        return 'zero'
    }

    if (number < 20) {
        return ones[number]
    }

    if (number >= 20 && number <= 99) {

        if (number === 20) {
            return multiTens[strNum[0]]
        }
        if (number !== 20 && strNum[1] === '0') {
            return multiTens[strNum[0]]
        }
        return multiTens[strNum[0]] + ' ' + ones[strNum[1]]
    }

    if (number >= 100) {

        if (strNum[1] === '0' && strNum[2] === '0') {
            return ones[strNum[0]] + ' ' + 'hundred'
        } else {
            return ones[strNum[0]] + ' ' + 'hundred' + ' ' + numbersToWords(parseInt(strNum[1] + strNum[2]))
        }
    }
}