module.exports = function toReadable (number) {
    let num = number.toString(10).split('');
    let numArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';

    if (number === 0) return 'zero';

    if (num.length == 1) {
        return numArr[num[0]];
    } else if (num.length == 2) {
        if (num[0] == 1) {
            return tenNum[num[1]];
        }
        result = `${decNum[num[0]]} ${numArr[num[1]]}`;
        return result;
    } else {
        if (num[1] == 1) {
            result = `${numArr[num[0]]} hundred ${tenNum[num[1]]}`;
            return result;
        }
        result = `${numArr[num[0]]} hundred ${decNum[num[1] - 2]} ${numArr[num[2]]}`;
        return result;
    }
}
