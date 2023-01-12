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
  } else if ((numStr.length === 3) && (+numStr % 100 !== 0) && (String(+numStr % 100).length === 1)) {
    result.push(`${numNaturel[Math.floor(+numStr / 100)]} ${numMorTreeZero[0]} ${numNaturel[+numStr[2]]}`);
  } else if ((numStr.length === 3) && (+numStr % 100 !== 0) && ((String(+numStr % 100).length === 2) && (+numStr % 100 >= 10 && +numStr % 100 < 20))) {
    result.push(`${numNaturel[+numStr[0]]} ${numMorTreeZero[0]} ${numOften[(+numStr % 100) % 10]}`);
  } else if ((numStr.length === 3) && +numStr % 100 !== 0 && ((String(+numStr % 100).length === 2) && ((+numStr % 100) % 10 === 0))) {
    result.push(`${numNaturel[+numStr[0]]} ${numMorTreeZero[0]} ${numDozens[(+numStr % 100) / 10]}`);
  } else if ((numStr.length === 3) && +numStr % 100 !== 0 && ((String(+numStr % 100).length === 2) && ((+numStr % 100) % 10 !== 0))) {
    result.push(`${numNaturel[+numStr[0]]} ${numMorTreeZero[0]} ${numDozens[+numStr[1]]} ${numNaturel[(+numStr % 100) % 10]}`);
  }
  return result.toString();
}
