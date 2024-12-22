import { test, expect } from 'vitest';
import { roundToMultiple } from './math';

test('Math functions', () => {
	
	expect(roundToMultiple(1, 1)).toBe(1);
	expect(roundToMultiple(1.49, 1)).toBe(1);
	expect(roundToMultiple(1.5, 1)).toBe(2);

	expect(roundToMultiple(1, 0.5)).toBe(1);
	expect(roundToMultiple(0.75, 0.5)).toBe(1);
	expect(roundToMultiple(0.25, 0.5)).toBe(0.5);

	expect(roundToMultiple(1, 20)).toBe(0);
	expect(roundToMultiple(10, 20)).toBe(20);
	expect(roundToMultiple(29, 20)).toBe(20);
	expect(roundToMultiple(-9, 20)).toBe(0);
	expect(roundToMultiple(-11, 20)).toBe(-20);
});
