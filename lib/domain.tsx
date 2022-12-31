
// TODO: keep in sync with the copy in next-sitemap.config.js
export function generateLocalUrl(path: string, locale: string) {
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
