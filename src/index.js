module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 
            'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
            'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 
            'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion',
            'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 
            'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
    let result = [];
    let num = [];
    let word = '';
    let end = 0;
    let str = number.toString();
    if (parseInt(str) === 0) {
        return 'zero';
    } 
    let start = str.length;
    let pieces = [];
    while (start > 0) {
        end = start;
        pieces.push(str.slice((start = Math.max(0, start - 3)), end));
    }
    let piecesLen = pieces.length;
    if (piecesLen > scales.length) {
        return '';
    }   
    for (let i = 0; i < piecesLen; i++) {
        let piece = parseInt(pieces[i]);
        if (piece) {
            num = pieces[i].split('').reverse().map(parseFloat);
            if (num[1] === 1) {
                num[0] += 10;
            }
            if ((word = scales[i])) {
                result.push(word);
            }    
            if ((word = units[num[0]])) {
                result.push(word);
            }
            if ((word = tens[num[1]])) {
                result.push(word);
            }
            if ((word = units[num[2]])) {
                result.push(word + ' hundred');
            } 
        }           
    }
    return result.reverse().join(' ');
}
