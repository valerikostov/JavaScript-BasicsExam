// JavaScript source code
function printNumbers(n) {
	var resultStr = '';
	for (var i = 0; i <= n; i++) {
		if ((i % 4 != 0) && (i % 5 != 0)) {
				resultStr += i.toString() + ', ';
		}
	}
	if (resultStr == '') {
		return resultStr = 'no';
	}
	resultStr = resultStr.slice(0, -2);
	return resultStr;
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));