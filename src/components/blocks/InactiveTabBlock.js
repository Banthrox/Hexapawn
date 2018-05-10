// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { PureComponent } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InactiveTabBlock extends PureComponent {
  componentDidMount = () => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        document.title = `😴 ${document.title}`;
      }

      if (document.visibilityState === 'visible') {
        document.title = document.title.substr(2);
      }
    });
  };
  componentWillUnmount = () => {
    document.removeEventListener('visibilitychange');
  };

  render() {
    return null;
  }
}
