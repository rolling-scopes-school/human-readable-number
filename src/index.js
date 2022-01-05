//module.exports = function toReadable (number) {
  
//}
function toReadable(x) {
   let a = +x / 100
   a = Math.trunc(a)
   let b = +x / 10 //24.5
   b = b - a * 10 //24.5 - 2*10
   b = Math.trunc(b)
   let c = +x - a * 100 - b * 10

   console.log(`a = ${a}, b = ${b}, c = ${c}`)

   let a1
   let b1
   let c1


   switch (a) {
      case 1:
         a1 = "one hundred"
         break
      case 2:
         a1 = "two hundred"
         break
      case 3:
         a1 = "three hundred"
         break
      case 4:
         a1 = "four hundred"
         break
      case 5:
         a1 = "five hundred"
         break
      case 6:
         a1 = "six hundred"
         break
      case 7:
         a1 = "seven hundred"
         break
      case 8:
         a1 = "eight hundred"
         break
      case 9:
         a1 = "nine hundred"
   }


   switch (b, c) {
      case 1, 0:
         b1 = "ten"
         c1 = ""
         break
      case 1, 1:
         b1 = "eleven"
         c1 = ""
         break
      case 1, 2:
         b1 = "twelve"
         c1 = ""
         break
      case 1, 3:
         b1 = "thirteen"
         c1 = ""
         break
      case 1, 4:
         b1 = "fourteen"
         c1 = ""
         break
      case 1, 5:
         b1 = "fifteen"
         c1 = ""
         break
      case 1, 6:
         b1 = "sixteen"
         c1 = ""
         break
      case 1, 7:
         b1 = "seventeen"
         c1 = ""
         break
      case 1, 8:
         b1 = "eighteen"
         c1 = ""
         break
      case 1, 9:
         b1 = "nineteen"
         c1 = ""
         break
   }

   switch (b) {
      case 2:
         b1 = 'twenty'
         break
      case 3:
         b1 = 'thirty'
         break
      case 4:
         b1 = 'fourty'
         break
      case 5:
         b1 = 'fifty'
         break
      case 6:
         b1 = 'sixty'
         break
      case 7:
         b1 = 'seventy'
         break
      case 8:
         b1 = 'eighty'
         break
      case 9:
         b1 = 'ninty'
         break
   }


   
   
   if (b != 1) {
      switch (c) {
         case 1:
            c1 = "one"
            break
         case 2:
            c1 = "two"
            break
         case 3:
            c1 = "three"
            break
         case 4:
            c1 = "four"
            break
         case 5:
            c1 = "five"
            break
         case 6:
            c1 = "six"
            break
         case 7:
            c1 = "seven"
            break
         case 8:
            c1 = "eight"
            break
         case 9:
            c1 = "nine"
      }
   } else {
      c1 = ""
   }

   let rez

   if (a === 0 & b === 0 & c === 0) {
      rez = "zero"
   } else if (a > 0 & b === 0 & c === 0) {
      rez = a1;
   } else if (a === 0 & b > 0 & c === 0) {
      rez = b1
   } else if (a > 0 & b > 0 & c === 0) {
      rez = a1 + " " + b1
   } else if (a === 0 & b === 0 & c >= 1) {
      rez = c1;
   } else if (a === 0 & b > 1 & c >= 1) {
      rez = b1 + " " + c1
   } else if (a > 0 & b > 0 & c >= 0) {
      rez = a1 + " " + b1 + " " + c1
   } else if (a > 0 & b === 0 & c >= 1) {
      rez = a1 + " " + c1
   }

   return rez
}
console.log(toReadable(32))
