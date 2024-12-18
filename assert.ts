class AssertionError extends Error {
	constructor(msg: string) {
		super(msg);
	}
}

export function assert(test: unknown, msg = "") : asserts test {
	if (!test) {
		throw new AssertionError(msg);
	}
}

export function asNonNull<T>(value: T|unknown|null) {
	assert(value !== null && value !== undefined);
	return value as T;
}