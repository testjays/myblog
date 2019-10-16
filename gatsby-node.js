/*
 * Original Code
 * https://github.com/Gregoor/dflate.io/blob/master/gatsby-node.js
 *
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  createPage({
    path: '/',
    component: path.resolve('./src/templates/blog-index.js'),
  });

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    console.log(result.errors);
    throw new Error(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const { slug } = post.node.fields;

    createPage({
      path: slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug,
        previous: i === posts.length - 1 ? null : posts[i + 1].node,
        next: i === 0 ? null : posts[i - 1].node,
      },
    });
  }
};

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  createNodeField({
    node,
    name: 'slug',
    value: path.basename(path.dirname(node.fileAbsolutePath)),
  });
};
