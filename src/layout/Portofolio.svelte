<!-- 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 -->
<script lang="ts">
	// Import the 'axios' library to make HTTP requests
	import axios from 'axios';
	import Container from '../components/Container.svelte';

	// Set the API base URL and your API key
	const API_BASE_URL = 'https://api.github.com/users/mfundoshabalala';
	// const API_KEY = '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';

	let repositories: Promise<any[]>;

	const getGithubRepositories = async () => {
		// Make an HTTP GET request to the GitHub API to retrieve the list of repositories
		const response = await axios.get(`${API_BASE_URL}/repos`, {
			// headers: {
			// 	Authorization: `Token ${API_KEY}`
			// }
		});
		const json = await response.data;
		return json;
	};

	const getRepositoryLanguagesList = async (languages_url: string) => {
		// Make an HTTP GET request to the GitHub API to retrieve the list of languages used in the repository
		const response = await axios.get(languages_url, {
			// headers: {
			// 	Authorization: `Token ${API_KEY}`
			// }
		});
		const json = await response.data;
		return json;
	};

	// Create a promise that will be resolved when the list of repositories is retrieved
	repositories = getGithubRepositories().then(async (list) => {
		const repos = list.map(async (repo: any) => {
			const languages = await getRepositoryLanguagesList(repo.languages_url).then((languages) => {
				return Object.keys(languages);
			});
			return {
				name: repo.name,
				description: repo.description,
				languages: languages,
				homepage: repo.homepage,
				html_url: repo.html_url
			};
		});

		return Promise.all(repos);
	});
</script>

<!-- {@debug repositories} -->

<svelte:head>
	<title>Portofolio</title>
</svelte:head>
<!-- Display the list of repositories and their respective languages -->
<Container>
	<div slot="link" id="section3" />
	<h2 slot="title">Portfolio</h2>
	<p class="description" slot="description">
		From concept to deployment: A curated collection of my development projects that showcases my
		abilities.
	</p>
	<section slot="content" class="card-wrapper">
		{#await repositories}
			<p>Loading...</p>
		{:then repos}
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
