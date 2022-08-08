module.exports = function toReadable (number) {
    //let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
	let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let dozens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	
	let result = '';
	if (number.toString().length === 3) {
		result += units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + dozens[(number.toString().slice(1, 2)) - 2] + ' ' + units[(number.toString().slice(2)) - 1];
	}
	if (number.toString().length === 2) {
		result += dozens[Math.trunc(number / 10) - 2] + ' ' +  units[(number.toString().slice(1)) - 1];
	} 
	return result;
}