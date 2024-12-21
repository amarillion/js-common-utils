#!/usr/bin/env tsx

import { randomize, splitmix32 } from './random.js';
import { test, expect } from 'vitest';

const seed = 0;
const rand = randomize(splitmix32(seed));

const array = [1,2,3,4,5,6,7,8,9,0];

test('Seeded random functions', () => {

	expect(rand.pickOne(array)).toBe(4);

	expect(rand.pickSome(array, 2, 4)).toEqual([7,5]);

	expect(rand.randomInt(6)).toBe(4);
	expect(rand.randomIntBetween(12, 16)).toBe(15);
});

