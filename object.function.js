// reback a array that all item is obj property name
function keys(obj){
	var arr = [];
	for(var i in obj){
		arr.push(i);
	}

	return arr;
}

function vals(obj){
	var arr = [];
	for(var i in obj){
		arr.push(obj[i]);
	}
	return arr;
}