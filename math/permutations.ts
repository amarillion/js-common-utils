import { assert } from '../assert.js';

/**
 * All possible permutations (with repetition) of n numbers, choosing from k number;
 *
 * For example
 *
 * permutationsWithRepetition(3, 2) returns
 *    [0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1],
 *    [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]
 *
 * For terminology, see: https://www.mathsisfun.com/combinatorics/combinations-permutations.html
 */
export function* permutationsWithRepetition(n: number, k: number): Generator<number[]> {
	assert(n >= 1);
	assert(k >= 1);
	
	const current = new Array(n).fill(0);
	while (true) {
		yield structuredClone(current);
		
		let pos = n - 1;
		current[pos]++;
		while (current[pos] >= k) {
			// rollover
			current[pos] = 0;
			pos--;
			if (pos < 0) return;
			current[pos]++;
		}
	}
}
