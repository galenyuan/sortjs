import Classify from './classify';
import Combine from './combine';

module.exports = function(arr, key) {	
	return sort(arr, key);
}

function sort(arr, key) {
	const classed = Classify(arr, key);

	return Combine(classed, key);
}