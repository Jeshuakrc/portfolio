/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./content/locales"
      }
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/layouts/layout.jsx")
      }
    },
    { 
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "content",
        localeJsonNodeName: "locales",
        languages: ["en","es"],
        defaultLanguage: "en",
        fallbackLanguage: "en"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
      }
    }
  ]
};