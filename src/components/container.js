import * as React from 'react';

const Container = ({ as = 'div', children, className = '', ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={`mx-auto max-w-screen-lg px-4 lg:px-0 w-full ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
