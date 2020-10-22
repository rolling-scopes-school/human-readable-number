module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function convertHundreds(number) {
        if (number > 99) {
            if(number % 100 != 0){
                return ones[Math.floor(number / 100)] + ' hundred ' + convertDozens(number % 100);
            } else {
                return ones[Math.floor(number / 100)] + ' hundred';
            }
        } else {
            return convertDozens(number);
        }
    };
    function convertDozens(number) {
        if (number < 10) {
            return ones[number];
        }
        else if (number >= 10 && number < 20) {
            return teens[number - 10];
        } 
        else {
            if(number % 10 != 0){
                return dozens[Math.floor(number / 10)] + ' ' + ones[number % 10];
            } else {
                return dozens[Math.floor(number / 10)];
            }
        }
    }

    
    if (number == 0) {
        return 'zero';
    }
    else {
        return convertHundreds(number);
    }
}
