import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Assume that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
export default Link;
