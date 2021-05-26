module.exports = {
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Prank Call Call Center',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Prank Call Call Center',
        short_name: 'pccc',
        start_url: '/',
        background_color: '#253640',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
