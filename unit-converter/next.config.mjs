// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_PAGES === 'true'; // we'll set this at deploy time
const repo = 'unit-converter'; // <-- your repo name

export default {
  output: 'export',            // enables `next export`
  images: { unoptimized: true },// if you use next/image
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,          // works better on Pages
};
