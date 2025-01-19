import { describe, expect, it } from 'vitest';
import { longestCommonSubstring, repeat } from './string.js';

describe('longest common substring', () => {

	it('longest common substring middle', () => {
		expect(
			longestCommonSubstring('abcdefghi', 'klmdefnop')
		).toEqual(
			{ length: 3, start1: 3, end1: 6, start2: 3, end2: 6 }
		);
	});

	it('longest common substring no overlap', () => {
		expect(
			longestCommonSubstring('abcdefghi', 'klmnopqrs')
		).toEqual(
			{ length: 0, start1: 0, end1: 0, start2: 0, end2: 0 }
		);
	});

	it('longest common substring tail', () => {
		expect(
			longestCommonSubstring('abcdef', 'defghi')
		).toEqual(
			{ length: 3, start1: 3, end1: 6, start2: 0, end2: 3 }
		);
	});

	it('longest common substring start', () => {
		expect(
			longestCommonSubstring('abcdef', 'zxyabc')
		).toEqual(
			{ length: 3, start1: 0, end1: 3, start2: 3, end2: 6 }
		);
	});
});

describe('repeat', () => {

	it('repeat strings', () => {
		expect(
			repeat('str', 4)
		).toEqual(
			'strstrstrstr'
		);
	});

	it('repeat strings zero times', () => {
		expect(
			repeat('str', 0)
		).toEqual(
			''
		);
	});

	it('repeat empty string', () => {
		expect(
			repeat('', 5)
		).toEqual(
			''
		);
	});

});
