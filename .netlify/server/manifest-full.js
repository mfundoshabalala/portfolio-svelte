export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/ComforterBrush-Regular.ttf","images/android-chrome-192x192.png","images/android-chrome-512x512.png","images/apple-touch-icon.png","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-406e2f9c.js","imports":["_app/immutable/start-406e2f9c.js","_app/immutable/chunks/index-10456979.js","_app/immutable/chunks/singletons-81da1a0b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
