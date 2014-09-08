// JavaScript source code
function createArray(value) {
	var arr = new Array(20);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = 0;
	}
	for (var i in arr) {
		arr[i] = i * 5;
	}
	//arr.join(" ");
	console.log(arr.toString());
}
createArray();