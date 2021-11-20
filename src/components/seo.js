import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const Seo = ({ description = '', image, lang = 'en', title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const defaultTitle = site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={
        defaultTitle && title !== defaultTitle ? `%s | ${defaultTitle}` : null
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: image,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
      ]}
    />
  );
};

export default Seo;
