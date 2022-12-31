import { generateLocalUrl } from "lib/domain";

/** @type {import('next-sitemap').IConfig} */
const SITE_BASE = "https://" + process.env['NEXT_PUBLIC_HOST']
const config = {
  siteUrl: SITE_BASE,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  exclude: [
    'en/de/*',
    'de/en/*',
    'en/en/*',
    'de/de/*',
    '*404',
  ],
  // Note: alternateRefs don't work for path-based multilanguage sites, because, 
  // for example, if we use this config from below, it will generate incorrect 
  // alternate tags. For example, it will create a reference from /en/dental-services 
  // to /en/de/dental-services as the germal alternate. Therefore, we use the custom
  // transform function instead
  //
  // alternateRefs: [
  //   {
  //     href: SITE_BASE,
  //     hreflang: 'hu',
  //   },
  //   {
  //     href: SITE_BASE + "/en",
  //     hreflang: 'en',
  //   },
  //   {
  //     href: SITE_BASE + "/de",
  //     hreflang: 'de',
  //   },
  // ],
  
  transform: async (config, path) => {
    // Generate alternate refs manually
    alternateRefs = [
      {hreflang: "hu", href: generateLocalUrl(path, "hu")},
      {hreflang: "en", href: generateLocalUrl(path, "en")},
      {hreflang: "de", href: generateLocalUrl(path, "de")},
    ]

    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: alternateRefs,
    }
  },
}

module.exports = config