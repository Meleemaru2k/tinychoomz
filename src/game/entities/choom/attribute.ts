export class Attribute {
	readonly id: EAttribute;
	readonly name: string;
	readonly description?: string;
	readonly expNeededPerLevel: Array<number>;
	readonly maxLevelNormal: number;
	readonly maxLevelSpecialist: number;
	readonly maxLevelOverdrive: number;
	readonly parentAttributes: Map<EAttribute, Attribute>;
	readonly childtAttributes: Map<EAttribute, Attribute>;

	constructor(
		id: EAttribute,
		name: string,
		config: {
			description?: string;
			maxLevelNormal: number;
			maxLevelSpecialist?: number;
			maxLevelOverdrive?: number;
			parentAttributes?: Map<EAttribute, Attribute>;
			childAttributes?: Map<EAttribute, Attribute>;
		}
	) {
		this.id = id;
		this.name = name;
		this.description = config.description;
		this.maxLevelNormal = config.maxLevelNormal;
		this.maxLevelOverdrive = config.maxLevelOverdrive ?? this.maxLevelNormal;
		this.maxLevelSpecialist = config.maxLevelSpecialist ?? this.maxLevelNormal;
		this.parentAttributes = config.parentAttributes ?? new Map();
		this.childtAttributes = config.childAttributes ?? new Map();

		if (this.parentAttributes.size === 0) {
			this.expNeededPerLevel = expPerLevel_default_Primary;
		} else {
			this.expNeededPerLevel = expPerLevel_default_Secondary;
		}
	}
}
/**
 * @Note
 * 1 primary exp = 1 child attribute levelup
 */
export const expPerLevel_default_Primary = [0, 1, 2, 2, 4];
export const expPerLevel_default_Secondary = [0, 10, 30, 90, 200];

export enum EAttribute {
	// Primary Attributes
	INTELLIGENCE = 'intelligence',
	TECHNICAL = 'technical',
	BODY = 'body',
	REFLEXES = 'reflexes',
	WILL = 'will',
	COOL = 'cool',
	// Secondary Attributes
	HACKING = 'hacking',
	MACHINES = 'machines',
	MELEE = 'melee',
	ACROBATICS = 'acrobatics',
	INTEGRITY = 'integrity',
	PERSUASIVENESS = 'persuasiveness'
}
