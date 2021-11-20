const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
        allContentfulPage {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Contentful posts',
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlogPost.nodes;
  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: `/blog/${post.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: post.slug,
        },
      });
    });
  }

  const pages = result.data.allContentfulPage.nodes;
  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: `/${page.slug}`,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: page.slug,
        },
      });
    });
  }
};
