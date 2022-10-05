import type Reward from './reward';

export class Job {
	readonly id: string;
	readonly name: string;
	readonly description?: string;
	readonly sequences: Array<JobSequence>;
	readonly activeSequence: number;
	readonly rewards?: Array<Reward>;

	constructor(
		id: string,
		name: string,
		sequences: Array<JobSequence>,
		config: {
			description?: string;
			rewards?: Array<Reward>;
			activeSequence?: 0;
		}
	) {
		this.id = id;
		this.name = name;
		this.sequences = sequences;
		this.description = config?.description;
		this.rewards = config?.rewards;
		this.activeSequence = config?.activeSequence ?? 0;
	}
}

export class JobSequence {}

export interface JobDialog {
	dialogues: Array<{
		text: string;
		image: string;
		choices: Array<{
			id: number;
			name: string;
			text: string;
			limitedTo: object;
		}>;
	}>;
}
export interface JobEncounter {
	encounter: { placeholder: Array<object> };
}
