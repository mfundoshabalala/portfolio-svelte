<script lang="ts">
	import { onMount } from 'svelte';
	import { Octokit } from 'octokit';
	import SectionWrapper from '../components/SectionWrapper.svelte';
	import RepoCard from '../components/RepoCard.svelte';

	let repos: {
		name: string;
		homepage: string | null;
		description: string | null;
		languages_url: string;
		html_url: string;
		is_template: boolean | undefined;
		license: {
			key: string;
			name: string;
			url: string | null;
			spdx_id: string | null;
			node_id: string;
			html_url?: string | undefined;
		} | null;
		languages: string[];
	}[] = [];

	onMount(async () => {
		const octokit = new Octokit({
			auth: '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'
		});

		async function fetchRepos() {
			const { data } = await octokit.rest.repos.listForAuthenticatedUser({
				visibility: 'public',
				affiliation: 'owner,collaborator'
			});
			const repos =
				data &&
				data.map((repo) => {
					const repo_name = capitalizeString(repo.name);
					return {
						name: repo_name,
						description: repo.description,
						homepage: repo.homepage,
						html_url: repo.html_url,
						languages_url: repo.languages_url,
						is_template: repo.is_template,
						license: repo.license,
						languages: []
					};
				});
			return repos;
		}

		function capitalizeString(string: string) {
			//
			let stringArray = string.split('-');
			//
			for (var i = 0; i < stringArray.length; i++) {
				stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
			}
			//
			const repo_name = stringArray.join(' ');
			return repo_name;
		}

		async function getRepositoryLanguagesList(repo_name: string) {
			const { data } = await octokit.rest.repos.listLanguages({
				owner: 'mfundoshabalala',
				repo: repo_name
			});
			const languages = data && Object.keys(data);
			return languages;
		}

		repos = await fetchRepos();
		repos = repos.filter((repo) => !repo.is_template);

		repos.forEach(async (repo) => {
			const response = await getRepositoryLanguagesList(repo.name);
			repo.languages = await response;
		});
		console.table(repos);
	});
</script>

<SectionWrapper>
	<div slot="link" id="section3" />
	<h2 slot="title">Portfolio</h2>
	<p class="description" slot="description">
		A portfolio is a great way to showcase your work and demonstrate your skills to potential
		employers. You can include links to projects you have worked on, as well as descriptions of your
		role in each project and the technologies you used.
	</p>
	<section slot="content" class="card-wrapper">
		{#if repos.length > 0}
			{#each repos as repo}
				<RepoCard>
					<h3 slot="name">{repo.name}</h3>
					<ul slot="languages">
						{#each repo.languages as language}
							<li class=""><i class="fab fa-js" />{language}</li>
						{/each}
					</ul>
					<p slot="description">{repo.description}</p>
					<ul slot="repo">
						<li class="">
							<a target="_blank" rel="noreferrer" href={repo.homepage}><i class="fa fa-globe" /></a>
						</li>
						<li>
							<a target="_blank" rel="noreferrer" href={repo.html_url}
								><i class="fab fa-github" /></a
							>
						</li>
					</ul>
				</RepoCard>
			{/each}
		{:else}
			<h2>Failed to load this section</h2>
		{/if}
	</section>
</SectionWrapper>

<style lang="scss">
	div:first-of-type {
		@apply absolute -top-36;
	}

	section.card-wrapper {
		@apply w-full md:max-w-7xl mx-auto px-4 sm:max-w-3xl justify-center;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
	}

	h3 {
		@apply font-semibold border-b-2 border-orange-500 text-2xl;
	}

	ul {
		@apply flex gap-1;
	}

	section p {
		@apply font-light text-sm;
	}
</style>