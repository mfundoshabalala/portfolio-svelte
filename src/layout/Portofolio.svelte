<!-- 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 -->
<script lang="ts">
	// Import the 'axios' library to make HTTP requests
	import axios from 'axios';
	import Container from '../components/Container.svelte';

	// Set the API base URL and your API key
	const API_BASE_URL = 'https://api.github.com/users/mfundoshabalala';
	const API_KEY = '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';

	let repositories: any;

	const getGithubRepositories = async () => {
		// Make an HTTP GET request to the GitHub API to retrieve the list of repositories
		const response = await axios.get(`${API_BASE_URL}/repos`, {
			headers: {
				Authorization: `Token ${API_KEY}`
			}
		});
		const json = await response.data;
		return json;
	};

	const getRepositoryLanguagesList = async (languages_url: string) => {
		// Make an HTTP GET request to the GitHub API to retrieve the list of languages used in the repository
		const response = await axios.get(languages_url, {
			headers: {
				Authorization: `Token ${API_KEY}`
			}
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
					<!-- landscape placeholder image -->
					<img src="https://via.placeholder.com/300x200" alt="placeholder" />
					<div>
						<h3>{repo.name}</h3>
						{#if repo.description}
							<p>{repo.description}</p>
						{:else}
							<p>No description provided</p>
						{/if}
						<div>
							{#if repo.homepage}
								<a href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a>
							{/if}
							<a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
						</div>
						{#await repo.languages then languages}
							<ul>
								{#each languages as language}
									<li>{language}</li>
								{/each}
							</ul>
						{/await}
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
		// @apply w-full md:max-w-7xl mx-auto px-4 sm:max-w-3xl justify-center;
		// display: grid;
		// grid-gap: 10px;
		// grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
	}

	article {
		@apply rounded-lg overflow-hidden relative font-light shadow-sm shadow-slate-500 p-4;

		img {
			@apply block w-full h-auto;
		}

		> div {
			@apply flex flex-col gap-4 p-8 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out bg-slate-900;
		}

		div > p {
			@apply text-sm flex-1;
		}

		div > h3 {
			@apply text-center text-xl capitalize;
		}

		div > div {
			@apply flex gap-2 justify-center;
		}

		a {
			@apply text-center text-white bg-slate-900 rounded px-4 py-2 shadow-sm;
		}

		ul {
			@apply flex gap-2 justify-center;
		}

		ul li {
			@apply shadow-slate-500 text-xs text-center text-white bg-slate-800 rounded-full px-3 py-1 shadow-inner;
		}
	}

	article:hover div {
		@apply opacity-100;
	}

	section > p {
		@apply text-center col-span-full text-2xl animate-pulse font-mono font-light;
	}
</style>
