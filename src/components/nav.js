import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from './container';
import Link from './link';

const Navigation = () => {
  const [menuHidden, setMenuHidden] = React.useState(true);
  const { contentfulNavigation, site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      contentfulNavigation(slug: { eq: "header-navigation" }) {
        navigationItems {
          __typename
          ... on ContentfulNavigationItem {
            contentful_id
            title
            url
          }
          ... on ContentfulPage {
            contentful_id
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <Container
      as="nav"
      className="flex flex-col md:flex-row md:items-center py-5 mb-5 border-b"
      role="navigation"
      aria-label="Main"
    >
      <div className="flex flex-grow items-center">
        <button
          className="mr-4 md:hidden"
          type="button"
          onClick={() => setMenuHidden(!menuHidden)}
        >
          <svg className="w-6 h-6" viewBox="0 0 100 70">
            <rect width="100%" height="10"></rect>
            <rect y="30" width="100%" height="10"></rect>
            <rect y="60" width="100%" height="10"></rect>
          </svg>
        </button>
        <Link className="flex items-center" to="/">
          <img
            className="max-h-8 inline-block mr-2"
            src="/gatsby-contentful.png"
            alt="Logo"
          />
          {site.siteMetadata.title}
        </Link>
      </div>
      <ul className={`${menuHidden ? 'hidden' : 'mt-6 md:mt-0'} md:block`}>
        {contentfulNavigation.navigationItems.map((item, i) => (
          <li
            key={i}
            className="block md:inline-block my-2 md:my-0 px-0 md:px-3"
          >
            <Link
              className="block text-blue-600"
              to={item.slug ? `/${item.slug}` : item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
