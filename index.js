function numberChech (num){
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
  'twe',
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
  let d=String(b)+String(c)
    if (d<13){
    d=arrOne[d]
    return(`${arrOne[a]} ${arrThree[2]} and ${d}`)
    }else if (d<20){
    d = `${arrTwo[d-10]}${arrThree[0]}`
    return(`${arrOne[a]} ${arrThree[2]} and ${d}`)
    }else{
    return(`${arrOne[a]} ${arrThree[2]} and ${arrTwo[b]}${arrThree[1]} ${arrOne[c]}`)
    }
}else if(num<10000){
  let e = Math.trunc(num*0.001)  
  let a = Math.trunc(num*0.01)-(e*10)
  let b = Math.trunc((num-e*1000-a*100)*0.1)
  let c = num-(Math.trunc(num*0.1))*10  
  let d=String(b)+String(c) 
  if (d<13){
    d=arrOne[d]
    return(`${arrOne[e]} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
    }else if (d<20){
    d = `${arrTwo[d-10]}${arrThree[0]}`
    return(`${arrOne[e]} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
    }else{
    return(`${arrOne[e]} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${arrTwo[b]}${arrThree[1]} ${arrOne[c]}`)
    }
}else if (num<100000){
  let k = Math.trunc(num*0.0001)
  let e = Math.trunc(num*0.001)-(k*10)  
  let a = Math.trunc(num*0.01)-(k*100)-(e*10)
  let b = Math.trunc(num*0.1)-(k*1000)-(e*100)-(a*10)
  let c = num-(Math.trunc(num*0.1))*10
  let d = String(b)+String(c) 
  let l = String(k)+String(e) 
  if (l<13){
    l = `${arrOne[l]}`
  }else if (l<20){    
    l=`${arrTwo[l-10]}${arrThree[0]}`
  }else{
    l=`${arrTwo[k]}${arrThree[1]} ${arrOne[e]}`    
  }
  if (d<13){
  d=arrOne[d]
  return(`${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
  }else if (d<20){
  d = `${arrTwo[d-10]}${arrThree[0]}`
  return(`${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
  }else{
  return(`${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${arrTwo[b]}${arrThree[1]} ${arrOne[c]}`)
  }  
}else if (num<1000000){
  let m = Math.trunc(num*0.00001)
  let k = Math.trunc(num*0.0001)-(m*10)
  let e = Math.trunc(num*0.001)-(k*10) - (m*100)
  let a = Math.trunc(num*0.01)-(e*10)-(k*100)-(m*1000)
  let b = Math.trunc(num*0.1)-(a*10)-(e*100)-(k*1000)-(m*10000)
  let c = num-(Math.trunc(num*0.1))*10
  let d = String(b)+String(c) 
  let l = String(k)+String(e)
  if (l<13){
    l = `${arrOne[l]}`
  }else if (l<20){    
    l=`${arrTwo[l-10]}${arrThree[0]}`
  }else{
    l=`${arrTwo[k]}${arrThree[1]} ${arrOne[e]}`  
  }
  if (d<13){
  d=arrOne[d]
  return(`${arrOne[m]} ${arrThree[2]} and ${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
  }else if (d<20){
  d = `${arrTwo[d-10]}${arrThree[0]}`
  return(`${arrOne[m]} ${arrThree[2]} and ${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${d}`)
  }else{
  return(`${arrOne[m]} ${arrThree[2]} and ${l} ${arrThree[3]} ${arrOne[a]} ${arrThree[2]} and ${arrTwo[b]}${arrThree[1]} ${arrOne[c]}`)
  }
}}