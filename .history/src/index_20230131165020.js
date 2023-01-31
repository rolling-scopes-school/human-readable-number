module.exports = function toReadable (number) {
        const arrayNumbers = {
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
        }
        const arrayDozen = {
          2: 'twenty',
          3: 'thirty',
          4: 'forty',
          5: 'fifty',
          6: 'sixty',
          7: 'seventy',
          8: 'eighty',
          9: 'ninety',
        }
       
        let rank = 0;
        let str = '';
        let num = number%10;
        let dec = (number%100-num)/10;
        let hundred = Math.trunc(number/100);
        // number = String(number);
        for(let i = 0; i < number.length; i++) {
          rank++;
        }
      
        if(number <20) {
          return str = arrayNumbers[number];
        }
        else if(number > 19 && number < 100) {
      
            if(num !== 0) {
              str = arrayDozen[dec]+ ' ' +arrayNumbers[num];
              }
              else {
                str = arrayDozen[dec];
              }
            console.log(str);
      
      }
      else if(number > 99 && number < 1000)
      if (num && dec && hundred) {
        return str = arrayNumbers[hundred] + ' hundred '+ arrayDozen[dec] + ' '+ arrayNumbers[num];
      }
      else if (num === 0) {
        return str = arrayNumbers[hundred] + ' hundred '+ arrayDozen[dec];
      }
        else if ( dec === 0) {
            return str = arrayNumbers[hundred] + ' hundred ' + arrayNumbers[num];
        }
         
      }
