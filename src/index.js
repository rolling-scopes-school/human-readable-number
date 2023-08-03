module.exports = function toReadable (number) {
  const firstDischargeArray = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const secondDischargeArray = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const thirdDischargeArray = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let numberLength = +(number + '').length;
  let result = '';
  let stringNumber = number + '';

  // Функция вывода текстового значения числа, в зависимости от разряда
  const checkDischarge = (number, array) =>{
    let n = (array === secondDischargeArray) ? 10 : 0;
    return array.find((element, index) => number === index + n);
  }

  // Проверка на 1 разряд
  if(numberLength === 1){
    return checkDischarge(number, firstDischargeArray);
  }
  //Проверка на 2 разряда от 10 до 19 
  if(numberLength === 2 && number < 20){
    return checkDischarge(number, secondDischargeArray);
  }
  // Проверка на 2 разряда от 20 до 99
  if(numberLength === 2 && number >= 20){
    result += checkDischarge(+stringNumber[0], thirdDischargeArray);
    if(+stringNumber[1] === 0){
       return result; 
    }
    result += ` ${checkDischarge(+stringNumber[1], firstDischargeArray)}`;
    return result;
  }
  //Проверка на 3 разряда
  if(numberLength === 3){
    result += `${checkDischarge(+stringNumber[0], firstDischargeArray)} hundred`;
    // Числа от 100 до 109
    if(+stringNumber[1] === 0){
        if(+stringNumber[2] === 0){
            return result; 
         }
        result +=` ${checkDischarge(+stringNumber[2], firstDischargeArray)}`;
        return result;
    }
    // Числа от 110 до 119
    if(+stringNumber[1] === 1){
        stringNumber = stringNumber[1] + stringNumber[2];
        result +=` ${checkDischarge(+stringNumber, secondDischargeArray)}`;
        return result;
    }
    // Числа от 120 до 999
    if(+stringNumber[1] >= 2){
        result +=` ${checkDischarge(+stringNumber[1], thirdDischargeArray)}`;
        if(+stringNumber[2] === 0){
           return result; 
        }
        result +=` ${checkDischarge(+stringNumber[2], firstDischargeArray)}`;
        return result;
    }
  }
}