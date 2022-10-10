<script lang="ts">
	import { createAttributes } from 'src/game/data/seeding';
	/**
	 * @Note
	 * Probably how every component will/should look like at the end
	 * Just return everything that should be accessible from main()
	 * A bit reminiscent of the old Vue Composition API style I guess?
	 */
	async function main() {
		const attributeData = await createAttributes();
		return { attributeData, anything: 'ok' };
	}
</script>

<h1 class="text-2xl">DataTesting</h1>
{#await main() then data}
	{data.anything}
	{#each [...data.attributeData] as [attributeKey, attributeValue]}
		{#if attributeValue.childtAttributes.size > 0}
			<p>
				{attributeValue.name}:
				{#each [...attributeValue.childtAttributes] as [childKey, childValue]}
					{childValue.name}
				{/each}
			</p>
		{/if}
	{/each}
{/await}
