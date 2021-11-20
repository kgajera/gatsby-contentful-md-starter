<p align="center">
  <img alt="Gatsby" src="static/gatsby-contentful.png" width="160" />
</p>
<h1 align="center">
  Gatsby Contentful Starter
</h1>

A Gatsby starter using [Contentful](https://www.contentful.com) (CMS) and [Tailwind](https://tailwindcss.com/) (CSS framework). In particular, this starter renders markdown content from Contentful and uses [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) for styling.

## Getting Started

1. Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the gatsby-contentful-md-starter.

   ```shell
   # create a new Gatsby site using the gatsby-contentful-md-starter
   gatsby new my-contentful-starter https://github.com/kgajera/gatsby-contentful-md-starter
   ```

1. Navigate into your new site’s directory:

   ```shell
   cd my-contentful-starter/
   ```

1. Create a new [environment file](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/), `.env.development`, with the following contents:

   ```
   CONTENTFUL_SPACE_ID=
   CONTENTFUL_ACCESS_TOKEN=
   CONTENTFUL_MANAGEMENT_TOKEN=
   ```

1. Run `npm run contentful-import` to import content types

1. Run `npm run develop` to start the development server. Your site is now running at `http://localhost:8000`!

## Deploy

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/kgajera/gatsby-contentful-md-starter)
