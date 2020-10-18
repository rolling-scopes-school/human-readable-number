module.exports = function toReadable (number) {
  const firstDischargeMas = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const secondDischargeMas = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const thirdDischargeMas = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let numberLength = number + '';
  let result = '';
  let stringNumber = '';

  // Функция вывода текстового значения числа, в зависимости от разряда
  const checkDischarge = (number, mas) =>{
    let n;

    switch (mas){
        case firstDischargeMas:
            n = 0;
            break;
        case secondDischargeMas:
            n = 10;
            break;
        case thirdDischargeMas:
            n = 0;
            break;
    }

    for(let i = 0; i < 10; i++){
        if (number === i + n){
            return mas[i];
        }
    }
  }

  numberLength = +numberLength.length;

  // Проверка на 1 разряд
  if(numberLength === 1){
    return checkDischarge(number, firstDischargeMas);
  }
  //Проверка на 2 разряда от 10 до 19 
  if(numberLength === 2 && number < 20){
    return checkDischarge(number, secondDischargeMas);
  }
  // Проверка на 2 разряда от 20 до 99
  if(numberLength === 2 && number >= 20){
    stringNumber = '' + number;
    result += checkDischarge(+stringNumber[0], thirdDischargeMas);
    if(+stringNumber[1] === 0){
       return result; 
    }
    result += ' ' + checkDischarge(+stringNumber[1], firstDischargeMas);
    return result;
  }
  //Проверка на 3 разряда

  if(numberLength === 3){
    stringNumber = '' + number;
    result += checkDischarge(+stringNumber[0], firstDischargeMas);
    result +=' hundred';
    // Числа от 100 до 109
    if(+stringNumber[1] === 0){
        if(+stringNumber[2] === 0){
            return result; 
         }
        result +=' ' + checkDischarge(+stringNumber[2], firstDischargeMas);
        return result;
    }
    // Числа от 110 до 119
    if(+stringNumber[1] === 1){
        stringNumber = stringNumber[1] + stringNumber[2];
        result +=' ' + checkDischarge(+stringNumber, secondDischargeMas);
        return result;
    }
    // Числа от 120 до 999
    if(+stringNumber[1] >= 2){
        result +=' ' + checkDischarge(+stringNumber[1], thirdDischargeMas);
        if(+stringNumber[2] === 0){
           return result; 
        }
        result += ' ' + checkDischarge(+stringNumber[2], firstDischargeMas);
        return result;
    }
  }



}
