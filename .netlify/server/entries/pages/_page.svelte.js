import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each } from "../../chunks/index.js";
import moment from "moment";
const SectionWrapper_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-u35i4{@apply relative min-h-screen flex flex-col justify-center items-center gap-2 container;}p.description{@apply text-gray-400 max-w-2xl mb-6 font-light leading-tight text-sm;}",
  map: null
};
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$5);
  return `<section${add_attribute("id", id, 0)} class="${"svelte-u35i4"}">${slots.link ? slots.link({}) : ``}
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
  code: "div.svelte-1rkrjvl:first-of-type{position:absolute;top:-0px\n}p.svelte-1rkrjvl:last-of-type{max-width:56rem;font-weight:300\n}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    content: () => {
      return `<p slot="${"content"}" class="${"svelte-1rkrjvl"}">Hi there! My name is [Your Name] and I am a software developer with [Number] years of experience
		in the industry. I have a degree in [Degree] from [University], and have worked on a variety of
		projects ranging from [Project Type] to [Project Type]. I am proficient in [Programming
		Language] and have experience with [Other Programming Languages]. In my current role at
		[Company], I work on [Projects] using [Technologies]. In my spare time, I enjoy [Hobbies] and am
		always looking for new ways to improve my skills and stay up-to-date on the latest developments
		in the field. Feel free to contact me if you have any questions or would like to learn more
		about my work.
	</p>`;
    },
    description: () => {
      return `<p class="${"description svelte-1rkrjvl"}" slot="${"description"}">This section can include information about your background, education, and work experience. You
		might also want to include a brief overview of your skills and areas of expertise
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">About Me</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section2"}" class="${"svelte-1rkrjvl"}"></div>`;
    }
  })}`;
});
const Landing_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: `div.svelte-1yrkwyr.svelte-1yrkwyr:first-of-type{position:absolute;top:-2.5rem}h1.svelte-1yrkwyr.svelte-1yrkwyr{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:flex-end;font-weight:100;letter-spacing:-0.05em}h1.svelte-1yrkwyr span.svelte-1yrkwyr:first-child{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem}h1.svelte-1yrkwyr span.svelte-1yrkwyr:last-child{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#134e4a;--tw-gradient-to:rgb(19 78 74 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(15 118 110 / 0);--tw-gradient-stops:var(--tw-gradient-from), #0f766e, var(--tw-gradient-to);--tw-gradient-to:#134e4a;-webkit-background-clip:text;background-clip:text;padding-left:0.5rem;padding-right:0.5rem;font-family:'Comforter Brush', cursive;font-size:3rem;font-weight:900;line-height:1.5;color:transparent}p.svelte-1yrkwyr.svelte-1yrkwyr{max-width:48rem;padding-left:1.5rem;padding-right:1.5rem;font-weight:100;line-height:1.25rem;letter-spacing:-0.05em}ul.svelte-1yrkwyr.svelte-1yrkwyr{margin-top:1.5rem;display:flex;gap:1rem;white-space:nowrap;font-size:0.75rem;line-height:1rem;font-weight:100}ul.svelte-1yrkwyr li.svelte-1yrkwyr{flex:1 1 0%;border-radius:0.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#475569;--tw-shadow:var(--tw-shadow-colored);transition-duration:500ms}ul.svelte-1yrkwyr li.svelte-1yrkwyr:hover{--tw-shadow-color:#ca8a04;--tw-shadow:var(--tw-shadow-colored)}ul.svelte-1yrkwyr li a.svelte-1yrkwyr{perspective:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}@keyframes svelte-1yrkwyr-bounce-spin{0%{transform:translateY(0) rotateY(0deg)}50%{transform:translateY(-20%) rotateY(180deg)}100%{transform:translateY(0) rotateY(360deg)}}li.svelte-1yrkwyr:hover i.fab.svelte-1yrkwyr{animation:svelte-1yrkwyr-bounce-spin 1250ms infinite linear forwards;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#ca8a04;--tw-gradient-to:rgb(202 138 4 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(234 179 8 / 0);--tw-gradient-stops:var(--tw-gradient-from), #eab308, var(--tw-gradient-to);--tw-gradient-to:#ca8a04;-webkit-background-clip:text;background-clip:text;color:transparent}i.fab.svelte-1yrkwyr.svelte-1yrkwyr{font-size:1.875rem;line-height:2.25rem}`,
  map: null
};
const fullName = "Mfundo Shabalala";
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const duration = moment([2020, 6, 20]).toNow(true);
  $$result.css.add(css$3);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    socials: () => {
      return `<ul slot="${"socials"}" class="${"svelte-1yrkwyr"}"><li class="${"svelte-1yrkwyr"}"><a href="${"."}" class="${"svelte-1yrkwyr"}"><i class="${"fab fa-github svelte-1yrkwyr"}"></i><span>Connect on GitHub</span></a></li>
		<li class="${"svelte-1yrkwyr"}"><a href="${"."}" class="${"svelte-1yrkwyr"}"><i class="${"fab fa-linkedin svelte-1yrkwyr"}"></i><span>Connect on LinkedIn</span></a></li>
		<li class="${"svelte-1yrkwyr"}"><a href="${"."}" class="${"svelte-1yrkwyr"}"><i class="${"fab fa-twitter svelte-1yrkwyr"}"></i><span>Connect on Twitter</span></a></li></ul>`;
    },
    content: () => {
      return `<p slot="${"content"}" class="${"svelte-1yrkwyr"}">As a web developer with ${escape(duration)} years of experience, I have built a variety of websites and web
		applications. I am proficient in both frontend and backend development and am dedicated to creating
		intuitive, user-friendly interfaces.
	</p>`;
    },
    description: () => {
      return `<span slot="${"description"}"></span>`;
    },
    title: () => {
      return `<h1 slot="${"title"}" class="${"svelte-1yrkwyr"}"><span class="${"svelte-1yrkwyr"}">Hello! My name is</span>
		<span class="${"svelte-1yrkwyr"}">${escape(fullName)}</span></h1>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section1"}" class="${"svelte-1yrkwyr"}"></div>`;
    }
  })}`;
});
const RepoCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "article.svelte-t6141u{@apply shadow-sm rounded-md p-8 shadow-slate-700 relative max-w-md space-y-2 min-w-[365px];;@apply w-full shadow-sm rounded-md p-8 shadow-orange-600 relative max-w-md space-y-2 min-h-[13rem] bg-slate-900 flex flex-col;}main.svelte-t6141u{@apply flex-1 py-4;}",
  map: null
};
const RepoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<article class="${"svelte-t6141u"}"><header>${slots.name ? slots.name({}) : `
			<h3>No project name</h3>
		`}
		${slots.languages ? slots.languages({}) : `
			<h3>No languages list</h3>
		`}</header>
	<main class="${"svelte-t6141u"}">${slots.description ? slots.description({}) : `
			<p>No project description</p>
		`}</main>
	<footer class="${""}">${slots.repo ? slots.repo({}) : `
			<span>No repo links</span>
		`}</footer>
</article>`;
});
const Portofolio_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1i1qm5h.svelte-1i1qm5h:first-of-type{position:absolute;top:-9rem}section.card-wrapper.svelte-1i1qm5h.svelte-1i1qm5h{margin-left:auto;margin-right:auto;width:100%;justify-content:center;padding-left:1rem;padding-right:1rem}@media(min-width: 640px){section.card-wrapper.svelte-1i1qm5h.svelte-1i1qm5h{max-width:48rem}}@media(min-width: 768px){section.card-wrapper.svelte-1i1qm5h.svelte-1i1qm5h{max-width:80rem}}section.card-wrapper.svelte-1i1qm5h.svelte-1i1qm5h{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(365px, 1fr))}h3.svelte-1i1qm5h.svelte-1i1qm5h{border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));font-size:1.5rem;line-height:2rem;font-weight:600}ul.svelte-1i1qm5h.svelte-1i1qm5h{display:flex;gap:0.25rem}section.svelte-1i1qm5h p.svelte-1i1qm5h{font-size:0.875rem;line-height:1.25rem;font-weight:300}",
  map: null
};
const Portofolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repos = [];
  $$result.css.add(css$1);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    content: () => {
      return `<section slot="${"content"}" class="${"card-wrapper svelte-1i1qm5h"}">${repos.length > 0 ? `${each(repos, (repo) => {
        return `${validate_component(RepoCard, "RepoCard").$$render($$result, {}, {}, {
          repo: () => {
            return `<ul slot="${"repo"}" class="${"svelte-1i1qm5h"}"><li class="${""}"><a target="${"_blank"}" rel="${"noreferrer"}"${add_attribute("href", repo.homepage, 0)}><i class="${"fa fa-globe"}"></i></a></li>
						<li><a target="${"_blank"}" rel="${"noreferrer"}"${add_attribute("href", repo.html_url, 0)}><i class="${"fab fa-github"}"></i></a></li>
					</ul>`;
          },
          description: () => {
            return `<p slot="${"description"}" class="${"svelte-1i1qm5h"}">${escape(repo.description)}</p>`;
          },
          languages: () => {
            return `<ul slot="${"languages"}" class="${"svelte-1i1qm5h"}">${each(repo.languages, (language) => {
              return `<li class="${""}"><i class="${"fab fa-js"}"></i>${escape(language)}</li>`;
            })}
					</ul>`;
          },
          name: () => {
            return `<h3 slot="${"name"}" class="${"svelte-1i1qm5h"}">${escape(repo.name)}</h3>`;
          }
        })}`;
      })}` : `<h2>Failed to load this section</h2>`}</section>`;
    },
    description: () => {
      return `<p class="${"description"}" slot="${"description"}">A portfolio is a great way to showcase your work and demonstrate your skills to potential
		employers. You can include links to projects you have worked on, as well as descriptions of your
		role in each project and the technologies you used.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">Portfolio</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section3"}" class="${"svelte-1i1qm5h"}"></div>`;
    }
  })}`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1odt1px.svelte-1odt1px{@apply container;}section.svelte-1odt1px>p.svelte-1odt1px{@apply text-center text-gray-200 font-thin;}section.svelte-1odt1px>section.svelte-1odt1px{@apply flex justify-center gap-12 flex-wrap;}div.svelte-1odt1px.svelte-1odt1px:first-of-type{@apply absolute -top-6;}h3.svelte-1odt1px.svelte-1odt1px{@apply text-center text-gray-200 font-thin;}ul.svelte-1odt1px.svelte-1odt1px{@apply list-disc list-inside;}li.svelte-1odt1px.svelte-1odt1px{@apply text-gray-400 font-thin;}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    content: () => {
      return `<section slot="${"content"}" class="${"svelte-1odt1px"}"><p class="${"svelte-1odt1px"}">Here are a few technologies I&#39;ve been working with recently:</p>
		<section class="${"svelte-1odt1px"}"><article><h3 class="${"svelte-1odt1px"}">Client-side</h3>
				<ul class="${"svelte-1odt1px"}"><li class="${"svelte-1odt1px"}">JavaScript (ES6+)</li>
					<li class="${"svelte-1odt1px"}">HTML</li>
					<li class="${"svelte-1odt1px"}">CSS</li></ul></article>
			<article><h3 class="${"svelte-1odt1px"}">Server-side</h3>
				<ul class="${"svelte-1odt1px"}"><li class="${"svelte-1odt1px"}">Node</li>
					<li class="${"svelte-1odt1px"}">Express</li>
					<li class="${"svelte-1odt1px"}">PHP</li></ul></article>
			<article><h3 class="${"svelte-1odt1px"}">Databases</h3>
				<ul class="${"svelte-1odt1px"}"><li class="${"svelte-1odt1px"}">MSSQL</li>
					<li class="${"svelte-1odt1px"}">MySQL</li>
					<li class="${"svelte-1odt1px"}">MongoDB</li></ul></article>
			<article><h3 class="${"svelte-1odt1px"}">Tools and Frameworks</h3>
				<ul class="${"svelte-1odt1px"}"><li class="${"svelte-1odt1px"}">Angular</li>
					<li class="${"svelte-1odt1px"}">NextJS</li>
					<li class="${"svelte-1odt1px"}">Svelte</li>
					<li class="${"svelte-1odt1px"}">React</li>
					<li class="${"svelte-1odt1px"}">Git</li>
					<li class="${"svelte-1odt1px"}">GitHub</li>
					<li class="${"svelte-1odt1px"}">VSCode</li></ul></article></section></section>`;
    },
    description: () => {
      return `<p class="${"description"}" slot="${"description"}">This section can include information about your skills and areas of expertise. You might want to
		include a list of your technical skills, as well as soft skills such as communication, teamwork,
		and leadership.
	</p>`;
    },
    title: () => {
      return `<h2 slot="${"title"}">Skills</h2>`;
    },
    link: () => {
      return `<div slot="${"link"}" id="${"section4"}" class="${"svelte-1odt1px"}"></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${""}">
	${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
	
	${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	
	${validate_component(Portofolio, "Portfolio").$$render($$result, {}, {}, {})}
	
	${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
