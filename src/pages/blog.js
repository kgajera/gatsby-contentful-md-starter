import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Heading from '../components/heading';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
            excerpt {
              excerpt
            }
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Recent Posts" />
      <Heading>Recent Posts</Heading>
      {allContentfulBlogPost.edges.map(({ node }) => (
        <div className="my-8" key={node.slug}>
          <h2 className="text-2xl font-bold mb-3">
            <Link className="underline" to={`/blog/${node.slug}`}>
              {node.title}
            </Link>
          </h2>
          <p>{node.excerpt?.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export default BlogPage;
