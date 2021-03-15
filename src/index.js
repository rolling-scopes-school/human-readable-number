module.exports = function toReadable (number) {
  numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  steps = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

  let step = 0;
  let tenstep = 0;
  let xvost = "";

  if(number<=10){
    return numbers[number];
  }else if(number>10 && number<20){
    return tens[number%10 - 1];
  }else if(number>=20 && number < 100){
    step = Math.floor(number/10);
    return steps[step - 2] + (number % 10 == 0 ? "" : " " +  numbers[number % 10]);
  }else if(number >= 100 && number < 1000){

    tenstep = number % 100;

    if(tenstep<=10){
      xvost = tenstep == 0 ? "" : " " + numbers[tenstep];
    }else if(tenstep>10 && tenstep<20){
      xvost = " " + tens[tenstep%10 - 1];
    }else if(tenstep>=20 && tenstep < 100){
      step = Math.floor(tenstep/10);
      xvost = " " + steps[step - 2] + (number % 10 == 0 ? "" : " " +numbers[number % 10]);
    }

    step = Math.floor(number/100);
    return numbers[step] + " hundred" + xvost;
  }
}
