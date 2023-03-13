import axios from "axios";
const getObjectKeys = (obj) => {
  return Object.keys(obj);
};
const fixHeading = (heading) => {
  return heading.replaceAll("-", " ");
};
const SECRET_GITHUB_TOKEN = "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";
const PUBLIC_API_BASE_URL = "https://api.github.com/users/mfundoshabalala";
const headers = {
  Authorization: `token ${SECRET_GITHUB_TOKEN}`
};
const options = {
  headers
};
const getRequest = async (url) => {
  const response = await axios.get(url, options);
  const json = await response.data;
  return json;
};
const _getGithubRepositories = async () => {
  return await getRequest(`${PUBLIC_API_BASE_URL}/repos`);
};
const _getRepositoryLanguagesList = async (languages_url) => {
  return await getRequest(languages_url);
};
const load = async ({ fetch }) => {
  const repositories = _getGithubRepositories().then(async (list) => {
    const repos = list && list.map(async (repo) => {
      const languages = await _getRepositoryLanguagesList(repo.languages_url).then((languages2) => {
        return getObjectKeys(languages2);
      }, (error) => {
        console.log("error", error);
      });
      return {
        name: fixHeading(repo.name),
        description: repo.description,
        languages,
        homepage: repo.homepage,
        html_url: repo.html_url
      };
    });
    return Promise.all(repos);
  }, (error) => {
    console.log("error", error);
  });
  return {
    repositories: await repositories
  };
};
export {
  load
};
