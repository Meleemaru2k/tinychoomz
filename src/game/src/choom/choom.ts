export default class Choom {
	private _id: number;
	private careConditions: array<object>;
	private equipped: {
		weapon: object;
		clothes: { head: object; upperBody: object; lowerBody: object };
		cyberware: {
			eyes: object;
			spine: object;
			bones: object;
			muscles: object;
			skin: object;
			arms: object;
			legs: object;
			other: object;
		};
	};

	constructor() {
		this._id = 0;
	}

	public get id() {
		return this._id;
	}
}
