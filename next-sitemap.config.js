/** @type {import('next-sitemap').IConfig} */
const SITE_BASE = "https://" + process.env['NEXT_PUBLIC_HOST']
const config = {
  siteUrl: SITE_BASE,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  exclude: [
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
      { hreflang: "hu", href: generateAlternateRef(path, "hu"), hrefIsAbsolute: true },
      { hreflang: "en", href: generateAlternateRef(path, "en"), hrefIsAbsolute: true },
      { hreflang: "de", href: generateAlternateRef(path, "de"), hrefIsAbsolute: true },
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

function generateAlternateRef(path, locale) {
  // Note: here we assume that language locales are 2 characters
  const pathWithoutLanguagePrefix = path.replace(/^\/\w{2}\//, "/")
  return generateLocalUrl(pathWithoutLanguagePrefix, locale)
}

// TODO: keep in sync with the copy in domain.tsx
function generateLocalUrl(path, locale) {
  const hostname = process.env['NEXT_PUBLIC_HOST'] || process.env['HOST']

  // Note: here we hardcode that "hu" is the default locale
  const isDefaultLocale = locale === "hu"
    
  const localePrefix = isDefaultLocale ? "" : `/${locale}`
  // const languageSpecificPath = isDefaultLocale ? path.substring(1) : path
  
  var result = `https://${hostname}${localePrefix}${path}`

  // Remove / suffix from the path:
  result = result.replace(/\/+$/, "")
  return result
}
