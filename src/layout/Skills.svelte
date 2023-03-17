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
								<span>{language}</span>
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
		@apply border border-gray-800 shadow-sm shadow-cyan-900 rounded-md p-4;
	}

	div:first-of-type {
		@apply absolute -top-6;
	}

	h3 {
		@apply text-gray-200 font-kaushan text-lg mb-2 px-4;
	}

	ul {
		@apply list-disc list-inside grid grid-cols-3 text-sm gap-2 p-4;
	}

	li {
		@apply list-none flex flex-col items-center gap-1;
	}

	li > i {
		@apply w-9 h-9 flex justify-center items-center bg-gradient-radial from-gray-800 drop-shadow-2xl to-gray-900 shadow hover:scale-110 hover:from-gray-500 duration-300;
	}

	li span {
		@apply text-gray-400 text-xs font-semibold;
	}
</style>
