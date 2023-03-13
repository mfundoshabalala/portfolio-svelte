import { SECRET_GITHUB_TOKEN } from '$env/static/private';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import axios from 'axios';

const headers = {
	Authorization: `Token ${SECRET_GITHUB_TOKEN}`
};

const options = {
	headers: headers
};

const getRequest = async (url: string) => {
	const response = await axios.get(url, options);
	const json = await response.data;
	return json;
};

export const _getGithubRepositories = async () => {
	// Make an HTTP GET request to the GitHub API to retrieve the list of repositories
	return await getRequest(`${PUBLIC_API_BASE_URL}/repos`);
};

export const _getRepositoryLanguagesList = async (languages_url: string) => {
	// Make an HTTP GET request to the GitHub API to retrieve the list of languages used in the repository
	return await getRequest(languages_url);
};
