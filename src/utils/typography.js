import Typography from 'typography';
import GitHubTheme from 'typography-theme-github';
import './global.css';

GitHubTheme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
    textDecoration: `none`,
  },
  'a:hover': {
    textDecoration: `none`,
  },

  // These two are for gatsby-remark-autolink-headers:
  'a.anchor': {
    boxShadow: 'none',
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'p code': {
    fontSize: '1rem',
  },

  // TODO: why tho
  'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
    fontSize: 'inherit',
  },
  'li code': {
    fontSize: '1rem',
  },
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: '0.8',
  },
  'blockquote.translation': {
    fontSize: '1em',
  },

  'h1, h2, h3': {
    fontWeight: 800,
    lineHeight: 1.2,
    borderBottom: 'none',
  },

  'h4, h5, h6': {
    fontWeight: 700,
    lineHeight: 1.2,
    borderBottom: 'none',
  },
});

const typography = new Typography(GitHubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
