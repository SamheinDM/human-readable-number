module.exports = function toReadable (number) {
    let num = number.toString(10).split('');
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num.length === 1 && num[0] == 0) {
        return numArr[0];
    }
}
