export class Condition {
	readonly id: number;
	private _name: string;
	private _description?: string;
	private _duration?: number;

	constructor(
		id: number,
		name: string,
		config?: { description?: string; duration?: number }
	) {
		this.id = id;
		this._name = name;
		this._description = config?.description;
		this._duration = config?.duration;
	}

	get name() {
		return this._name;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public checkItemCanCure(cureItem: any) {
		if (cureItem.curableConditions.includes(this.id)) {
			return true;
		} else {
			return false;
		}
	}
}

//export enum ConditionFlag {
//	mental_healthy,
//	mental_neutral,
//	mental_sad,
//	mental_depressed,
//	body_poisoned,
//	body_hungry,
//	body_thirsty,
//	body_bruised,
//	body_bleeding,
//	body_unconscious,
//	cyberware_malfunction,
//	cyberware_hacked,
//	cyberware_virus
//}
