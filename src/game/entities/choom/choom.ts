import type { Consumable } from '../care/consumable';
import type { StatusEffect } from '../care/statusEffect';
export default class Choom {
	readonly id: number;
	readonly careConditions = {
		health: 100,
		survival: { hunger: 100, thirst: 100 },
		mental: { mood: 100, psychosis: 100 },
		statusEffects: [] as Array<{ statusEffect: StatusEffect; duration: number }>
	};
	private equipped = {
		weapon: undefined,
		body: {
			type: undefined,
			hair: undefined,
			skinColor: undefined,
			skinType: undefined,
			faceType: undefined
		},
		clothes: {
			head: undefined,
			upperBody: undefined,
			lowerBody: undefined
		},
		cyberware: {
			eyes: undefined,
			spine: undefined,
			bones: undefined,
			muscles: undefined,
			skin: undefined,
			arms: undefined,
			legs: undefined,
			other: undefined
		}
	};

	constructor() {
		this.id = 0;
	}

	public useConsumable(consumable: Consumable) {
		if (consumable.onConsume.statusEffectsToApply.length > 0) {
			//Apply Conditions
		}
		if (consumable.onConsume.statusEffectsToRemove.length > 0) {
			for (const condition of consumable.onConsume.statusEffectsToRemove) {
				this.cureCondition(condition);
			}
		}
	}

	private cureCondition(id: number) {
		const conditionsCount = this.careConditions.statusEffects.length;
		this.careConditions.statusEffects =
			this.careConditions.statusEffects.filter((x) => x.statusEffect.id !== id);
		if (this.careConditions.statusEffects.length !== conditionsCount) {
			return true;
		} else {
			return false;
		}
	}

	public equipItem(item: any) {
		return item;
	}

	public unequipItem(slot: any) {
		return slot;
	}
}
