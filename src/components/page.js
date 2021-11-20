import * as React from 'react';
import Heading from './heading';
import Layout from './layout';
import Markdown from './markdown';
import Seo from './seo';

const Page = ({ contentfulPage }) => {
  return (
    <Layout>
      <Seo title={contentfulPage.title} />
      <Heading>{contentfulPage.title}</Heading>
      <Markdown content={contentfulPage.content} />
    </Layout>
  );
};

export default Page;
