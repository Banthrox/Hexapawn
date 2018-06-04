// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { PureComponent } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InactiveTabBlock extends PureComponent {
  componentDidMount = () => {
    document.addEventListener('visibilitychange', this.handleInactiveTab);
  };
  componentWillUnmount = () => {
    document.removeEventListener('visibilitychange', this.handleInactiveTab);
  };

  handleInactiveTab = () => {
    if (document.visibilityState === 'hidden') {
      document.title = `😴 ${document.title}`;
    }

    if (document.visibilityState === 'visible') {
      document.title = document.title.substr(2);
    }
  };

  render() {
    return null;
  }
}
