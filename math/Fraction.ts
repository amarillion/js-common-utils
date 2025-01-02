import { assert } from '../assert';

export interface FractionLike {
	n: number;
	d: number;
}

// TODO may be moved to 'numbers' module
/** Calculate the greatest common divisor */
export function gcd(a: number, b: number): number {
	if (b === 0) return Math.abs(a);
	return gcd(b, a % b);
}


// TODO may be moved to 'numbers' module
/** Calculate the least common multiple */
export function lcm(a: number, b: number): number {
	return Math.abs(a * b) / gcd(a, b);
}

// written with ChatGPT
export class Fraction implements FractionLike {
	/** numerator */
	readonly n: number;

	/** denominator */
	readonly d: number;

	constructor(n: number, d: number) {
		assert(d !== 0, 'Denominator cannot be zero');

		// Scale n and d to ensure they are integers
		const scale = lcm(Fraction.denominatorScale(n), Fraction.denominatorScale(d));
		n = Math.round(n * scale);
		d = Math.round(d * scale);

		const common = gcd(n, d);
		this.n = n / common;
		this.d = d / common;

		if (this.d < 0) {
			this.n = -this.n;
			this.d = -this.d;
		}
	}

	// Calculate the scaling factor to make a number an integer
	static denominatorScale(value: number): number {
		const parts = value.toString().split('.');
		return parts.length > 1 ? Math.pow(10, parts[1].length) : 1;
	}

	static plus(f1: FractionLike, f2: FractionLike): Fraction {
		const n = f1.n * f2.d + f2.n * f1.d;
		const d = f1.d * f2.d;
		return new Fraction(n, d);
	}

	static minus(f1: FractionLike, f2: FractionLike): Fraction {
		const n = f1.n * f2.d - f2.n * f1.d;
		const d = f1.d * f2.d;
		return new Fraction(n, d);
	}

	static mul(f1: FractionLike, f2: FractionLike): Fraction {
		return new Fraction(f1.n * f2.n, f1.d * f2.d);
	}

	static div(f1: FractionLike, f2: FractionLike): Fraction {
		assert(f2.n !== 0, 'Cannot divide by zero');
		return new Fraction(f1.n * f2.d, f1.d * f2.n);
	}

	plus(other: FractionLike): Fraction {
		return Fraction.plus(this, other);
	}

	minus(other: FractionLike): Fraction {
		return Fraction.minus(this, other);
	}

	mul(other: FractionLike): Fraction {
		return Fraction.mul(this, other);
	}

	div(other: FractionLike): Fraction {
		return Fraction.div(this, other);
	}

	// Convert fraction to string representation
	toString(): string {
		if (this.d === 1) {
			return `${this.n}`;
		}
		return `${this.n}/${this.d}`;
	}

	// Convert fraction to decimal
	toDecimal(): number {
		return this.n / this.d;
	}

	// Check equality with another fraction
	equals(other: FractionLike): boolean {
		return this.n === other.n && this.d === other.d;
	}
}
