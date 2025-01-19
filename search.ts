export function findFirstIndex<T>(array: T[], predicate: (t: T) => boolean) {
	for (let i = 0; i < array.length; ++i) {
		if (predicate(array[i])) { return i; }
	}
	return undefined;
}

export function findLastIndex<T>(array: T[], predicate: (t: T) => boolean) {
	for (let i = array.length-1; i >= 0; --i) {
		if (predicate(array[i])) { return i; }
	}
	return undefined;
}
