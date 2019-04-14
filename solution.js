function findWord(text, data) {
	// ваше решение пишите здесь

	var res = false;

	//to the right side

	for (var i = 0; i < data.length; i++) {
		if (data[i].indexOf(text) != -1) {
			res = true;
		}
	}

	//to the left side

	for (var i = 0; i < data.length; i++) {
		var thisRev = data[i].split('').reverse().join('');

		if (thisRev.indexOf(text) != -1) {
			res = true;
		}
	}

	//to the bottom side

	var data_arr = data.map(function(el){
		return el.split('');
	});

	for (var i = 0; i < data_arr[0].length; i++) {
		var downStr = [];
		for (var j = 0; j < data_arr.length; j++) {
			downStr.push(data_arr[j][i]);
		}

		downStr = downStr.join('');

		if (downStr.indexOf(text) != -1) {
			res = true;
		}
	}

	//to the top side

	data_arr = data_arr.reverse();
	for (var i = 0; i < data_arr[0].length; i++) {
		var topStr = [];
		for (var j = 0; j < data_arr.length; j++) {
			topStr.push(data_arr[j][i]);
		}

		topStr = topStr.join('');

		console.log(topStr);

		if (topStr.indexOf(text) != -1) {
			res = true;
		}
	}

	return res;
}
