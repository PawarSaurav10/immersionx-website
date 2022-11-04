module.exports = {
  siteMetadata: {
    title: `Immersionx`,
    siteUrl: `https://immersionx.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TS7MQS4",
        includeInDevelopment: false, 
      },
    },
    // {
    //   resolve: `gatsby-plugin-mailgo`,
    //   options: {
    //     mailgoConfig: {
    //       dark: true,
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-background-image-es5',
    //   options: {
    //     // add your own characters to escape, replacing the default ':/'
    //     specialChars: '/:',
    //   },
    // },
  ],
};
