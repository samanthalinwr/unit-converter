/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_PAGES === 'true';
const repo = 'unit-converter'; // <-- your repo name

export default {
  output: 'export',              // replaces `next export`
  images: { unoptimized: true }, // required for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true
};