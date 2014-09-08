// JavaScript source code
function findMaxSequence(value) {
	var result = [];
	var temp = [value[0]];
	for (var i = 1; i < value.length; i++) {
		if (value[i] > value[i - 1]) {
			temp.push(value[i]);
			if (temp.length >= result.length) {
				result = temp;
			} 
		} else {
			temp = [value[i]];
		}


	}
	if (result.length == 0) {
		return 'no';
	}
	return result;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));