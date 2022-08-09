require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Cheo Roman Portfolio`,
    siteUrl: `https://cheor.github.io/portfolio/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
