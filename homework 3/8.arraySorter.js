// JavaScript source code
function sortArray(value) {
    var result = [];
    for (var i = 0; i < value.length; i++) {
    	var min = Math.min.apply(Math, value);
        result.push(min);
        value[value.indexOf(min)] = Number.MAX_VALUE;
    }
    return result;
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));