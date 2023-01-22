import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, i as is_promise, n as noop, f as each } from "../../chunks/index.js";
import moment from "moment";
import axios from "axios";
const Container_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-ktb117{@apply relative p-16 flex flex-col justify-center items-center gap-2 container bg-gray-900 shadow-sm shadow-teal-900 rounded-xl;}p.description{@apply text-gray-400 max-w-2xl mb-6 font-light leading-tight text-sm;}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$5);
  return `<section${add_attribute("id", id, 0)} class="${"svelte-ktb117"}">${slots.link ? slots.link({}) : ``}
	${slots.title ? slots.title({}) : ``}
	${slots.description ? slots.description({}) : ``}
	${slots.content ? slots.content({}) : `
		<h2>Failed to load this section</h2>
	`}
	${slots.socials ? slots.socials({}) : ``}
</section>`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-133s9zq:first-of-type{position:absolute;top:-12rem\n}p.svelte-133s9zq:last-of-type{max-width:56rem;font-weight:300\n}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${$$result.head += `<!-- HEAD_svelte-g6smzm_START -->${$$result.title = `<title>Who is Mfundo?</title>`, ""}<!-- HEAD_svelte-g6smzm_END -->`, ""}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    content: () => {
      return `<p slot="${"content"}" class="${"svelte-133s9zq"}">Hi there! My name is Mfundo Shabalala and I am a software developer with 2 years of experience
		in the industry. I am proficient in JavaScript and have experience with the React, Angular and
		Vue frameworks. In my current role at Hire and service, I work on maintaining, debugging and
		bulding new features for HAS+ software platform the using Angular, SQL Server and SSRS. In my
		spare time, I enjoy learning new technologies and am always looking for new ways to improve my
		skills and stay up-to-date on the latest developments in the field. Feel free to contact me if
		you have any questions or would like to learn more about my work.
	</p>`;
    },
    description: () => {
      return `<p class="${"description svelte-133s9zq"}" slot="${"description"}">Behind the Code: A personal insight into my background and motivation.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">About Me
	</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section2"}" class="${"svelte-133s9zq"}"></div>`;
    }
  })}`;
});
const Landing_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: `div.svelte-3cqh9o.svelte-3cqh9o:first-of-type{position:absolute;top:-12rem}h1.svelte-3cqh9o.svelte-3cqh9o{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:flex-end;font-weight:100;line-height:1.25}h1.svelte-3cqh9o span.svelte-3cqh9o:first-child{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem}h1.svelte-3cqh9o span.svelte-3cqh9o:last-child{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#134e4a;--tw-gradient-to:rgb(19 78 74 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(15 118 110 / 0);--tw-gradient-stops:var(--tw-gradient-from), #0f766e, var(--tw-gradient-to);--tw-gradient-to:#134e4a;-webkit-background-clip:text;background-clip:text;padding-left:0.5rem;padding-right:0.5rem;font-family:'Comforter Brush', cursive;font-size:3rem;font-weight:900;line-height:1.5;color:transparent}h2.svelte-3cqh9o.svelte-3cqh9o{text-align:center}p.svelte-3cqh9o.svelte-3cqh9o{max-width:48rem;padding-left:1.5rem;padding-right:1.5rem;font-weight:100;line-height:1.25rem;letter-spacing:-0.05em}ul.svelte-3cqh9o.svelte-3cqh9o{margin-top:1.5rem;display:flex;gap:1rem;white-space:nowrap;font-size:0.75rem;line-height:1rem;font-weight:100}ul.svelte-3cqh9o li.svelte-3cqh9o{flex:1 1 0%;border-radius:0.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#475569;--tw-shadow:var(--tw-shadow-colored);transition-duration:500ms}ul.svelte-3cqh9o li.svelte-3cqh9o:hover{--tw-shadow-color:#0d9488;--tw-shadow:var(--tw-shadow-colored)}ul.svelte-3cqh9o li a.svelte-3cqh9o{perspective:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}@keyframes svelte-3cqh9o-bounce-spin{0%{transform:translateY(0) rotateY(0deg)}50%{transform:translateY(-20%) rotateY(180deg)}100%{transform:translateY(0) rotateY(360deg)}}li.svelte-3cqh9o:hover i.fab.svelte-3cqh9o{animation:svelte-3cqh9o-bounce-spin 1250ms infinite linear forwards;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#0d9488;--tw-gradient-to:rgb(13 148 136 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(15 118 110 / 0);--tw-gradient-stops:var(--tw-gradient-from), #0f766e, var(--tw-gradient-to);--tw-gradient-to:#0d9488;-webkit-background-clip:text;background-clip:text;color:transparent}i.fab.svelte-3cqh9o.svelte-3cqh9o{font-size:1.875rem;line-height:2.25rem}`,
  map: null
};
const fullName = "Mfundo Shabalala";
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const duration = moment([2020, 6, 20]).toNow(true);
  $$result.css.add(css$3);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    socials: () => {
      return `<ul slot="${"socials"}" class="${"svelte-3cqh9o"}"><li class="${"svelte-3cqh9o"}"><a href="${"."}" class="${"svelte-3cqh9o"}"><i class="${"fab fa-github svelte-3cqh9o"}"></i><span>Connect on GitHub</span></a></li>
		<li class="${"svelte-3cqh9o"}"><a href="${"."}" class="${"svelte-3cqh9o"}"><i class="${"fab fa-linkedin svelte-3cqh9o"}"></i><span>Connect on LinkedIn</span></a></li>
		<li class="${"svelte-3cqh9o"}"><a href="${"."}" class="${"svelte-3cqh9o"}"><i class="${"fab fa-twitter svelte-3cqh9o"}"></i><span>Connect on Twitter</span></a></li></ul>`;
    },
    content: () => {
      return `<p slot="${"content"}" class="${"svelte-3cqh9o"}">As a web developer with ${escape(duration)} years of experience, I have built a variety of websites and web
		applications. I am proficient in both frontend and backend development and am dedicated to creating
		intuitive, user-friendly interfaces.
	</p>`;
    },
    description: () => {
      return `<span slot="${"description"}"></span>`;
    },
    title: () => {
      return `<div slot="${"title"}" class="${"svelte-3cqh9o"}"><h1 class="${"svelte-3cqh9o"}"><span class="${"svelte-3cqh9o"}">${escape(fullName)}</span></h1>
		<h2 class="${"svelte-3cqh9o"}">A frontend developer</h2></div>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section1"}" class="${"svelte-3cqh9o"}"></div>`;
    }
  })}`;
});
const Portofolio_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'div#section3.svelte-1cdd6yx.svelte-1cdd6yx.svelte-1cdd6yx{position:absolute;top:-6rem\n}section.card-wrapper.svelte-1cdd6yx.svelte-1cdd6yx.svelte-1cdd6yx{display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:1rem\n}@media(min-width: 768px){section.card-wrapper.svelte-1cdd6yx.svelte-1cdd6yx.svelte-1cdd6yx{grid-template-columns:repeat(2, minmax(0, 1fr))\n    }}@media(min-width: 1024px){section.card-wrapper.svelte-1cdd6yx.svelte-1cdd6yx.svelte-1cdd6yx{grid-template-columns:repeat(3, minmax(0, 1fr))\n    }}article.svelte-1cdd6yx.svelte-1cdd6yx.svelte-1cdd6yx{position:relative;overflow:hidden;border-radius:0.5rem;padding:1rem;font-weight:300;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#64748b;--tw-shadow:var(--tw-shadow-colored)\n}article.svelte-1cdd6yx img.svelte-1cdd6yx.svelte-1cdd6yx{display:block;height:auto;width:100%\n}article.svelte-1cdd6yx>div.svelte-1cdd6yx.svelte-1cdd6yx{position:absolute;top:0px;bottom:0px;left:0px;right:0px;display:flex;height:100%;width:100%;flex-direction:column;gap:1rem;--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));padding:2rem;opacity:0;transition-property:opacity;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}article.svelte-1cdd6yx div.svelte-1cdd6yx>p.svelte-1cdd6yx{flex:1 1 0%;font-size:0.875rem;line-height:1.25rem\n}article.svelte-1cdd6yx div.svelte-1cdd6yx>h3.svelte-1cdd6yx{text-align:center;font-size:1.25rem;line-height:1.75rem;text-transform:capitalize\n}article.svelte-1cdd6yx div.svelte-1cdd6yx>div.svelte-1cdd6yx{display:flex;justify-content:center;gap:0.5rem\n}article.svelte-1cdd6yx a.svelte-1cdd6yx.svelte-1cdd6yx{border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}article.svelte-1cdd6yx ul.svelte-1cdd6yx.svelte-1cdd6yx{display:flex;justify-content:center;gap:0.5rem\n}article.svelte-1cdd6yx ul li.svelte-1cdd6yx.svelte-1cdd6yx{border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;text-align:center;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#64748b;--tw-shadow:var(--tw-shadow-colored)\n}article.svelte-1cdd6yx:hover div.svelte-1cdd6yx.svelte-1cdd6yx{opacity:1\n}section.svelte-1cdd6yx>p.svelte-1cdd6yx.svelte-1cdd6yx{grid-column:1 / -1\n}@keyframes svelte-1cdd6yx-pulse{50%{opacity:.5\n    }}section.svelte-1cdd6yx>p.svelte-1cdd6yx.svelte-1cdd6yx{animation:svelte-1cdd6yx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;text-align:center;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;font-weight:300\n}',
  map: null
};
const API_BASE_URL = "https://api.github.com/users/mfundoshabalala";
const API_KEY = "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";
const Portofolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repositories;
  const getGithubRepositories = async () => {
    const response = await axios.get(`${API_BASE_URL}/repos`, {
      headers: { Authorization: `Token ${API_KEY}` }
    });
    const json = await response.data;
    return json;
  };
  const getRepositoryLanguagesList = async (languages_url) => {
    const response = await axios.get(languages_url, {
      headers: { Authorization: `Token ${API_KEY}` }
    });
    const json = await response.data;
    return json;
  };
  repositories = getGithubRepositories().then(async (list) => {
    const repos = list.map(async (repo) => {
      const languages = await getRepositoryLanguagesList(repo.languages_url).then((languages2) => {
        return Object.keys(languages2);
      });
      return {
        name: repo.name,
        description: repo.description,
        languages,
        homepage: repo.homepage,
        html_url: repo.html_url
      };
    });
    return Promise.all(repos);
  });
  $$result.css.add(css$2);
  return `




${$$result.head += `<!-- HEAD_svelte-1pfym9_START -->${$$result.title = `<title>Portofolio</title>`, ""}<!-- HEAD_svelte-1pfym9_END -->`, ""}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    content: () => {
      return `<section slot="${"content"}" class="${"card-wrapper svelte-1cdd6yx"}">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
			<p class="${"svelte-1cdd6yx"}">Loading...</p>
		`;
        }
        return function(repos) {
          return `
			${each(repos, (repo) => {
            return `<article class="${"svelte-1cdd6yx"}">
					<img src="${"https://via.placeholder.com/300x200"}" alt="${"placeholder"}" class="${"svelte-1cdd6yx"}">
					<div class="${"svelte-1cdd6yx"}"><h3 class="${"svelte-1cdd6yx"}">${escape(repo.name)}</h3>
						${repo.description ? `<p class="${"svelte-1cdd6yx"}">${escape(repo.description)}</p>` : `<p class="${"svelte-1cdd6yx"}">No description provided</p>`}
						<div class="${"svelte-1cdd6yx"}">${repo.homepage ? `<a${add_attribute("href", repo.homepage, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1cdd6yx"}">Live Demo</a>` : ``}
							<a${add_attribute("href", repo.html_url, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1cdd6yx"}">View on GitHub</a></div>
						${function(__value2) {
              if (is_promise(__value2)) {
                __value2.then(null, noop);
                return ``;
              }
              return function(languages) {
                return `
							<ul class="${"svelte-1cdd6yx"}">${each(languages, (language) => {
                  return `<li class="${"svelte-1cdd6yx"}">${escape(language)}</li>`;
                })}</ul>
						`;
              }(__value2);
            }(repo.languages)}</div>
				</article>`;
          })}
		`;
        }(__value);
      }(repositories)}</section>`;
    },
    description: () => {
      return `<p class="${"description"}" slot="${"description"}">From concept to deployment: A curated collection of my development projects that showcases my
		abilities.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">Portfolio</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section3"}" class="${"svelte-1cdd6yx"}"></div>`;
    }
  })}`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-89qt10.svelte-89qt10{@apply container;}section.svelte-89qt10>section.svelte-89qt10{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px}article.svelte-89qt10.svelte-89qt10{@apply border border-gray-800 rounded-md p-4;}div.svelte-89qt10.svelte-89qt10:first-of-type{@apply absolute -top-6;}h3.svelte-89qt10.svelte-89qt10{@apply text-left text-gray-200 font-thin;}ul.svelte-89qt10.svelte-89qt10{@apply list-disc list-inside;}li.svelte-89qt10.svelte-89qt10{@apply text-gray-400 font-thin;}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1n3fqs6_START -->${$$result.title = `<title>Skills</title>`, ""}<!-- HEAD_svelte-1n3fqs6_END -->`, ""}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    content: () => {
      return `<section slot="${"content"}" class="${"svelte-89qt10"}"><section class="${"svelte-89qt10"}"><article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Client-side</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">JavaScript (ES6+)</li>
					<li class="${"svelte-89qt10"}">HTML</li>
					<li class="${"svelte-89qt10"}">CSS</li></ul></article>
			<article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Server-side</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">Node</li>
					<li class="${"svelte-89qt10"}">Express</li>
					<li class="${"svelte-89qt10"}">PHP</li></ul></article>
			<article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Databases</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">MSSQL</li>
					<li class="${"svelte-89qt10"}">MySQL</li>
					<li class="${"svelte-89qt10"}">MongoDB</li></ul></article>
			<article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Frameworks</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">Angular</li>
					<li class="${"svelte-89qt10"}">NextJS</li>
					<li class="${"svelte-89qt10"}">Svelte</li>
					<li class="${"svelte-89qt10"}">React</li></ul></article>
			<article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Tools</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">Git</li>
					<li class="${"svelte-89qt10"}">GitHub</li>
					<li class="${"svelte-89qt10"}">VSCode</li></ul></article>
			<article class="${"svelte-89qt10"}"><h3 class="${"svelte-89qt10"}">Soft Skills</h3>
				<ul class="${"svelte-89qt10"}"><li class="${"svelte-89qt10"}">Communication</li></ul></article></section></section>`;
    },
    description: () => {
      return `<p class="${"description"}" slot="${"description"}">Tools of the Trade: A look into the technologies and skills I have refined.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">Skills</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section4"}" class="${"svelte-89qt10"}"></div>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1se4flq{background-image:url('/images/header-pattern.png');@apply bg-blend-soft-light bg-fixed bg-opacity-10 pt-28;}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${" svelte-1se4flq"}">
	${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
	
	${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	
	${validate_component(Portofolio, "Portfolio").$$render($$result, {}, {}, {})}
	
	${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
