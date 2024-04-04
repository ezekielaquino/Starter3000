/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: config => {
    config.resolve.preferRelative = true;

    config.resolve.alias = {
      ...config.resolve.alias,
      paper: 'paper/dist/paper-full.js',
    };

    config.module.rules.push({
      test: /node_modules\/paper\/dist\/node\/extend.js$/,
      use: 'null-loader',
    });

    return config;
  },
};

export default nextConfig;
