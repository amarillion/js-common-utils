import { describe, expect, it } from 'vitest';
import { divisors, gcd, lcm } from './numbers';

describe('Number functions', () => {

	it('divisors of a prime should have two results', () => {
		expect(divisors(101)).toEqual([1,101]);
	});

	it('divisors of a square should not contain duplicates', () => {
		expect(divisors(2025)).toEqual([1,3,5,9,15,25,27,45,75,81,135,225,405,675,2025]);
	});

	it('gcd should return greatest common divisor', () => {
		expect(gcd(15, 10)).toEqual(5);
	});

	it('lcm should return least common multiple', () => {
		expect(lcm(16, 10)).toEqual(80);
	});

});

