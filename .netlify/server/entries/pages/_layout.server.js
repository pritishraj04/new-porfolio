const prerender = true;
async function load({ locals, url: { pathname } }) {
  return {
    theme: locals.theme,
    pathname
  };
}
export {
  load,
  prerender
};
