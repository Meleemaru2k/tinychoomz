export default class Choom {
	readonly _id: number;
	private careConditions: Array<object>;
	private equipped?: {
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
		this.careConditions = [];
		this.equipped = undefined;
	}

	public get id() {
		return this._id;
	}
}
