module.exports = function toReadable (number) {
  const firstDischargeMas = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const secondDischargeMas = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const thirdDischargeMas = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let numberLength = number + '';
  let result = '';
  let stringNumber = '';

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

  if(numberLength === 1){
    return checkDischarge(number, firstDischargeMas);
  } 
  if(numberLength === 2 && number < 20){
    return checkDischarge(number, secondDischargeMas);
  }

  if(numberLength === 2 && number >= 20){
    stringNumber = '' + number;
    result += checkDischarge(+stringNumber[0], thirdDischargeMas);
    if(+stringNumber[1] === 0){
       return result; 
    }
    result += ' ' + checkDischarge(+stringNumber[1], firstDischargeMas);
    return result;
  }



}
