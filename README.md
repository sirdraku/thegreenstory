# Gatsby - WordPress Cuteanimalplanet

A port of the WordPress cuteanimalplanet theme to Gatsby. 

---

This Gatsby Theme uses **Gatsby V3** and the new `gatsby-source-wordpress@v5`. You can find documentation for that package [here](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/).

Checkout some options of the source plugin: [plugin-options.md](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md)

## Plugin Versions

Last tested with the following plugin versions.

- WPGraphQL: 1.3.5
- WPGatsby: 1.0.8
- gatsby-source-wordpress: 5.3.1
- gatsby-plugin-image: 1.3.1

## WordPress Setup

1. Make sure to install the two required WP plugins [wp-gatsby](https://github.com/gatsbyjs/wp-gatsby) and [wp-graphql](https://github.com/wp-graphql/wp-graphql)
2. Best you install and activate the default WordPress cuteanimalplanet theme
3. Make sure you have Menus with the following slugs: 
   -  `primary` - Thats the top menu
   -  `extended` - That is the menu that opens on the right side as drawer
      -  For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label
4. Rename `.env.example` file to `.env` and edit it with your domain variables.
## env file update
      
## Limitations

-  Comments are not implemented yet.
-  The monthly archive pages are not implemented.
-  Tags are not implemented (only Categories).
-  Surely there is more. Feel free to suggest things as issues. 

## Links

- [gatsby-source-wordpress (v5)](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md)
- [WPGatsby - WordPress Plugin](https://github.com/gatsbyjs/wp-gatsby)
