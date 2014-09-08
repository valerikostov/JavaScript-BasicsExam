// JavaScript source code
function divisionBy3(value) {
	var sum = 0;
	var valueStr = value.toString();
	for (var i = 0; i < valueStr.length; i++) {
		sum = sum + parseInt(valueStr[i]);
	}
	if (sum % 3 == 0) {
		console.log('the number is divided by 3 without remainder');
	}
	else {
		console.log('the number is not divided by 3 without remainder');
	}
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);