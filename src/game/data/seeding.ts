import type { EAttribute } from '../entities/choom/attribute';
import Attribute from '../entities/choom/attribute';

export function createCondtions() {
	return null;
}

export async function createAttributes(): Promise<Map<EAttribute, Attribute>> {
	const attributes = new Map<EAttribute, Attribute>();
	const attribute_data = await import('./raw/attributes');
	const primary_data = attribute_data.default.primaryAttributes;
	const secondary_Data = attribute_data.default.secondaryAttributes;
	for (const attribute of primary_data) {
		attributes.set(
			attribute.id,
			new Attribute(attribute.id, attribute.name, {
				description: attribute.description
			})
		);
	}
	return attributes;
}
