import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div></div>
	<div></div>
	<div></div>
</div>`;
});
const BrandLogo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-17pg4m7.svelte-17pg4m7{@apply text-4xl font-comforter flex gap-1 rotate-1 select-none;}div.svelte-17pg4m7 span.svelte-17pg4m7:last-child{@apply bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent;}",
  map: null
};
const BrandLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `
<div class="${"svelte-17pg4m7"}"><span class="${" svelte-17pg4m7"}">Mfundo</span>
	<span class="${" svelte-17pg4m7"}">Shabalala</span>
</div>`;
});
const Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-o6vvhg{display:none;flex-direction:column;align-items:center;justify-content:center;font-family:'Comforter Brush', cursive;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity))\n}@media(min-width: 768px){nav.svelte-o6vvhg{display:flex\n    }}ul.svelte-o6vvhg{display:flex;gap:1rem\n}a.svelte-o6vvhg{border-radius:0.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#94a3b8;--tw-shadow:var(--tw-shadow-colored)\n}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `
<nav class="${" svelte-o6vvhg"}"><ul class="${"flex gap-4 font-light svelte-o6vvhg"}"><li class="${""}"><a href="${"#section1"}" class="${"svelte-o6vvhg"}">Home</a></li>
		<li class="${""}"><a href="${"#section2"}" class="${"svelte-o6vvhg"}">About Me</a></li>
		<li class="${""}"><a href="${"#section3"}" class="${"svelte-o6vvhg"}">Portfolio</a></li>
		<li class="${""}"><a href="${"#section4"}" class="${"svelte-o6vvhg"}">Skills</a></li></ul>
</nav>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1n9nh9g{@apply flex justify-around top-0 left-0 py-6 fixed w-full bg-slate-900 z-50;}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-1n9nh9g"}">
	${validate_component(BrandLogo, "BrandLogo").$$render($$result, {}, {}, {})}
	
	${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
	
	${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
</header>`;
});
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1kfaovm{@apply bg-slate-900 text-gray-200 font-light;}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const date = new Date();
  const year = date.getFullYear();
  $$result.css.add(css$1);
  return `<footer class="${"py-6 text-center font-light svelte-1kfaovm"}">©2020-${escape(year)} Made using Svelte, TypeScript and Tailwindcss
</footer>`;
});
const Aside_svelte_svelte_type_style_lang = "";
const css = {
  code: 'aside.svelte-bo5o60.svelte-bo5o60{position:fixed;top:60%;left:1.25rem;z-index:50;height:12rem;width:3rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));padding-top:1rem;padding-bottom:1rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#334155;--tw-shadow:var(--tw-shadow-colored)\n}ul.svelte-bo5o60.svelte-bo5o60{display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;font-size:1.25rem;line-height:1.75rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}li.svelte-bo5o60.svelte-bo5o60{border-radius:9999px\n}a.svelte-bo5o60.svelte-bo5o60{position:relative;height:100%;cursor:pointer;font-weight:100;line-height:1.625;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms\n}i.svelte-bo5o60.svelte-bo5o60{display:flex;aspect-ratio:1 / 1;width:2rem;align-items:center;justify-content:center;border-radius:9999px;transition-duration:500ms\n}span.svelte-bo5o60.svelte-bo5o60{position:absolute;top:0px;z-index:-10;height:100%;border-radius:9999px;border-width:1px;border-color:transparent;padding-left:2.5rem;padding-right:2.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.875rem;line-height:1.25rem;opacity:0;transition-duration:500ms\n}a.svelte-bo5o60:hover span.svelte-bo5o60{margin-left:0.5rem;width:7rem;opacity:0.95\n}a.svelte-bo5o60:hover i.svelte-bo5o60{--tw-translate-x:0.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}li.svelte-bo5o60.svelte-bo5o60:nth-of-type(1){--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))\n}li.svelte-bo5o60:nth-of-type(1) a:hover span.svelte-bo5o60{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))\n}li.svelte-bo5o60.svelte-bo5o60:nth-of-type(2){--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))\n}li.svelte-bo5o60:nth-of-type(2) a:hover span.svelte-bo5o60{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))\n}li.svelte-bo5o60.svelte-bo5o60:nth-of-type(3){--tw-bg-opacity:1;background-color:rgb(2 132 199 / var(--tw-bg-opacity))\n}li.svelte-bo5o60:nth-of-type(3) a:hover span.svelte-bo5o60{--tw-bg-opacity:1;background-color:rgb(2 132 199 / var(--tw-bg-opacity))\n}li.svelte-bo5o60.svelte-bo5o60:nth-of-type(4){--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))\n}li.svelte-bo5o60:nth-of-type(4) a:hover span.svelte-bo5o60{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))\n}',
  map: null
};
const Aside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside class="${"svelte-bo5o60"}"><ul class="${"svelte-bo5o60"}"><li class="${"svelte-bo5o60"}"><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://github.com/mfundoshabalala"}" class="${"svelte-bo5o60"}"><i class="${"fab fa-github svelte-bo5o60"}"></i><span class="${"svelte-bo5o60"}">Github</span></a></li>
		<li class="${"svelte-bo5o60"}"><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://linkedin.com/in/mfundoshabalala"}" class="${"svelte-bo5o60"}"><i class="${"fab fa-linkedin-in svelte-bo5o60"}"></i><span class="${"svelte-bo5o60"}">LinkedIn</span></a></li>
		<li class="${"svelte-bo5o60"}"><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://twitter.com/mfundoshabalal"}" class="${"svelte-bo5o60"}"><i class="${"fab fa-twitter svelte-bo5o60"}"></i><span class="${"svelte-bo5o60"}">Twitter</span></a></li>
		<li class="${"svelte-bo5o60"}"><a target="${"_blank"}" href="${"mailto:mfundoshabalala@gmail.com"}" class="${"svelte-bo5o60"}"><i class="${"fa fa-envelope svelte-bo5o60"}"></i><span class="${"svelte-bo5o60"}">Email</span></a></li></ul>
</aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1asvyk8_START --><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"}"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"}"><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"true"}"><link href="${"https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Martian+Mono:wght@100;200;300;400;800&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-1asvyk8_END -->`, ""}


${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${validate_component(Aside, "Aside").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

<div></div>`;
});
export {
  Layout as default
};
