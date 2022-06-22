module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let nums = Array.from(num.toString(10)).map(num => numbers[parseInt(num, 10)]);
    return nums.join(' ');
}
