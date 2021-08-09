module.exports = function toReadable (number) {
  var number;
  var result = '';
  var numberArray = ["zero",
                   "one",
                   "two",
                   "three",
                   "four",
                   "five",
                   "six",
                   "seven",
                   "eight",
                   "nine",
				   "ten",
				   "eleven",
				   "twelve",
				   "thirteen",
				   "fourteen",
				   "fifteen",
				   "sixteen",
				   "seventeen",
				   "eighteen",
				   "nineteen"];
				   
  var tenArray = ["twenty",
				"thirty",
				"forty",
				"fifty",
				"sixty",
				"seventy",
				"eighty",
				"ninety"]

  if (number<20) {
	  result = numberArray[number];
  }
  else if (number<100) {
	  result = tenResult(number);
  }
  else if (number<1000) {
	  result = hundredResult(number);
  }
  
  function tenResult(number) {
	  let tenResult;
	  if ((number % 10) == 0) {
		   tenResult = tenArray[number / 10 - 2];		   
	  } 
	  else {
		  tenResult = tenArray[divTen(number) - 2] + " " + numberArray[number % 10];
	  }
	  return tenResult;
  }
  
  function hundredResult(number) {
	  let hundredResult;
	  if ((number % 100) == 0) {
		  hundredResult = numberArray[divHundred(number)] + " hundred";
	  }
	  else if (((number % 10) == 0) && (((number % 10) % 10) > 1))  {
		  hundredResult = numberArray[divHundred(number)] + " hundred " + tenArray[number / 100 % 10 - 2];
	  }
	  else if ((number % 100)<20){
		  hundredResult = numberArray[divHundred(number)] + " hundred " + numberArray[number % 100];
	  }
	  else {
		  hundredResult = numberArray[divHundred(number)] + " hundred " + tenResult(number % 100);
	  }
	  return hundredResult;	  
  }
  
  function divTen(number) {
	  let divResult = (number - number % 10) / 10;
	  return divResult;
  }
  
    function divHundred(number) {
	  let divResult = (number - number % 100) / 100;
	  return divResult;
  }
  return result;
}
