export default class Reward {
	readonly id: number;
	readonly description?: string;
	readonly rewards: Array<object>;
	constructor(
		id: number,
		config: { description?: string; rewards: Array<object> }
	) {
		this.id = id;
		this.description = config.description;
		this.rewards = config.rewards;
	}
}
