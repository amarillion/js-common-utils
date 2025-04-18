export function repeat(str: string, num: number) {
	return new Array(num).fill(str).join('');
}

export function indentLines(text: string, prefix: string) {
	return text.split('\n').map(line => `${prefix}${line}`).join('\n');
}

/**
 * Indent the remaining text in line with the label using spaces.
 * @param text multi-line text
 * @param label used as prefix for the first line
 * @returns formatted text
 */
export function formatAsDefinition(text: string, label: string) {
	const lines = text.split('\n');
	if (lines.length > 1) {
		const prefix = repeat(' ', label.length);
		const remainder = lines.slice(1).map(line => `${prefix}${line}`).join('\n');
		return `${label}${lines[0]}\n${remainder}`;
	}
	else {
		return `${label}${lines[0]}`;
	}
}

/**
 * Finds the longest common substring between two strings (dynamic programming approach).
 *
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns An object containing the start index in str1, start index in str2, and the length of the overlap.
 */
export function longestCommonSubstring(str1: string, str2: string) {
	const len1 = str1.length;
	const len2 = str2.length;

	// Initialize the DP table
	const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

	let maxLength = 0;
	let end1 = 0; // End index in str1
	let end2 = 0; // End index in str2

	// Fill the DP table
	for (let i = 1; i <= len1; i++) {
		for (let j = 1; j <= len2; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
				if (dp[i][j] > maxLength) {
					maxLength = dp[i][j];
					end1 = i;
					end2 = j;
				}
			}
		}
	}

	// Start indices of the overlap
	const start1 = end1 - maxLength;
	const start2 = end2 - maxLength;

	return { start1, start2, end1, end2, length: maxLength };
}
