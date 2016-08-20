let orderBy = '';

export default(obj, key) => {
	orderBy = key;

	const num = commonSort(obj.number, 1);
	const lower = commonSort(obj.lower, 2);
	const upper = commonSort(obj.upper, 3);
	const other = sortLocale(obj.other);

	return num.concat(lower, upper, other);
}

function commonSort(arr, type) {
	return arr.sort((a, b) => {
		return hasKey(a) > hasKey(b);
	});
}

function sortLocale(arr) {
	if(hasLocaleCompare()) {
		return arr.sort((a, b) => {
			return hasKey(a).localeCompare(hasKey(b)) > 0;
		});
	}else {
		return arr;
	}
}

function hasLocaleCompare() {
	return !!'foo'.localeCompare();
}

function hasKey(data) {
	return orderBy ? data[orderBy] : data;
}