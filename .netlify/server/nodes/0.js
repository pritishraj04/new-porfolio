import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.ec1c2180.js';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/entry/_layout.svelte.ec1c2180.js","_app/immutable/chunks/index.8da94ae9.js","_app/immutable/chunks/iconify-icon.c04ba510.js","_app/immutable/chunks/stores.faf41573.js","_app/immutable/chunks/index.51f53383.js"];
export const stylesheets = ["_app/immutable/assets/_layout.830b538a.css"];
export const fonts = [];
