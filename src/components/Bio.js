import React from 'react';
import profilePic from '../assets/profile-me.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`윤서현`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          <span role="img" aria-label="black heart">
            🖤
          </span>
          JavaScript, you're my wonderwall
          <br />
          <span role="img" aria-label="books">
            📚
          </span>
          보고 배운 것들 저장소
        </p>
      </div>
    );
  }
}

export default Bio;
