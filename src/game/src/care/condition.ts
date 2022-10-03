export class Condition {
	readonly id: number;
	readonly name: string;
	readonly description: string;

	public checkItemCanCure(cureItem: object) {
		if (cureItem.canCureTypes.includes(this.id)) {
			return true;
		} else {
			return false;
		}
	}
}
