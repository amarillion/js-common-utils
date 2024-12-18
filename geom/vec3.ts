
interface IVec3 {
	x: number;
	y: number;
	z: number;
}

export class Vec3 implements IVec3 {

	x: number;
	y: number;
	z: number;

	constructor (x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	static normalize(v: IVec3) {
		const len = Vec3.length(v);
		return new Vec3(
			v.x / len,
			v.y / len,
			v.z / len
		);
	}

	static length(v: IVec3) {
		return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	static dot_product(a: IVec3, b: IVec3) {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	}
	
}
