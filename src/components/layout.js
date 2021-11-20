import * as React from 'react';
import Container from './container';
import Navigation from './nav';
import Seo from './seo';

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <Container as="main">{children}</Container>
    </>
  );
};

export default Layout;
