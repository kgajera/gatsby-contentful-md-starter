import * as React from 'react';
import Container from './container';
import Footer from './footer';
import Navigation from './nav';
import Seo from './seo';

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <Seo />
      <Navigation />
      <Container as="main" className="flex-grow">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
