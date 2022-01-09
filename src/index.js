module.exports = function toReadable (num) {
  let smallNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let middleNum = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let bigNum = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if( num == 0){
    return  "zero"
  }else if(num < 10){
    return( smallNum[num-1]);
  }else if(num > 10 && num <20){
    return( middleNum[num-10-1]);
  } else if (num%10 == 0){
    return( bigNum[num/10-1]);
  }else if(num >20){
    let numb = String(num).split('');
    let leng = numb.length;
    let str = '';

    if (leng == 2) {
      if (numb[0] == 1) {
          str += middleNum[numb[1] - 1]
      } else {
          str += bigNum[numb[0] - 1] + ' ' + smallNum[numb[1] - 1]
      }
      return (str);
      }else if(leng == 3 ){
        if(numb[1] == 1){
          str += smallNum[numb[0] - 1] + ' hundred ' + middleNum[numb[2] - 1]        
        }else if(numb[1] == 0 && numb[2] == 0){
          str += smallNum[numb[0] - 1] + ' hundred '  
        }else if(numb[1] == 0){
          str += smallNum[numb[0] - 1] + ' hundred ' + smallNum[numb[2] - 1] 
        }else if(numb[2] == 0){
          str += smallNum[numb[0] - 1] + ' hundred ' + bigNum[numb[1] - 1] 
        }else {
          str += smallNum[numb[0] - 1] + ' hundred ' +  bigNum[numb[1] - 1] + ' ' + smallNum[numb[2] - 1]
      }
      return (str);
    }
  }else if (num > 1000 ) {
    return ("Need more zero and less one thousand")
  }
}
