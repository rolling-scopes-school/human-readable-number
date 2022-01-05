module.exports = function toReadable (a) {
    var string = "";
    var text_array = {
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
        20:"twenty",
        30:"thirty",
        40:"forty",
        50:"fifty",
        60:"sixty",
        70:"seventy",
        80:"eighty",
        90:"ninety",
    }
    if (a === 0){
      return "zero";
    }
    if (a>=100 && a<1000){
        string = text_array[Number((a+"").slice(0,1))] + " hundred";
        a = Number((a+"").substring(1));
    }
    if (a>20 && a<100){
        if (string.length!=0){
            string = string + " " + text_array[Number((a+"").slice(0,1)+"0")];
            a = Number((a+"").substring(1));
        } else {
            string = text_array[Number((a+"").slice(0,1)+"0")];
            a = Number((a+"").substring(1));
        }
    }
    if (a<=20 && a>=10){
        if (string.length!=0){
            string = string + " " + text_array[Number((a+"").slice(0,2))];
        } else {
            string = text_array[Number((a+"").slice(0,2))];
        }    
    }
    if (a<10 && a>0){
        if (string.length!=0){
            string = string + " " + text_array[Number((a+"").slice(0,1))];
        } else {
            string = text_array[Number((a+"").slice(0,1))];
        }    
    }
    return string;
}
