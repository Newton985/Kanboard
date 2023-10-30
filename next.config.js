/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Tell webpack to load graphql files through graphql-tag
  // Will enable us to write gql files with code highlighting
  // and webpack not to compress them as text files
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};

module.exports = nextConfig;

//Configurations For PWA
// const withPwa = require("next-pwa");

// module.exports = withPwa({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV == "development"
//   },
// });
