import type { EAttribute } from 'src/game/entities/choom/attribute';

export default {
	primaryAttributes: [
		{
			id: 'Intelligence',
			name: 'Intelligence',
			description: 'The ability to understand and connect conepts and ideas.',
			childAttributes: []
		},
		{
			id: 'Technical',
			name: 'Technical',
			description:
				'The ability to use and tinker with maschines and computers.',
			childAttributes: []
		},
		{
			id: 'Body',
			name: 'Body',
			description: 'Your physical strength and dexterity.',
			childAttributes: []
		},
		{
			id: 'Reflexes',
			name: 'Reflexes',
			description: 'Your reaction time and body-control.',
			childAttributes: []
		},
		{
			id: 'Will',
			name: 'Will',
			description: 'The ability to focus and keep a clear head.',
			childAttributes: []
		},
		{
			id: 'Cool',
			name: 'Cool',
			description: 'Your ability to make people listen to you.',
			childtAttributes: []
		}
	],
	secondaryAttributes: [{}]
};
