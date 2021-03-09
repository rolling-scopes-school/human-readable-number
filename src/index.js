module.exports = function toReadable (num) {
    
        var ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
        var tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
        var hundred = 'hundred';
        var output = '';
        var numString = num.toString();
    
        if (num == 0) {
            return  'zero';
        }else if (num < 20) {
            output = ones[num];
            
            return output;
        } else if ((num%10===0) && num<100){
            output = tens[parseInt(numString.charAt(1))];
        }  else  if (numString.length == 3) {
            output = ones[parseInt(numString.charAt(0))] + ' ' +hundred;
            if ((num-(numString.charAt(0))*100)<20){
                output += ' ' +ones[parseInt(numString.charAt(1)+numString.charAt(2))];
            }else if (num%10===0){
                output += ' ' +tens[parseInt(numString.charAt(1))];
            }
            else {
            output += ' ' + tens[parseInt(numString.charAt(1))];
            output += ' '+ ones[parseInt(numString.charAt(2))];
            }
            return output;
        } else {
    
        output += tens[parseInt(numString.charAt(0))];
        output += ' ' +ones[parseInt(numString.charAt(1))];
        }
    
        if (output[output.length-1]==' '){
            output=output.slice (0,output.length-1);
        }
        
        return output;
          
    }
    






