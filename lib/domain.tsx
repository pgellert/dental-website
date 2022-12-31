
export function generateLocalUrl(path: string, loc: string) {
    // Note: here we hardcode that "hu" is the default locale
    const isDefaultPath = loc === "hu"
    const hostname = process.env['NEXT_PUBLIC_HOST'] || process.env['HOST'];
    
    const prefix = isDefaultPath ? "" : loc;
    const languageSpecificPath = isDefaultPath ? path.substring(1) : path;
    var result = `https://${hostname}/${prefix}${languageSpecificPath}`

    // Remove / suffix from the path:
    result = result.replace(/\/+$/, "")
    return result
}
  