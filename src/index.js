module.exports = function toReadable (number) {
    
    if( isNaN(number) ) {

        console.log(number + " - is not a number");

        return undefined;
    }

    if (number == 0) return "zero";

    var sign = '';

    if (number < 0) {

        sign = 'minus ';

        number = Math.abs(number);
    }

    sNumber = number.toString().split("").reverse();

    var result;

    if (sNumber.length > 0) {

        const numbers1to9 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        result = numbers1to9[ Number(sNumber[0]) ];

        if (sNumber.length > 1) {

            if (sNumber[1] == '1') {

                const numbers10to19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

                result = numbers10to19[ Number(sNumber[0]) ];

            } else {

                const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

                result = (dozens[ Number(sNumber[1]) ] + ' ' + result).trim();

            }

            if (sNumber.length > 2) {

                result = (numbers1to9[Number(sNumber[2])] + ' hundred ' + result).trim();
            }
        }
    }	
    return sign + result;
}
