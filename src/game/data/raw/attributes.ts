import { EAttribute } from 'src/game/entities/choom/attribute';

export default {
	primaryAttributes: [
		{
			id: EAttribute.INTELLIGENCE,
			name: 'Intelligence',
			description: 'The ability to understand and connect conepts and ideas.',
			maxLevelNormal: 10
		},
		{
			id: EAttribute.TECHNICAL,
			name: 'Technical',
			description:
				'The ability to use and tinker with maschines and computers.',
			maxLevelNormal: 10
		},
		{
			id: EAttribute.BODY,
			name: 'Body',
			description: 'Physical strength and dexterity.',
			maxLevelNormal: 10
		},
		{
			id: EAttribute.REFLEXES,
			name: 'Reflexes',
			description: 'Reaction time and body-control.',
			maxLevelNormal: 10
		},
		{
			id: EAttribute.WILL,
			name: 'Will',
			description: 'The ability to focus and keep a clear head.',
			maxLevelNormal: 10
		},
		{
			id: EAttribute.COOL,
			name: 'Cool',
			description: 'The ability to make people listen to you.',
			maxLevelNormal: 10
		}
	],
	secondaryAttributes: [
		{
			id: EAttribute.HACKING,
			name: 'Hacking',
			description: 'The ability to make computers abide your will.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.INTELLIGENCE, EAttribute.TECHNICAL]
		},
		{
			id: EAttribute.MACHINES,
			name: 'Machines',
			description: 'The ability to use and craft machines, gadeget and more.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.INTELLIGENCE, EAttribute.TECHNICAL]
		},
		{
			id: EAttribute.MELEE,
			name: 'Melee',
			description: 'The ability to fight in close combat.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.BODY, EAttribute.REFLEXES]
		},
		{
			id: EAttribute.ACROBATICS,
			name: 'Acrobatics',
			description: 'The ability to performan acrobatic moves.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.BODY, EAttribute.REFLEXES]
		},
		{
			id: EAttribute.INTEGRITY,
			name: 'Integrity',
			description:
				'The ability to stay to true to yourself, even in tempting situations.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.WILL, EAttribute.COOL]
		},
		{
			id: EAttribute.PERSUASIVENESS,
			name: 'Persuasiveness',
			description: 'The ability to reason with people.',
			maxLevelNormal: 10,
			parentAttributes: [EAttribute.WILL, EAttribute.COOL]
		}
	]
};
