module.exports = function toReadable (number) {
    const arrNum=['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const arrDec= ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
       let result='';
       let word=String(number).split('').reverse();
       let n= word.length;

       word.forEach(element => {
         element= Number(element);
         word.push(element);
          })
     
          word= word.slice(n);
      
       
      if (word[2]===undefined) {
         if (word[1]===undefined) {
           result=result+arrNum[word[0]];
            return result.slice(0,-1);
           } 
      } else {
         result= result+arrNum[word[2]]+'hundred ';
      }

       
       if (word[1]===0) {
        if (word[0]!==0){
         result=result+arrNum[word[0]];
        } else {
          result=result;
        }
      } else if (word[1]<2) {
           result= result+arrNum[word[0]+word[1]*10];
         } else  if (word[0]!==0){
           result=result+arrDec[word[1]]+arrNum[word[0]];
           } else {
             result=result+arrDec[word[1]];
           }
       
        return result.slice(0,-1);
     }

