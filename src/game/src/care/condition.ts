import type { Consumable } from './consumable';

export class Condition {
	readonly id: number;
	readonly name: string;
	readonly description?: string;
	readonly duration?: number;

	constructor(
		id: number,
		name: string,
		config?: { description?: string; duration?: number }
	) {
		this.id = id;
		this.name = name;
		this.description = config?.description;
		this.duration = config?.duration;
	}

	public checkItemCanCure(consumable: Consumable) {
		if (consumable.onConsume.conditionsToRemove.includes(this.id)) {
			return true;
		} else {
			return false;
		}
	}
}
