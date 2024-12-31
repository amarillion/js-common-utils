export function fromSeed(_seed: string, algorithm: 'splitmix32' | 'sfc32' = 'splitmix32') {
	const seedGen = xmur3(_seed);
	const prng = (algorithm === 'splitmix32'
		? splitmix32(seedGen())
		: sfc32(seedGen(), seedGen(), seedGen(), seedGen())
	);
	return prng;
}

// Stable random number generator
// Source: this excellent answer on Stack Overflow:
// https://stackoverflow.com/a/47593316/3306
export function splitmix32(_seed: number) {
	return function () {
		_seed |= 0; // bitwise OR ensures this is treated as an integer internally for performance.
		_seed = _seed + 0x9e3779b9 | 0; // again, bitwise OR for performance
		let t = _seed ^ _seed >>> 16;
		t = Math.imul(t, 0x21f0aaad);
		t = t ^ t >>> 15;
		t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
	};
}

// MurmurHash3 mixing function for creating a seed based on a string
// Returns a function that generates 32-bit random values based on the seed.
// Best used as a way to turn a short string into a seed.
// https://github.com/bryc/code/blob/master/jshash/PRNGs.md
export function xmur3(str: string) {
	let h = 1779033703 ^ str.length;
	for (let i = 0; i < str.length; i++) {
		h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
		h = h << 13 | h >>> 19;
	}
	return function () {
		h = Math.imul(h ^ (h >>> 16), 2246822507);
		h = Math.imul(h ^ (h >>> 13), 3266489909);
		return (h ^= h >>> 16) >>> 0;
	};
}

// alternative stable RNG
// See: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// sfc32 needs four 32-bit values as a seed, invoke xmur3 repeatedly like so:
// const chunk = xmur3(seedStr);
// const prng = sfc32(chunk(), chunk(), chunk(), chunk())
export function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
		let t = (a + b) | 0;
		a = b ^ b >>> 9;
		b = c + (c << 3) | 0;
		c = (c << 21 | c >>> 11);
		d = d + 1 | 0;
		t = t + d | 0;
		c = c + t | 0;
		return (t >>> 0) / 4294967296;
	};
}
