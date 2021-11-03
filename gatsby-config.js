module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marbl`,
        short_name: `Marbl`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `src/img/favicon.svg`
      },
    },
  ],
}