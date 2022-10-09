import { EAttribute, Attribute } from '../entities/choom/attribute';

export async function createCondtions() {
	return null;
}

/**
 * @Note
 * Parent-Child relationships get linked by the children
 */

export async function createAttributes(): Promise<Map<EAttribute, Attribute>> {
	const attributesMap = new Map<EAttribute, Attribute>();
	const attributes_data = await import('./raw/attributes');
	const primaryAttributes_data = attributes_data.default.primaryAttributes;
	const secondaryAttributes_Data = attributes_data.default.secondaryAttributes;

	// Create primary attributes
	for (const primaryAttribute of primaryAttributes_data) {
		const attribute = new Attribute(
			primaryAttribute.id,
			primaryAttribute.name,
			{
				description: primaryAttribute.description,
				maxLevelNormal: primaryAttribute.maxLevelNormal
			}
		);
		attributesMap.set(primaryAttribute.id, attribute);
	}

	// Create secondary attributes
	for (const secondaryAttribute of secondaryAttributes_Data) {
		// Only assign a Parent attribute if the Attribute exists
		const secondary_parentAttributes = new Map<EAttribute, Attribute>();
		for (const secondary_parentAttributeId of secondaryAttribute.parentAttributes) {
			const parentAttribute = attributesMap.get(secondary_parentAttributeId);
			if (parentAttribute) {
				secondary_parentAttributes.set(
					secondary_parentAttributeId,
					parentAttribute
				);
			}
		}

		// Create the actual Attribute & register it
		const attribute = new Attribute(
			secondaryAttribute.id,
			secondaryAttribute.name,
			{
				description: secondaryAttribute.description,
				maxLevelNormal: secondaryAttribute.maxLevelNormal,
				parentAttributes: secondary_parentAttributes
			}
		);
		attributesMap.set(secondaryAttribute.id, attribute);

		// Link Children-Ids in Parent for easy traversal
		for (const secondary_parentAttributeId of secondaryAttribute.parentAttributes) {
			attributesMap
				.get(secondary_parentAttributeId)
				?.childtAttributes.set(secondaryAttribute.id, attribute);
		}
	}

	return attributesMap;
}

//export function getParentAttributes(Array<EAttribute>){

//}
