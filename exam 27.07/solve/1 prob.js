function solve(input) {
	var firstNum = parseInt(input[0]);
	var lastNum = Number(input[1]);
	var output = new Array(lastNum);
	for (var i = firstNum; i <= lastNum; i++) {
		if (isFibonacci(i)) {
			output[i] = '<tr><td>' + i + '</td><td>' + i * i + '</td><td>yes</td></tr>';
		} else {
			output[i] = '<tr><td>' + i + '</td><td>' + i * i + '</td><td>no</td></tr>';
		}
	}
	output.splice(0, firstNum);
	output.unshift('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
	output.unshift('<table>');
	output.push('</table>');
	function isFibonacci(n) {
		var a = isPerfectSqr(5 * n * n + 4);
		var b = isPerfectSqr(5 * n * n - 4);
		return a || b;
	}
	function isPerfectSqr(x) {
		var s = Math.round(Math.sqrt(x));
		return (s*s) === x;
	}
	console.log(output.join('\n'));
}

solve([2,6]);
//solve([50,56]);