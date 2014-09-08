// JavaScript source code
function displayProperties(value) {
	var properties = [];
	for (var prop in document) {
		properties.push(prop);
	}
	properties.sort();

	return properties.toString();
}

console.log(displayProperties());
