module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['hu', 'en', 'de'],
    defaultLocale: 'hu',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
}
