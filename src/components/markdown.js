import * as React from 'react';

const Markdown = ({ content }) => {
  return (
    <div
      className="prose mx-auto max-w-screen-lg"
      dangerouslySetInnerHTML={{
        __html: content?.childMarkdownRemark.html,
      }}
    />
  );
};

export default Markdown;
