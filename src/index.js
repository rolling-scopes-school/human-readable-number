module.exports = function toReadable (number) {
    number = number.toString();
    let index = 0;
    let len = number.length;
    let result ='';
    let orderUnits = '';
    let orderTens = '';
    let orderTensUnts = '';
    let orderHundreds = '';
    let orderThousends = '';
    
    if (len === 1) {
        orderUnits = number[index];
    } 
    
    if (len === 2) {
       orderUnits = number[len - 1].toString();
       orderTens = number[len - 2].toString();
    }
   
    
    if (len === 3 ){
        orderUnits = number[len - 1].toString();
        orderTens = number[len - 2].toString();
        orderHundreds = number[len - 3].toString();
    }
   
    
    if (number[index] === '0' && len === 1){
            orderUnits = 'zero';
            result = result + 'zero';
           
        } 
   
    
    if ((orderTens === '1' && len === 2) || (orderTens === '1' && len === 3)) {
      orderTensUnts = `${orderTens}${orderUnits}`;
    
      switch (orderTensUnts){
        case '10':
            orderTensUnts = 'ten';
            break;
        case '11':
            orderTensUnts = 'eleven';
            break;
        case '12':
            orderTensUnts = 'twelve';
            break;
        case '13':
            orderTensUnts = 'thirteen';
            break;
        case '14':
            orderTensUnts = 'fourteen';
            break;
        case '15':
            orderTensUnts ='fifteen';
            break;
        case '16':
            orderTensUnts = 'sixteen';
            break;
        case '17':
            orderTensUnts = 'seventeen';
            break;
        case '18':
            orderTensUnts ='eighteen';
            break;
        case '19':
            orderTensUnts = 'nineteen';
      }
    }

    switch(orderUnits){
        case '1':
            orderUnits = 'one';
            break;
        case '2':
            orderUnits = 'two';
            break;
        case '3':
            orderUnits = 'three';
            break;
        case '4':
            orderUnits = 'four';
            break;
        case '5':
            orderUnits = 'five';
            break;
        case '6':
            orderUnits = 'six';
            break;
        case '7':
            orderUnits = 'seven';
            break;
        case '8':
            orderUnits = 'eight';
            break;
        case '9':
            orderUnits = 'nine';
            break;
    }
        
    switch(orderTens){
       
        case '2':
          orderTens = 'twenty';
          break;
        case '3':
          orderTens = 'thirty';
          break;
       case '4':
          orderTens = 'forty';
          break;
       case '5':
          orderTens = 'fifty';
          break;
      case '6':
          orderTens = 'sixty';
          break;
      case '7':
          orderTens = 'seventy';
          break;
      case '8':
          orderTens = 'eighty';
          break;
      case '9':
          orderTens = 'ninety';
        }

    switch(orderHundreds){
        case '1':
            orderHundreds = 'one';
            break;
        case '2':
            orderHundreds = 'two';
            break;
        case '3':
            orderHundreds = 'three';
            break;
        case '4':
            orderHundreds = 'four';
            break;
        case '5':
            orderHundreds = 'five';
            break;
        case '6':
            orderHundreds = 'six';
            break;
        case '7':
            orderHundreds = 'seven';
            break;
        case '8':
            orderHundreds = 'eight';
            break;
        case '9':
            orderHundreds = 'nine';
            break;
    }
    
    if (len === 1) {
        result = `${orderUnits}`;
    } else if (len === 2 && orderTensUnts != '') {
        result = `${orderTensUnts}`;
    } else if ( len === 2 && orderUnits === '0'){
         result =`${orderTens}`;
    } else if ( len === 2 ){
        result = `${orderTens} ${orderUnits}`;
    }
     else if ( len === 3 && orderTensUnts != '') {
        result = `${orderHundreds} hundred ${orderTensUnts}`;
    } else if ( len === 3 && orderTens === '0' && orderUnits === '0') {
        result =`${orderHundreds} hundred`;
    } else if ( len === 3 && orderTens === '0') {
        result = `${orderHundreds} hundred ${orderUnits}`;
    } else if ( len === 3 && orderUnits === '0'){
        result = `${orderHundreds} hundred ${orderTens}`;
    } else if (len === 3) {
        result = `${orderHundreds} hundred ${orderTens} ${orderUnits}`;
    }
    return (result);
}
