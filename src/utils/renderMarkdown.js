// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import RehypeReact from 'rehype-react';
import { node } from 'prop-types';
import { Link } from '../components/navigation';

const BlogLink = ({ children, ...rest }) => (
  <Link {...rest} type="primary">
    {children}
  </Link>
);

BlogLink.propTypes = {
  children: node.isRequired,
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default new RehypeReact({
  createElement: React.createElement,
  components:    {
    a: BlogLink,
    // blockquote: BlockQuoteContainer, // TODO add tweetable quotes
  },
}).Compiler;