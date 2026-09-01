// Resolves a public/ asset path against Vite's configured base path, so
// static <img src> references also work when the app is served from a
// subpath (e.g. GitHub Pages project sites at /emerging-futures/).
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
