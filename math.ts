
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