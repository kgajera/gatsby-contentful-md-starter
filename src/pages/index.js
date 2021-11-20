import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Page from '../components/page';

const IndexPage = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query {
      contentfulPage(slug: { eq: "about" }) {
        ...ContentfulPageFragment
      }
    }
  `);
  return <Page contentfulPage={contentfulPage} />;
};

export default IndexPage;
