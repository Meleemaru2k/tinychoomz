export default class Attribute {
	readonly id: EAttribute;
	readonly name: string;
	readonly description?: string;
	readonly expNeededPerLevel: Array<number>;
	readonly maxLevelNormal: number;
	readonly maxLevelSpecialist: number;
	readonly maxLevelOverdrive: number;
	readonly parentAttributes: Array<Attribute>;
	readonly childtAttributes: Array<Attribute>;

	constructor(
		id: EAttribute,
		name: string,
		config: {
			description?: string;
			maxLevelNormal: number;
			maxLevelSpecialist: number;
			maxLevelOverdrive: number;
			parentAttributes?: Array<Attribute>;
			childAttributes?: Array<Attribute>;
		}
	) {
		this.id = id;
		this.name = name;
		this.description = config.description;
		this.maxLevelNormal = config.maxLevelNormal;
		this.maxLevelOverdrive = config.maxLevelOverdrive;
		this.maxLevelSpecialist = config.maxLevelSpecialist;
		this.parentAttributes = config.parentAttributes ?? [];
		this.childtAttributes = config.childAttributes ?? [];

		if (this.parentAttributes.length === 0) {
			this.expNeededPerLevel = expPerLevel_Primary;
		} else {
			this.expNeededPerLevel = expPerLevel_Secondary;
		}
	}
}
/**
 * @Note
 * 1 primary exp = 1 child attribute levelup
 */
export const expPerLevel_Primary = [0, 1, 2, 2, 4];
export const expPerLevel_Secondary = [0, 10, 30, 90, 200];

export enum EAttribute {
	// Primary Attributes
	INTELLIGENCE = 'Intelligence',
	TECHNICAL = 'Technical',
	BODY = 'Body',
	REFLEXES = 'Reflexes',
	WILL = 'Will',
	COOL = 'Cool',
	// Child Attributes
	HACKING = 'Hacking',
	MACHINES = 'Machines',
	MELEE = 'Melee',
	ACROBATICS = 'Acrobatics',
	INTEGRITY = 'Integrity',
	PERSUASIVENESS = 'Persuasiveness'
}
