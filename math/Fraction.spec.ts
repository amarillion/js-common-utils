import { describe, expect, it } from 'vitest';
import { Fraction } from './Fraction';

// Tests for Fraction class
// written with ChatGPT
describe('Fraction', () => {
	it('should create a fraction with simplified form', () => {
		const fraction = new Fraction(2, 4);
		expect(fraction.n).toBe(1);
		expect(fraction.d).toBe(2);
	});

	it('should handle negative denominators', () => {
		const fraction = new Fraction(1, -2);
		expect(fraction.n).toBe(-1);
		expect(fraction.d).toBe(2);
	});

	it('should handle negative numerators', () => {
		const fraction = new Fraction(-1, 2);
		expect(fraction.n).toBe(-1);
		expect(fraction.d).toBe(2);
	});

	it('should throw error for zero denominator', () => {
		expect(() => new Fraction(1, 0)).toThrow('Denominator cannot be zero');
	});

	it('should handle non-integer values', () => {
		const fraction = new Fraction(0.5, 1.5);
		expect(fraction.n).toBe(1);
		expect(fraction.d).toBe(3);
	});

	it('should add two fractions correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(1, 3);
		const result = f1.plus(f2);
		expect(result.n).toBe(5);
		expect(result.d).toBe(6);
	});

	it('should subtract two fractions correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(1, 3);
		const result = f1.minus(f2);
		expect(result.n).toBe(1);
		expect(result.d).toBe(6);
	});

	it('should multiply two fractions correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(2, 3);
		const result = f1.mul(f2);
		expect(result.n).toBe(1);
		expect(result.d).toBe(3);
	});

	it('should divide two fractions correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(2, 3);
		const result = f1.div(f2);
		expect(result.n).toBe(3);
		expect(result.d).toBe(4);
	});

	it('should throw error when dividing by zero', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(0, 1);
		expect(() => f1.div(f2)).toThrow('Cannot divide by zero');
	});

	it('should convert to string correctly', () => {
		const fraction = new Fraction(3, 4);
		expect(fraction.toString()).toBe('3/4');
	});

	it('should convert to decimal correctly', () => {
		const fraction = new Fraction(1, 4);
		expect(fraction.toDecimal()).toBe(0.25);
	});

	it('should check equality correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(2, 4);
		expect(f1.equals(f2)).toBe(true);
	});

	it('should detect inequality correctly', () => {
		const f1 = new Fraction(1, 2);
		const f2 = new Fraction(2, 3);
		expect(f1.equals(f2)).toBe(false);
	});
});
