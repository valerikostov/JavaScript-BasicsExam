// JavaScript source code

function calcCircleArea(r) {
	var area = Math.PI * r * r;
	return area;
}

document.getElementById("firstResult").innerHTML = calcCircleArea(7);
document.getElementById("secondResult").innerHTML = calcCircleArea(1.5);
document.getElementById("thirdResult").innerHTML = calcCircleArea(20);
