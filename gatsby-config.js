module.exports = {
  siteMetadata: {
    description: "Blake Hartman Resume",
    locale: "en",
    title: "Blake Hartman",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        showThemeLogo: false,
        theme: "dark-pink",
      },
    },
  ],
};
