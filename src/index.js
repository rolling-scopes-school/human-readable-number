module.exports = function toReadable(number) {

  const numNaturel = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numOften = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const numDozens = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numMorTreeZero = ['hundred', 'thousand', 'milliion'];

  let numStr = String(number);
  let result = [];
  if (numStr.length === 1) {
    result.push(numNaturel[+numStr]);
  } else if (numStr.length === 2 && (+numStr >= 10 && +numStr < 20)) {
    result.push(numOften[+numStr % 10]);
  } else if (numStr.length === 2 && (+numStr % 10 === 0)) {
    result.push(numDozens[+numStr / 10]);
  } else if (numStr.length === 2 && (+numStr % 10 !== 0)) {
    result.push(`${numDozens[+numStr[0]]} ${numNaturel[+numStr[1]]}`);
  } else if (numStr.length === 3 && (+numStr % 100 === 0)) {
    result.push(`${numNaturel[+numStr / 100]} ${numMorTreeZero[0]}`)
  } else if (numStr.length === 3 && (+numStr % 100 !== 0)) {
    for (let i = numStr.length; i > 2; i--) {
      for (let j = numStr.length - 1; j > 1; j--) {
        for (let y = numStr.length - 2; y > 0; i--) {
          result.push(numDozens[+numStr[0]])
        }
        result.push(numDozens[+numStr[1]]);
      }
      result.push(numNaturel[+numStr[2]]);
    }
  }
  return result.toString();
}
