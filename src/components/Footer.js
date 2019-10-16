import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}></div>
        <a
          href="https://facebook.com/Yoonseohyun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/seohyun0120"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
      </footer>
    );
  }
}

export default Footer;
