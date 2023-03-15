<script>
	import Container from '../components/Container.svelte';
	import { iconsMap, skills } from '../constants/iconsMap';
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>
<Container>
	<div slot="link" id="section4" />
	<h2 slot="title">Skills</h2>
	<p class="description" slot="description">
		Tools of the Trade: A look into the technologies and skills I have refined.
	</p>
	<section slot="content">
		<section>
			{#each Object.entries(skills) as [category, languages]}
				<article>
					<h3>{category}</h3>
					<ul>
						{#each languages as language}
							<li>
								{#if iconsMap[language]}
									<i class={iconsMap[language] + ' small'} />
								{/if}
								{language}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</section>
	</section>
</Container>

<style lang="postcss">
	section {
		@apply container;
	}

	section > section {
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
	}

	article {
		@apply border border-gray-800 rounded-md p-4 shadow;
	}

	div:first-of-type {
		@apply absolute -top-6;
	}

	h3 {
		@apply text-gray-200 font-kaushan text-lg mb-2;
	}

	ul {
		@apply list-disc list-inside grid grid-cols-3 text-sm;
	}

	li {
		@apply text-gray-400 font-thin list-none;
	}

	li > i {
		@apply text-gray-300 hover:text-current;
	}
</style>
