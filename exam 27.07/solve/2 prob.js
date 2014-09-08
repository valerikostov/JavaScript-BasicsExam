function solve(input) {
	var output = input;
	for (var i in input) {
		for (var j = 2; j < input[i].length; j++) {
			var a = input[i].charAt(j);
			var b = input[i+1].charAt(j-1);
			var c = input[i+1].charAt(j);
			var d = input[i+1].charAt(j+1);
			if (a == b == c == d ) {
				output[i].replace(j,'*')    
			}
		}
	}
	console.log(rows);
	for (var j in rows) {
		for (var i in rows[i]) {
			if ) {

			}
		}
	}
}

solve(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);