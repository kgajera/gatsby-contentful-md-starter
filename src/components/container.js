import * as React from 'react';

const Container = ({ as = 'div', children, ...props }) => {
  const Tag = as;
  return (
    <Tag className={`mx-auto max-w-screen-lg pb-8 px-4 lg:px-0`} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
