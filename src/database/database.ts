import Dexie from 'dexie';

/**
 * @TODO
 * Put interfaces into separate file(s) maybe
 */

export class TinyChoomzDB extends Dexie {
	choomz!: Dexie.Table<Choom>;
	choomAttribtues!: Dexie.Table<ChoomAttribute>;
	choomAttribtueChooms!: Dexie.Table<object>;

	constructor() {
		super('TinyChoomz');
		this.version(1).stores({
			choomz: '++id, firstName, lastName, age',
			choomAttributes: '++id, &name, maxLevelNormal, maxLevelSpecialist, maxLevelOverdrive',
			choomAttribtueChoom: '[choomId+choomAttributeId], choomId, choomAttributeId, level'
		});
	}
}

export interface Choom {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
}

export interface ChoomAttribute {
	id: number;
	name: string;
	maxLevelNormal: number;
	maxLevelSpecialist: number;
	maxLevelOverdrive: number;
}

export interface ChoomAttributeChoom {
	choomId: number;
	choomAttributeId: number;
	level: number;
}

export interface Job {
	id: number;
	name: string;
	description: string;
}
