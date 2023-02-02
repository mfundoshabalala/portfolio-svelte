import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/ComforterBrush-Regular.ttf","icons/angularjs.svg","icons/bootstrap.svg","icons/css3.svg","icons/docker.svg","icons/eslint.svg","icons/flutter.svg","icons/git.svg","icons/github.svg","icons/html5.svg","icons/javascript.svg","icons/linkedin.svg","icons/mysql.svg","icons/nextjs.svg","icons/nodejs.svg","icons/npm.svg","icons/nuxtjs.svg","icons/php.svg","icons/reactjs.svg","icons/svelte.svg","icons/tailwindcss.svg","icons/typescript.svg","icons/vuejs.svg","images/android-chrome-192x192.png","images/android-chrome-512x512.png","images/apple-touch-icon.png","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/header-pattern.png","images/site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-4afac384.js","imports":["_app/immutable/start-4afac384.js","_app/immutable/chunks/index-ae5b9a32.js","_app/immutable/chunks/singletons-f7b4075b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
