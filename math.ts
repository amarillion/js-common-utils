/**
 * Clamp a number between a lower and upper bound.
 * If n is below min, return min.
 * If n is above max, return max.
 * else return n.
 *
 * Etymology: function name derived from GLSL.
 *
 * @param n
 * @param min
 * @param max
 * @returns a number that is guaranteed between min and max
 */
export function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

// TODO: find shorter name...
/**
 * Rounds value to the nearest multiple.
 * @param value returns this value rounded up or down. May be negative.
 * @param multiple: must be a positive value
 */
export function roundToMultiple(value: number, multiple: number) {
	const result = Math.round(value / multiple) * multiple;
	return result === 0 ? 0 : result; // This will remove any negative zeroes (-0)
}

/**
 * Checks that a number is between two bounds.
 *
 * @param lowerInclusive lower bound, inclusive
 * @param value
 * @param upperExclusive upper bound, exclusive
 * @returns true if the number is between the bounds
 */
export function between(lowerInclusive: number, value: number, upperExclusive: number) {
	return lowerInclusive <= value && value < upperExclusive;
}
