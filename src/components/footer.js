import * as React from 'react';
import Container from './container';
const Footer = () => {
  return (
    <Container as="footer" className="border-t py-5 mt-10 text-sm text-center">
      Made with{' '}
      <a
        className="font-medium underline"
        href="https://github.com/kgajera/gatsby-contentful-md-starter"
        target="_blank"
      >
        Gatsby Contentful Starter
      </a>
    </Container>
  );
};

export default Footer;
