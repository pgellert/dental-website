/** @type {import('next-sitemap').IConfig} */
const SITE_BASE = "https://" + process.env['NEXT_PUBLIC_HOST']
const config = {
  siteUrl: SITE_BASE,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: SITE_BASE,
      hreflang: 'hu',
    },
    {
      href: SITE_BASE + "/en",
      hreflang: 'en',
    },
    {
      href: SITE_BASE + "/de",
      hreflang: 'de',
    },
  ],
  exclude: [
    'en/de/*',
    'de/en/*',
    'en/en/*',
    'de/de/*',
    '*404',
  ],
}

module.exports = config