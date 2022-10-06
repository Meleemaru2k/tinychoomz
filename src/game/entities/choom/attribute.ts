export default class Attribute {
	public readonly id: number;
	public readonly type: PrimaryAttribut | SecondaryAttribute;
	protected name: string;
	protected description?: string;
	protected maxLevelNormal: number;
	protected maxLevelSpecialist: number;
	protected maxLevelOverdrive: number;
	protected parentAttributes: Array<Attribute>;

	constructor(
		id: number,
		type: PrimaryAttribut | SecondaryAttribute,
		name: string,
		config: {
			description?: string;
			maxLevelNormal: number;
			maxLevelSpecialist: number;
			maxLevelOverdrive: number;
			parentAttributes?: Array<Attribute>;
		}
	) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = config?.description;
		this.maxLevelNormal = config.maxLevelNormal;
		this.maxLevelOverdrive = config.maxLevelOverdrive;
		this.maxLevelSpecialist = config.maxLevelSpecialist;
		this.parentAttributes = config.parentAttributes ?? [];
	}
}

export enum PrimaryAttribut {
	INTELLIGENCE,
	TECHNICAL,
	BODY,
	REFLEXES,
	WILL,
	COOL
}

export enum SecondaryAttribute {
	HACKING,
	MACHINES,
	MELEE,
	ACROBATICS,
	INTEGRITY,
	PERSUASIVENESS
}
