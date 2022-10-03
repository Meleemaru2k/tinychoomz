export class Job {
	id: string;
	name: string;
	description: string;
	sequences: array<JobSequence>;
	activeSequence: number;
	//constructor() {}
}

export class JobSequence {}

export interface JobDialog {
	dialogues: Array<{
		text: string;
		image: string;
		choices: Array<{ id: number; name: string; text: string; limitedTo: object }>;
	}>;
}
export interface JobEncounter {
	encounter: { placeholder: Array<object> };
}
