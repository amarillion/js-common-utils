/**
 * Go over all points in an area in a fixed order: horizontal row by row.
 * Yield each coordinate pair.
 *
 * @param width
 * @param height
 */
export function *pointRange(width: number, height: number) {
	for (let y = 0; y < height; ++y) {
		for (let x = 0; x < width; ++x) {
			yield ({ x, y });
		}
	}
}
