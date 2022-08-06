module.exports = function toReadable (number) {
    let result = '',
    text = '',
    values = [
    {value: 100, str: "one hundred"},
    {value: 90, str: "ninety"},
    {value: 80, str: "eighty"},
    {value: 70, str: "seventy"},
    {value: 60, str: "sixty"},
    {value: 50, str: "fifty"},
    {value: 40, str: "forty"},
    {value: 30, str: "thirty"},
    {value: 20, str: "twenty"},
    {value: 19, str: "nineteen"},
    {value: 18, str: "eighteen"},
    {value: 17, str: "seventeen"},
    {value: 16, str: "sixteen"},
    {value: 15, str: "fifteen"},
    {value: 14, str: "fourteen"},
    {value: 13, str: "thirteen"},
    {value: 12, str: "twelve"},
    {value: 11, str: "eleven"},
    {value: 10, str: "ten"},
    {value: 9, str: "nine"},
    {value: 8, str: "eight"},
    {value: 7, str: "seven"},
    {value: 6, str: "six"},
    {value: 5, str: "five"},
    {value: 4, str: "four"},
    {value: 3, str: "three"},
    {value: 2, str: "two"},
    {value: 1, str: "one"}
  ];
if (number === 0) {
return 'zero'
} else {
texting(number)
}
function texting(number) {
if (values.find(item => item.value === number)) { 
text = values.find(item => item.value === number).str;
if (result.length === 0) {
result+= text;
} else {
result+= ' ' + text;
}
return result
} else if (number > 100) {
let hund = Math.floor(number/100);
text = values.find(item => item.value === hund).str
result+= text + ' ' + 'hundred'
texting(number-(hund*100))
} else if (number > 9) {
let doz = Math.floor(number/10)*10;
text = values.find(item => item.value === doz).str;
if (result.length === 0) {
result+= text;
} else {
result+= ' ' + text;
}
texting(number-doz)
}
}


return result;
}
