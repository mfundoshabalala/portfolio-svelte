import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/ComforterBrush-Regular.ttf","images/android-chrome-192x192.png","images/android-chrome-512x512.png","images/apple-touch-icon.png","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/header-pattern.png","images/site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-8e948732.js","imports":["_app/immutable/start-8e948732.js","_app/immutable/chunks/index-a7668f53.js","_app/immutable/chunks/singletons-d9a96016.js"],"stylesheets":[],"fonts":[]},
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
