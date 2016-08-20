export default (arr, key) => {
	const result = {
		number: [],
		lower: [],
		upper: [],
		other: []
	};

	arr.forEach((item) => {
		const str = (key ? item[key] : item).toString();
		
		result[getType(str[0])].push(item);
	});

	return result;
}

function getType(str) {
	if(isNumber(str)) return 'number';
	else if(isLowerCase(str)) return 'lower';
	else if(isUpperCase(str)) return 'upper';
	else return 'other';
}

function isNumber(str) {
	return !isNaN(parseInt(str));
}

function isLowerCase(str) {
	return /[a-z]/.test(str);
}

function isUpperCase(str) {
	return /[A-Z]/.test(str);
}