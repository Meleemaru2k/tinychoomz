export class Job {
	id: string;
	name: string;
	sequences: array<JobSequence>;
	//constructor() {}
}

export class JobSequence {}

export class JobSequenceStep {}

export class JobSequenceDialog {
	dialogues: Array<{ text: string; image: string; options: Array<string> }>;
}

export class JobSequenceEncounter {
	encounter: { placeholder: Array<object> };
}
