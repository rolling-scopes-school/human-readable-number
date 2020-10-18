module.exports = function toReadable (number) {
  const firstDischargeMas = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const secondDischargeMas = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let numberLength = number + '';

  const checkDischarge = (number, mas) =>{
    let n;

    switch (mas){
        case firstDischargeMas:
            n = 0;
            break;
        case secondDischargeMas:
            n = 10;
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
  if(numberLength === 2){
    return checkDischarge(number, secondDischargeMas);
  }



}
