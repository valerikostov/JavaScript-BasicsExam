function solve(input) {
	var output = '';
	var workStr = '';
	for (var i in input) {
		workStr = workStr + input[i].toString();
	}
	if (workStr.indexOf("<a ") == -1 ) {
		return;
	}
	workStr = workStr.replace(/ /g, '');
	while (workStr.length > 0) {
		var index = workStr.indexOf("href=", workStr.indexOf("<a"));
		if (index == -1) {
			return;
		}
		if (workStr.indexOf(">", workStr.indexOf("<a")) < index) {
			workStr = workStr.substring(index + 6);
			continue;
		}
		var separator = workStr.substring(index + 5).charAt(0);
		workStr = workStr.substring(index + 6);
		output = workStr.substring(0, workStr.indexOf(separator));
		console.log(output);
	}
}


solve(['<a href="http://softuni.bg" class="new"></a>', '<!DOCTYPE html>, <html> <head>   <title>Hyperlinks</title>', '   <link href="theme.css" rel="stylesheet" /> </head> <body> <ul><li><a   href="/"  id="home">Home</a></li><li><a  class="selected" href="/courses">Courses</a> </li><li><a href = ', "'/forum' >Forum</a></li><li><a",'<a id="href">',"href='fake'<"]);
