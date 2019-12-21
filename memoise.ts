function memoise(method: Function) {
	const cache = new Map();
	return function() {
		const key = [...arguments].toString();
		if (cache.get(key)) {
			return cache.get(key);
		} else {
			const result = method(...arguments);
			cache.set(key, result);
			return result;
		}
	}
}

function factorial(num: number) {
	let total = 1;
	for (let i = 1; i <= num; i++) {
		total *= i;
	}
	return total;
}

const memoisedFactorial = memoise(factorial);
