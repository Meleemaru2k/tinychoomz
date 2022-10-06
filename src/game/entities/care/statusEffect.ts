import type { StatusEffectType } from 'src/game/types/types';
import type { Consumable } from './consumable';

export class StatusEffect {
	readonly id: number;
	readonly name: string;
	readonly statusEffectType: StatusEffectType;
	readonly description?: string;
	readonly duration?: number;

	constructor(
		id: number,
		name: string,
		statusEffectType: StatusEffectType,
		config: { description?: string; duration?: number }
	) {
		this.id = id;
		this.name = name;
		this.statusEffectType = statusEffectType;
		this.description = config?.description;
		this.duration = config?.duration;
	}

	public checkItemCanCure(consumable: Consumable) {
		if (consumable.onConsume.statusEffectsToRemove.includes(this.id)) {
			return true;
		} else {
			return false;
		}
	}
}
