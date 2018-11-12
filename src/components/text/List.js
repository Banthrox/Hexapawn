// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Layout, Text } from '~components/primitives';

// ─────────────────────────────────────────────────────────────────────────────
// ul
// ─────────────────────────────────────────────────────────────────────────────

export const Ul = styled(Layout)`
  display: grid;

  list-style: ${({ listStyle = 'none' }) => listStyle};
`;
Ul.defaultProps = { as: 'ul' };

// ─────────────────────────────────────────────────────────────────────────────
// li
// ─────────────────────────────────────────────────────────────────────────────

export const Li = styled(Text)``;
Li.defaultProps = { as: 'li' };
