module.exports = function toReadable (number) {
    function simpleNumber(simpleNum){
        switch (simpleNum) {
            case 1:
              return 'one';
            case 2:
              return 'two';
            case 3:
              return 'three';
            case 4:
              return 'four';
            case 5:
              return 'five';
            case 6:
              return 'six';
            case 7:
              return 'seven';
            case 8:
              return 'eight';  
            case 9:
              return 'nine'; 
            default:
              return null;
          }    
    }
    
    function complexNumber(number){
      switch (number) {
          case 10:
            return 'ten';
          case 11:
            return 'eleven';
          case 12:
            return 'twelve';
          case 13:
            return 'thirteen';
          case 14:
            return 'fourteen';   
          case 15:
            return 'fifteen';  
          case 18:
            return 'eighteen';
          case 20:
            return 'twenty';
          case 30:
            return 'thirty';
          case 40:
            return 'forty';   
          case 50:
            return 'fifty';   
          case 80:
            return 'eighty';  
          default:
            return null;
        }    
    }

    let num = number;
    let std = '';
    
    if( num <= 0 ){
        std = 'zero';
    }
    
    const quantity = (num).toString().length;
    if( quantity === 3 ){
        const firstNum = Number( (num).toString()[0] );
        std = (`${simpleNumber(firstNum)} ${'hundred'}`);
        num = Number( (num).toString().slice(1) );
        if( num !== 0 ){
            std = (`${std}${' '}`);
        }
    }
    
    if ( ( num >= 10 && num < 16 ) || num === 18 || num === 20 || num === 30 || num === 80 || num === 50 || num === 40 ){
        std = (`${std}${complexNumber(num)}`);
    }
    
    if( num > 0 && num < 10 ){
       std = (`${std}${simpleNumber(num)}`);
    }

    if ( num >= 16 && num < 20 && num !== 18 ){
      const lastNumber =Number( (num).toString().slice(-1));
      std = (`${std}${simpleNumber(lastNumber)}${'teen'}`);
    }
    
    if ( (num >= 21 && num < 30) ){
      const lastNumber =Number( (num).toString().slice(-1));
      std = (`${std}${'twenty'} ${simpleNumber(lastNumber)}`);
    }
    
    if ( (num >= 31 && num < 40) ){
      const lastNumber =Number( (num).toString().slice(-1));
      std = (`${std}${'thirty'} ${simpleNumber(lastNumber)}`);
    }

    if ( (num >= 41 && num < 50) ){
        const lastNumber =Number( (num).toString().slice(-1));
        std = (`${std}${'forty'} ${simpleNumber(lastNumber)}`);
      }

    if ( (num >= 51 && num < 60) ){
        const lastNumber =Number( (num).toString().slice(-1));
        std = (`${std}${'fifty'} ${simpleNumber(lastNumber)}`);
      }
    
    if ( (num >= 81 && num < 90) ){
      const lastNumber =Number( (num).toString().slice(-1));
      std = (`${std}${'eighty'} ${simpleNumber(lastNumber)}`);
    }
    
    if ( (num >= 60 && num < 80) || (num >= 90 && num < 100) ){
      const middelNumber =Number( (num).toString()[0] );
      std = (`${std}${simpleNumber(middelNumber)}${'ty'}`);
    
      const lastNumber =Number( (num).toString()[1] );
      if( lastNumber!== 0 ){
        std = (`${std} ${simpleNumber(lastNumber)}`);
      }
    }

    return std;
}
