import { fixHeading, getObjectKeys } from './../lib/functions';
import { _getGithubRepositories, _getRepositoryLanguagesList } from '$lib/github.server';

export const load = async ({ fetch }) => {
	const repositories = _getGithubRepositories().then(
		async (list) => {
			const repos = list
				? list.map(async (repo: any) => {
						const languages = await _getRepositoryLanguagesList(repo.languages_url).then(
							(languages) => {
								return getObjectKeys(languages);
							},
							(error) => {
								console.log('error', error);
							}
						);
						return {
							name: fixHeading(repo.name),
							description: repo.description,
							languages: languages,
							homepage: repo.homepage,
							html_url: repo.html_url
						};
				  })
				: [];

			return Promise.all(repos);
		},
		(error) => {
			console.log('error', error);
		}
	);

	return {
		repositories: await repositories
	};
};
