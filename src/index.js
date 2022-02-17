
module.exports = function toReadable (num) {

    const arrUnits = ['', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    
    const arrDozens = ['', 'one', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
    
    const arrHundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    const arrThousen = ['', 'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand',
    'six thousand', 'seven thousand', 'eight thousand', 'nine thousand'];
    
    const arrMillions = ['', 'one million', 'two millions', 'three millions', 'four millions', 'five millions',
    'six millions', 'seven millions', 'eight millions', 'nine millions', 'ten millions', 'eleven millions', 'twelve millions', 'thirteen millions', 
    'fourteen millions', 'fifteen millions', 'sixteen millions', 'seventeen millions', 'eighteen millions', 'nineteen millions', 'twenty millions'];
    
    function numty(num) {
      
        let numStr = String(num);
        // console.log ('numStr length is ' + numStr.length)
    
        let unitsDozens = +(numStr.slice(-2));
        // console.log('units dozens is ' + unitsDozens)
        let units = +(numStr.slice(-1));
        // console.log('units is ' + units)
        let dozens = +(numStr.slice(-2, -1));
        // console.log('dozens is ' + dozens)
        let hundred = +(numStr.slice(-3, -2));
        // console.log('hundred is ' + hundred)

        // let thousand = +(numStr.slice(-4, -3));
        // console.log('thousand is ' + thousand)
        // let tenThousen = +(numStr.slice(-5, -4));
        // console.log('ten thousand is ' + thousand)
        // let combTenThousen = +(numStr.slice(-5,-3));
        //console.log (combTenThousen)
        // let millions = +(numStr.slice(-6,-5));
        //console.log (arrMillions)
    
        function comby(unitsDozens) {
        if (unitsDozens == 00) {
            return `${''}`
        } else if (unitsDozens > 20 && unitsDozens <= 99) {
            return `${arrDozens[dozens]}${' '}${arrUnits[units]}`;
        } else if (unitsDozens <= 20) {
            return `${arrUnits[unitsDozens]}`
        }

        // console.log (comby('unitsdozens is true' + unitsDozens))
        }
        // console.log ('number is ' + num)

        let combySwitch = `${' '}${comby(unitsDozens)}`;

        let combySwitchDozensUnits = `${arrDozens[dozens]}`;

        (unitsDozens == 00) ? (combySwitch = '') : combySwitch;

        (units == 0) ? (combySwitchDozensUnits) : combySwitchDozensUnits = (`${comby(unitsDozens)}`);
    
        switch(numStr.length){
            case 2:
                return `${combySwitchDozensUnits}`
                break;
            case 3:
                return `${arrHundred[hundred]}${combySwitch}`
                break;
            case 4:
            //     return `${arrThousen[thousand]}${' '}${arrHundred[hundred]}${comby(unitsDozens)}`
            //     break;
            // case 5:
            //     return `${arrDozens[tenThousen]}${arrThousen[thousand]}${arrHundred[hundred]}${comby(unitsDozens)}`
            //     break;
            // case 6:
            //     return `${arrHundred[hundred]}${arrDozens[tenThousen]}${arrThousen[thousand]}${arrHundred[hundred]}${comby(unitsDozens)}`
            //     break;

        }
    }
    
    return (numty(num))
}
