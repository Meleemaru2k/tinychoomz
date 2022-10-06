import type { StatusEffect } from './statusEffect';

export class Consumable {
	readonly id: number;
	readonly name: string;
	readonly description?: string;
	readonly onConsume: {
		statusEffectsToRemove: Array<number>;
		statusEffectsToApply: Array<number>;
	};

	constructor(
		id: number,
		name: string,
		config: {
			description?: string;
			statusEffectsToCure?: Array<number>;
			statusEffectsToApply?: Array<number>;
		}
	) {
		this.id = id;
		this.name = name;
		this.description = config.description;
		this.onConsume = {
			statusEffectsToApply: config.statusEffectsToApply ?? [],
			statusEffectsToRemove: config.statusEffectsToCure ?? []
		};
	}

	public checkItemCanCure(statusEffect: StatusEffect) {
		if (
			this.onConsume.statusEffectsToRemove.some((x) => x === statusEffect.id)
		) {
			return true;
		} else {
			return false;
		}
	}
}
