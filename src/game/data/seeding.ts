import type { EAttribute } from '../entities/choom/attribute';
import Attribute from '../entities/choom/attribute';

export function createCondtions() {
	return null;
}

export async function createAttributes(): Promise<Map<EAttribute, Attribute>> {
	const attributes = new Map<EAttribute, Attribute>();
	const attribute_data = await (await import('./raw/attributes')).default;
	for (const attribute of attribute_data.primaryAttributes) {
		attributes.set(
			attribute.id,
			new Attribute(attribute.id, attribute.name, {
				description: attribute.description
			})
		);
	}
	return attributes;
}
