<script lang="ts">
	// Import the 'axios' library to make HTTP requests
	import Container from '../components/Container.svelte';

	export let repos: Promise<any[]>;

	// Create a promise that will be resolved when the list of repositories is retrieved
</script>

<svelte:head>
	<title>Portofolio</title>
</svelte:head>

{@debug repos}
<!-- Display the list of repositories and their respective languages -->
<Container>
	<div slot="link" id="section3" />
	<h2 slot="title">Portfolio</h2>
	<p class="description" slot="description">
		From concept to deployment: A curated collection of my development projects that showcases my abilities.
	</p>
	<section slot="content" class="card-wrapper">
		{#await repos}
			<p>Loading...</p>
		{:then repos}
			{#if repos}
				{#each repos as repo}
					<article>
						<div>
							<h3>{repo.name}</h3>
							{#if repo.description}
								<p>{repo.description}</p>
							{:else}
								<p>No description provided</p>
							{/if}
							{#await repo.languages then languages}
								<ul>
									{#each languages as language}
										<li>{language}</li>
									{/each}
								</ul>
							{/await}
							<div>
								{#if repo.homepage}
									<a href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a>
								{:else}
									<span class="disabled">Live Demo</span>
								{/if}
								<a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
							</div>
						</div>
					</article>
				{/each}
			{/if}
		{:catch}
			<p>Something went wrong</p>
		{/await}
	</section>
</Container>

<style lang="postcss">
	div#section3 {
		@apply absolute -top-24;
	}

	section.card-wrapper {
		@apply grid grid-cols-1 lg:grid-cols-2 gap-6 w-full;
	}

	article {
		@apply rounded-lg overflow-hidden relative shadow-sm shadow-zinc-600 py-8 px-10;
	}

	article > div {
		@apply flex flex-col h-44;
	}

	article > div > p {
		@apply text-sm flex-1  text-center flex items-center justify-center w-full text-gray-300 tracking-tighter;
	}

	article div > h3 {
		@apply text-center text-2xl tracking-wide font-extrabold capitalize font-kaushan;
	}

	article div > div {
		@apply flex justify-center gap-4;
	}

	article a,
	span {
		@apply text-sm text-center text-gray-300 rounded px-2 py-1 w-full max-w-xs font-semibold border border-gray-800 duration-500 shadow-sm;
	}

	article a:not(.disabled) {
		@apply bg-gradient-to-r from-gray-900 via-gray-800  to-gray-900 cursor-pointer;
	}

	article a:not(.disabled):active {
		@apply via-gray-900;
	}

	article a:not(.disabled):hover {
		@apply border-gray-600;
	}

	article span.disabled {
		@apply text-gray-500 bg-gray-800 cursor-not-allowed;
	}

	article ul {
		@apply flex gap-2 justify-center py-4;
	}

	article ul li {
		@apply text-xs font-bold text-gray-400 border px-3 py-0.5 rounded-sm border-zinc-700 bg-slate-900;
	}

	article:hover div {
		@apply opacity-100;
	}

	section > p {
		@apply text-center col-span-full text-2xl animate-pulse font-light;
	}
</style>
