module.exports = function toReadable (num) {
    
    const hundreds = num / 100;
    const hundredsRounded = Math.floor(hundreds)
    num = (num - (hundredsRounded * 100));
    const tens = num / 10;
    const tensRounded = Math.floor(tens);
    ones = (num - (tensRounded * 10));

    let result = '';
    let resultFinal = '';
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    if (hundredsRounded === 0 && tens === 0 && ones === 0) {
        return resultFinal = `zero`;
    } else if (hundredsRounded > 0 && tens === 0 && ones === 0) {
        return resultFinal = `${numbers[hundredsRounded]} hundred`;
    } else if (hundredsRounded > 0 && (tens > 0 || ones > 0)) {
        result = `${numbers[hundredsRounded]} hundred`;
    }

    if ((tens * 10) >= 20 && ones !== 0) {
        resultFinal = `${result} ${numbers[(tensRounded * 10)]} ${numbers[ones]}`;
    } else if ((tens * 10) >= 20 && ones === 0) {
        resultFinal = `${result} ${numbers[(tensRounded * 10)]}`;
    } else if ((tens * 10) < 20 && tens > 0) {
        resultFinal = `${result} ${numbers[tens * 10]}`;
    } else if (tens === 0 && ones !== 0) {
        resultFinal = `${numbers[ones]}`;
    }

    return resultFinal.trim();
}
