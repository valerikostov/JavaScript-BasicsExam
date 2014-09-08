// JavaScript source code
function findMaxSequence(value) {
	var result = [];
	var temp = [];
	for (var i = 0; i < value.length; i++) {
		temp.push(value[i]);
		if (value[i] !== value[i + 1]) {
			if (temp.length >= result.length) {
				result = temp;
			}
			temp = [];
		}
	}
	return result;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3', 4, 4, 4, 2, 2]));