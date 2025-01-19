import { describe, it, expect } from 'vitest';
import { findFirstIndex, findLastIndex } from './search.js';

describe('findFirstIndex', () => {
	
	it('should return the index of the first element matching the predicate', () => {
		const array = [1, 2, 3, 4, 5];
		const result = findFirstIndex(array, (x) => x > 3);
		expect(result).toBe(3);
	});

	it('should return undefined if no element matches the predicate', () => {
		const array = [1, 2, 3, 4, 5];
		const result = findFirstIndex(array, (x) => x > 10);
		expect(result).toBeUndefined();
	});

	it('should return undefined for an empty array', () => {
		const array: number[] = [];
		const result = findFirstIndex(array, (x) => x > 0);
		expect(result).toBeUndefined();
	});

});

describe('findLastIndex', () => {

	it('should return the index of the last element matching the predicate', () => {
		const array = [1, 2, 3, 4, 5];
		const result = findLastIndex(array, (x) => x > 3);
		expect(result).toBe(4);
	});

	it('should return undefined if no element matches the predicate', () => {
		const array = [1, 2, 3, 4, 5];
		const result = findLastIndex(array, (x) => x > 10);
		expect(result).toBeUndefined();
	});

	it('should return undefined for an empty array', () => {
		const array: number[] = [];
		const result = findLastIndex(array, (x) => x > 0);
		expect(result).toBeUndefined();
	});

});
