/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    output: 'standalone',
    webpack: (config) => {
        config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
        return config;
    },
};
