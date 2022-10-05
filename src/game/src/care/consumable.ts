import type { Condition } from './condition';

export class Consumable {
	readonly id: number;
	readonly name: string;
	readonly description?: string;
	readonly onConsume: {
		conditionsToRemove: Array<number>;
		conditionsToApply: Array<number>;
	};

	constructor(
		id: number,
		name: string,
		config: {
			description?: string;
			conditionsToCure?: Array<number>;
			conditionsToApply?: Array<number>;
		}
	) {
		this.id = id;
		this.name = name;
		this.description = config.description;
		this.onConsume = {
			conditionsToApply: config.conditionsToApply ?? [],
			conditionsToRemove: config.conditionsToCure ?? []
		};
	}

	public checkItemCanCure(condition: Condition) {
		if (this.onConsume.conditionsToRemove.some((x) => x === condition.id)) {
			return true;
		} else {
			return false;
		}
	}
}
