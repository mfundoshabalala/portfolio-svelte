<script lang="ts">
	// Import the 'axios' library to make HTTP requests
	import Container from '../components/Container.svelte';

	export let repos: Promise<any[]>;

	// Create a promise that will be resolved when the list of repositories is retrieved
</script>

<svelte:head>
	<title>Portofolio</title>
</svelte:head>
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

<style lang="scss">
	div#section3 {
		@apply absolute -top-24;
	}

	section.card-wrapper {
		@apply grid grid-cols-1 lg:grid-cols-2 gap-6 w-full;
	}

	article {
		@apply rounded-lg overflow-hidden relative font-light shadow-sm shadow-zinc-600 py-8 px-10;

		> div {
			@apply flex flex-col h-44;
		}

		> div > p {
			@apply text-sm flex-1 font-light text-center flex items-center justify-center w-full text-gray-300;
		}

		div > h3 {
			@apply text-center text-xl capitalize;
		}

		div > div {
			@apply flex justify-center gap-4;
		}

		a {
			@apply text-center text-gray-400 bg-gray-900 rounded px-2 py-1;
			@apply text-sm font-semibold border border-gray-800 w-full max-w-xs duration-500;
			@apply shadow-sm bg-gradient-to-r from-gray-900 via-gray-800 active:via-gray-900 to-gray-900;
		}

		ul {
			@apply flex gap-2 justify-center py-4;
		}

		ul li {
			@apply text-xs font-bold text-gray-400 border px-3 py-0.5 rounded-sm border-zinc-700 bg-slate-900;
		}
	}

	article:hover div {
		@apply opacity-100;
	}

	section > p {
		@apply text-center col-span-full text-2xl animate-pulse font-mono font-light;
	}
</style>
