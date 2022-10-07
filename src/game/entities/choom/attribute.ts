export default class Attribute {
	readonly id: EAttribute;
	readonly name: string;
	readonly description?: string;
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
	}
}

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
