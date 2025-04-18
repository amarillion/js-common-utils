import { describe, expect, it } from 'vitest';
import { permutationsWithRepetition } from './permutations.js';

describe('Permutation with repetition', () => {

	it('basic test', () => {
		expect([ ...permutationsWithRepetition(2, 2) ]).toEqual([ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ], [ 1, 1 ] ]);
	});

});
