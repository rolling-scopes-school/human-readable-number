module.exports = function toReadable (number) {
  
    if(number === 0)
        return 'zero';
    
    let readableNumber = toReadable_threeDigit(number, 'hundred');
    
    return readableNumber;
}


let toReadable_threeDigit = (threeDigits, group)=> {

    if(threeDigits < 100)
        return toReadable_twoDigit(threeDigits);

    let firstDigit = Math.trunc(threeDigits / 100);
    let lastTwoDigits = threeDigits % 100;
    let readableThreeDigits = `${toReadable_oneDigit(firstDigit)} ${group} ${toReadable_twoDigit(lastTwoDigits)}`.trim();
    
    return readableThreeDigits;
};

let toReadable_twoDigit = (twoDigits)=> {

    if(twoDigits < 10)
        return toReadable_oneDigit(twoDigits);

    // special cases
    switch(twoDigits){
        
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';        
    }

    let dozens = Math.trunc(twoDigits / 10);
    let lastDigit = twoDigits % 10;
    let readableTwoDigits = `${toReadable_dozens(dozens)} ${toReadable_oneDigit(lastDigit)}`.trim();
    
    return readableTwoDigits;
};

let toReadable_oneDigit = (digit)=> {

    switch(digit){
        
        case 0: return '';

        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';

        default: throw `Invalid value for one digit: ${digit}`;
    }
};


let toReadable_dozens = (digit)=> {

    switch(digit){
                
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';

        default: throw `Invalid value for dozens: ${digit}`;
    }
};