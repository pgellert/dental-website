module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["hu", "en", "de"],
    defaultLocale: "hu",
    localeDetection: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    })
    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dental-services/cosmetic-dentistry/dental-implants-gyor",
        destination: "/fogimplantatum-gyor",
        permanent: true,
      },
    ]
  },
}
