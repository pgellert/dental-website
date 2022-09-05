/** @type {import('next-sitemap').IConfig} */
const SITE_BASE = "https://" + process.env.HOST
const config = {
  siteUrl: SITE_BASE,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: SITE_BASE + "/en",
      hreflang: 'en',
    },
    {
      href: SITE_BASE + "/de",
      hreflang: 'de',
    },
  ],
}

module.exports = config