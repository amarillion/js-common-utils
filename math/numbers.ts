/** Calculate the greatest common divisor */
export function gcd(a: number, b: number): number {
	if (b === 0) return Math.abs(a);
	return gcd(b, a % b);
}


/** Calculate the least common multiple */
export function lcm(a: number, b: number): number {
	return Math.abs(a * b) / gcd(a, b);
}

export function divisors(n: number) {
	const result1 = [ 1 ];
	const result2 = [ n ];
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			result1.push(i);
			if (i !== n / i) {
				result2.unshift(n / i);
			}
		}
	}
	return [ ...result1, ...result2 ];
}
