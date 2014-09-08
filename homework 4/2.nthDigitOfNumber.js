// JavaScript source code
function findNthDigit(arr) {
	var result = arr[1].toString().replace('.', '').substr(-arr[0], 1);
	if (arr[1].toString().replace('.', '').length < arr[0]) {
		return "The number doesn’t have " + arr[0] + ' digits';
	} else {
		return result;
	}
}
console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));