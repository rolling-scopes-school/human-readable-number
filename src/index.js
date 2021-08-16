module.exports = function toReadable (number) {

    wile (number >= 10 || number <= 19) {
        switch (number) {
            case '10':
            return 'ten';
            break;

            case '11':
            return 'eleven';
            break;

            case '12':
            return 'twelve';
            break;

            case '13':
            return 'thirteen';
            break;

            case '14':
            return 'fourteen';
            break;

            case '15':
            return 'fifteen';
            break;

            case '16':
            return 'sixteen';
            break;

            case '17':
            return 'seventeen';
            break;

            case '18':
            return 'eighteen';
            break;

            case '19':
            return 'nineteen';
            break;
        }
    }

    function hundredsDigit() {
        let hundreds;
        if (number % 100 === 0) {
            return hundreds = number / 100;
        } else {
            let hundredsRemain = number % 100;
        }
    }

    function tenDigit() {
        let tens;
        if (hundredsRemain % 10 === 0) {
            return tens = hundredsRemain / 10;
        } else {
            let tensRemain = hundredsRemain % 10;
        }

    }

    function numbersDigit() {
        let units = tensRemain;
        switch (units) {
            case '0':
            return 'zero';
            break;

            case '1':
            return 'one';
            break;

            case '2':
            return 'two';
            break;

            case '3':
            return 'three';
            break;

            case '4':
            return 'four';
            break;

            case '5':
            return 'five';
            break;

            case '6':
            return 'six';
            break;

            case '7':
            return 'seven';
            break;

            case '8':
            return 'eight';
            break;

            case '9':
            return 'nine';
            break;
        }

    }

}

