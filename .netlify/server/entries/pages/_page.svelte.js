import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape, h as null_to_empty, i as is_promise, n as noop } from "../../chunks/index.js";
import moment from "moment";
import axios from "axios";
const Container_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-11wptr1{width:100%;margin-right:auto;margin-left:auto\n}@media(min-width: 640px){section.svelte-11wptr1{max-width:640px\n    }}@media(min-width: 960px){section.svelte-11wptr1{max-width:960px\n    }}@media(min-width: 1280px){section.svelte-11wptr1{max-width:1280px\n    }}section.svelte-11wptr1{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.75rem;--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#134e4a;--tw-shadow:var(--tw-shadow-colored)\n}@media(min-width: 640px){section.svelte-11wptr1{padding:4rem\n    }}p.description{margin-bottom:1.5rem;max-width:42rem;font-size:0.875rem;line-height:1.25rem;font-weight:300;line-height:1.25;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$5);
  return `<section${add_attribute("id", id, 0)} class="${"svelte-11wptr1"}">${slots.link ? slots.link({}) : ``}
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
  code: `div.svelte-1rhe8u0.svelte-1rhe8u0:first-of-type{position:absolute;top:-12rem}h1.svelte-1rhe8u0.svelte-1rhe8u0{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:flex-end;font-weight:100;line-height:1.25}h1.svelte-1rhe8u0 span.svelte-1rhe8u0:first-child{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem}h1.svelte-1rhe8u0 span.svelte-1rhe8u0:last-child{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#134e4a;--tw-gradient-to:rgb(19 78 74 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(15 118 110 / 0);--tw-gradient-stops:var(--tw-gradient-from), #0f766e, var(--tw-gradient-to);--tw-gradient-to:#134e4a;-webkit-background-clip:text;background-clip:text;padding-left:0.5rem;padding-right:0.5rem;font-family:'Comforter Brush', cursive;font-size:3rem;font-weight:900;line-height:1.5;color:transparent}h2.svelte-1rhe8u0.svelte-1rhe8u0{text-align:center}p.svelte-1rhe8u0.svelte-1rhe8u0{max-width:48rem;padding-left:1.25rem;padding-right:0.25rem;font-weight:100;line-height:1.25rem;letter-spacing:-0.05em}@media(min-width: 640px){p.svelte-1rhe8u0.svelte-1rhe8u0{padding-left:1.5rem;padding-right:1.5rem}}ul.svelte-1rhe8u0.svelte-1rhe8u0{margin-top:1.5rem;display:flex;white-space:nowrap;font-size:0.75rem;line-height:1rem;font-weight:100}@media(min-width: 640px){ul.svelte-1rhe8u0.svelte-1rhe8u0{gap:1rem}}ul.svelte-1rhe8u0 li.svelte-1rhe8u0{flex:1 1 0%;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--tw-shadow-color:#475569;--tw-shadow:var(--tw-shadow-colored);transition-duration:500ms}ul.svelte-1rhe8u0 li.svelte-1rhe8u0:hover{--tw-shadow-color:#0d9488;--tw-shadow:var(--tw-shadow-colored)}@media(min-width: 640px){ul.svelte-1rhe8u0 li.svelte-1rhe8u0{padding-left:1rem;padding-right:1rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}}ul.svelte-1rhe8u0 li a.svelte-1rhe8u0{perspective:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}ul.svelte-1rhe8u0 li a span.svelte-1rhe8u0{display:none;font-size:0.75rem;line-height:1rem;font-weight:100;letter-spacing:-0.05em}@media(min-width: 640px){ul.svelte-1rhe8u0 li a span.svelte-1rhe8u0{display:inline-block;font-size:0.875rem;line-height:1.25rem}}@keyframes svelte-1rhe8u0-bounce-spin{0%{transform:translateY(0) rotateY(0deg)}50%{transform:translateY(-20%) rotateY(180deg)}100%{transform:translateY(0) rotateY(360deg)}}li.svelte-1rhe8u0:hover i.fab.svelte-1rhe8u0{animation:svelte-1rhe8u0-bounce-spin 1250ms infinite linear forwards;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#0d9488;--tw-gradient-to:rgb(13 148 136 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(15 118 110 / 0);--tw-gradient-stops:var(--tw-gradient-from), #0f766e, var(--tw-gradient-to);--tw-gradient-to:#0d9488;-webkit-background-clip:text;background-clip:text;color:transparent}i.fab.svelte-1rhe8u0.svelte-1rhe8u0{font-size:1.5rem;line-height:2rem}@media(min-width: 640px){i.fab.svelte-1rhe8u0.svelte-1rhe8u0{font-size:1.875rem;line-height:2.25rem}}`,
  map: null
};
const fullName = "Mfundo Shabalala";
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const duration = moment([2020, 6, 20]).toNow(true);
  const socials = [
    {
      icon: "fab fa-github",
      link: "https://www.github.com/mfundoshabalala",
      text: "Connect on GitHub"
    },
    {
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mfundoshabalala",
      text: "Connect on LinkedIn"
    },
    {
      icon: "fab fa-twitter",
      link: "https://www.twitter.com/mfundoshabalal",
      text: "Connect on Twitter"
    }
  ];
  $$result.css.add(css$3);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    socials: () => {
      return `<ul slot="${"socials"}" class="${"svelte-1rhe8u0"}">${each(socials, ({ icon, link, text }) => {
        return `<li class="${"svelte-1rhe8u0"}"><a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1rhe8u0"}"><i class="${escape(null_to_empty(icon), true) + " svelte-1rhe8u0"}"></i>
					<span class="${"svelte-1rhe8u0"}">${escape(text)}</span></a>
			</li>`;
      })}</ul>`;
    },
    content: () => {
      return `<p slot="${"content"}" class="${"svelte-1rhe8u0"}">As a web developer with ${escape(duration)} years of experience, I have built a variety of websites and web
		applications. I am proficient in both frontend and backend development and am dedicated to creating
		intuitive, user-friendly interfaces.
	</p>`;
    },
    description: () => {
      return `<span slot="${"description"}"></span>`;
    },
    title: () => {
      return `<div slot="${"title"}" class="${"svelte-1rhe8u0"}"><h1 class="${"svelte-1rhe8u0"}"><span class="${"svelte-1rhe8u0"}">${escape(fullName)}</span></h1>
		<h2 class="${"svelte-1rhe8u0"}">A frontend developer</h2></div>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section1"}" class="${"svelte-1rhe8u0"}"></div>`;
    }
  })}`;
});
const Portofolio_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'div#section3.svelte-ww0bm8.svelte-ww0bm8.svelte-ww0bm8{position:absolute;top:-6rem\n}section.card-wrapper.svelte-ww0bm8.svelte-ww0bm8.svelte-ww0bm8{display:grid;width:100%;grid-template-columns:repeat(1, minmax(0, 1fr));gap:1.5rem\n}@media(min-width: 1024px){section.card-wrapper.svelte-ww0bm8.svelte-ww0bm8.svelte-ww0bm8{grid-template-columns:repeat(2, minmax(0, 1fr))\n    }}article.svelte-ww0bm8.svelte-ww0bm8.svelte-ww0bm8{position:relative;overflow:hidden;border-radius:0.5rem;padding-top:2rem;padding-bottom:2rem;padding-left:2.5rem;padding-right:2.5rem;font-weight:300;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#52525b;--tw-shadow:var(--tw-shadow-colored)\n}article.svelte-ww0bm8>div.svelte-ww0bm8.svelte-ww0bm8{display:flex;height:11rem;flex-direction:column\n}article.svelte-ww0bm8>div.svelte-ww0bm8>p.svelte-ww0bm8{display:flex;width:100%;flex:1 1 0%;align-items:center;justify-content:center;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:300;--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity))\n}article.svelte-ww0bm8 div.svelte-ww0bm8>h3.svelte-ww0bm8{text-align:center;font-size:1.25rem;line-height:1.75rem;text-transform:capitalize\n}article.svelte-ww0bm8 div.svelte-ww0bm8>div.svelte-ww0bm8{display:flex;justify-content:center;gap:1rem\n}article.svelte-ww0bm8 a.svelte-ww0bm8.svelte-ww0bm8{border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;text-align:center;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity));width:100%;max-width:20rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(31 41 55 / var(--tw-border-opacity));font-size:0.875rem;line-height:1.25rem;font-weight:600;transition-duration:500ms;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#111827;--tw-gradient-to:rgb(17 24 39 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(31 41 55 / 0);--tw-gradient-stops:var(--tw-gradient-from), #1f2937, var(--tw-gradient-to);--tw-gradient-to:#111827;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}article.svelte-ww0bm8 a.svelte-ww0bm8.svelte-ww0bm8:active{--tw-gradient-to:rgb(17 24 39 / 0);--tw-gradient-stops:var(--tw-gradient-from), #111827, var(--tw-gradient-to)\n}article.svelte-ww0bm8 ul.svelte-ww0bm8.svelte-ww0bm8{display:flex;justify-content:center;gap:0.5rem;padding-top:1rem;padding-bottom:1rem\n}article.svelte-ww0bm8 ul li.svelte-ww0bm8.svelte-ww0bm8{border-radius:0.125rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(63 63 70 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.125rem;padding-bottom:0.125rem;font-size:0.75rem;line-height:1rem;font-weight:700;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}article.svelte-ww0bm8:hover div.svelte-ww0bm8.svelte-ww0bm8{opacity:1\n}section.svelte-ww0bm8>p.svelte-ww0bm8.svelte-ww0bm8{grid-column:1 / -1\n}@keyframes svelte-ww0bm8-pulse{50%{opacity:.5\n    }}section.svelte-ww0bm8>p.svelte-ww0bm8.svelte-ww0bm8{animation:svelte-ww0bm8-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;text-align:center;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;font-weight:300\n}',
  map: null
};
const API_BASE_URL = "https://api.github.com/users/mfundoshabalala";
const Portofolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repositories;
  const getGithubRepositories = async () => {
    const response = await axios.get(`${API_BASE_URL}/repos`, {});
    const json = await response.data;
    return json;
  };
  const getRepositoryLanguagesList = async (languages_url) => {
    const response = await axios.get(languages_url, {});
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
      return `<section slot="${"content"}" class="${"card-wrapper svelte-ww0bm8"}">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
			<p class="${"svelte-ww0bm8"}">Loading...</p>
		`;
        }
        return function(repos) {
          return `
			${each(repos, (repo) => {
            return `<article class="${"svelte-ww0bm8"}"><div class="${"svelte-ww0bm8"}"><h3 class="${"svelte-ww0bm8"}">${escape(repo.name)}</h3>
						${repo.description ? `<p class="${"svelte-ww0bm8"}">${escape(repo.description)}</p>` : `<p class="${"svelte-ww0bm8"}">No description provided</p>`}
						${function(__value2) {
              if (is_promise(__value2)) {
                __value2.then(null, noop);
                return ``;
              }
              return function(languages) {
                return `
							<ul class="${"svelte-ww0bm8"}">${each(languages, (language) => {
                  return `<li class="${"svelte-ww0bm8"}">${escape(language)}</li>`;
                })}</ul>
						`;
              }(__value2);
            }(repo.languages)}
						<div class="${"svelte-ww0bm8"}">${repo.homepage ? `<a${add_attribute("href", repo.homepage, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-ww0bm8"}">Live Demo</a>` : ``}
							<a${add_attribute("href", repo.html_url, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-ww0bm8"}">View on GitHub</a>
						</div></div>
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
      return `<div slot="${"link"}" id="${"section3"}" class="${"svelte-ww0bm8"}"></div>`;
    }
  })}`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-15fm87u.svelte-15fm87u{width:100%;margin-right:auto;margin-left:auto\n}@media(min-width: 640px){section.svelte-15fm87u.svelte-15fm87u{max-width:640px\n    }}@media(min-width: 960px){section.svelte-15fm87u.svelte-15fm87u{max-width:960px\n    }}@media(min-width: 1280px){section.svelte-15fm87u.svelte-15fm87u{max-width:1280px\n    }}section.svelte-15fm87u>section.svelte-15fm87u{display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:1rem\n}@media(min-width: 768px){section.svelte-15fm87u>section.svelte-15fm87u{grid-template-columns:repeat(2, minmax(0, 1fr))\n    }}@media(min-width: 1024px){section.svelte-15fm87u>section.svelte-15fm87u{grid-template-columns:repeat(3, minmax(0, 1fr))\n    }}article.svelte-15fm87u.svelte-15fm87u{border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(31 41 55 / var(--tw-border-opacity));padding:1rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}div.svelte-15fm87u.svelte-15fm87u:first-of-type{position:absolute;top:-1.5rem\n}h3.svelte-15fm87u.svelte-15fm87u{text-align:left;font-weight:100;--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))\n}ul.svelte-15fm87u.svelte-15fm87u{list-style-position:inside;list-style-type:disc\n}li.svelte-15fm87u.svelte-15fm87u{font-weight:100;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1n3fqs6_START -->${$$result.title = `<title>Skills</title>`, ""}<!-- HEAD_svelte-1n3fqs6_END -->`, ""}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    content: () => {
      return `<section slot="${"content"}" class="${"svelte-15fm87u"}"><section class="${"svelte-15fm87u"}"><article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Client-side</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">JavaScript (ES6+)</li>
					<li class="${"svelte-15fm87u"}">HTML</li>
					<li class="${"svelte-15fm87u"}">CSS</li></ul></article>
			<article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Server-side</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">Node</li>
					<li class="${"svelte-15fm87u"}">Express</li>
					<li class="${"svelte-15fm87u"}">PHP</li></ul></article>
			<article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Databases</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">MSSQL</li>
					<li class="${"svelte-15fm87u"}">MySQL</li>
					<li class="${"svelte-15fm87u"}">MongoDB</li></ul></article>
			<article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Frameworks</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">Angular</li>
					<li class="${"svelte-15fm87u"}">NextJS</li>
					<li class="${"svelte-15fm87u"}">Svelte</li>
					<li class="${"svelte-15fm87u"}">React</li></ul></article>
			<article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Tools</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">Git</li>
					<li class="${"svelte-15fm87u"}">GitHub</li>
					<li class="${"svelte-15fm87u"}">VSCode</li></ul></article>
			<article class="${"svelte-15fm87u"}"><h3 class="${"svelte-15fm87u"}">Soft Skills</h3>
				<ul class="${"svelte-15fm87u"}"><li class="${"svelte-15fm87u"}">Communication</li></ul></article></section></section>`;
    },
    description: () => {
      return `<p class="${"description"}" slot="${"description"}">Tools of the Trade: A look into the technologies and skills I have refined.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">Skills</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section4"}" class="${"svelte-15fm87u"}"></div>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1a59ts4{background-image:url('/images/header-pattern.png');@apply bg-blend-soft-light bg-fixed bg-opacity-10 pt-28 flex flex-col items-center gap-20;}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"container svelte-1a59ts4"}">
	${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
	
	${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	
	${validate_component(Portofolio, "Portfolio").$$render($$result, {}, {}, {})}
	
	${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
