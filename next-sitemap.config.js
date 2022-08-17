/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://" + process.env.HOST,
  generateRobotsTxt: true, // (optional)
}

module.exports = config