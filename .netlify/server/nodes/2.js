import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-4f8fa81a.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-4f8fa81a.js","_app/immutable/chunks/index-a7668f53.js"];
export const stylesheets = ["_app/immutable/assets/_page-10a2e0f8.css"];
export const fonts = [];
