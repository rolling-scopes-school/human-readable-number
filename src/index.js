module.exports = function toReadable (num){
  const arrOne = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ]
  const arrTwo=[
    'zero',
    'one',
    'twen',
    'thir',
    'four',
    'fif',
    'six',
    'seven',
    'eigh',
    'nine',
    ]
  const arrThree = [
    'teen',
    'ty',
    'hundred',
    'thousand',
  ]
  if (num<13){
    return(`${arrOne[num]}`)
  }else if(num<20){
  let a = num -10
  return(`${arrTwo[a]}${arrThree[0]}`)
  }else if(num<100){
  let a = Math.trunc(num*0.1)
  let b = num-(a*10)
  return(`${arrTwo[a]}${arrThree[1]} ${arrOne[b]}`)
  }else if (num<1000){
    let a = Math.trunc(num*0.01)
    let b = Math.trunc((num-(a*100))*0.1)
    let c = num-(Math.trunc(num*0.1))*10      
    let d
    if (b==0 && c==0){
      return(`${arrOne[a]} ${arrThree[2]}`)
    }else if(b==0) {
      return(`${arrOne[a]} ${arrThree[2]} ${arrOne[c]}`)
    }else if (c==0){
      d =String(b)+String(c)
      if (d==10){
      return(`${arrOne[a]} ${arrThree[2]} ${arrOne[d]}`)
      }else{
      return(`${arrOne[a]} ${arrThree[2]} ${arrTwo[b]}${arrThree[1]}`)
      }        
    }else{
    d =String(b)+String(c)
    if (d<13){
     console.log(d)
      return(`${arrOne[a]} ${arrThree[2]} ${arrOne[d]}`)
    }else if(d<20){
    return(`${arrOne[a]} ${arrThree[2]} ${arrTwo[d-10]}${arrThree[0]}`)
    }else{
      return(`${arrOne[a]} ${arrThree[2]} ${arrTwo[b]}${arrThree[1]} ${arrOne[c]}`)
      }
    }
  }}