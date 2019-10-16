module.exports = {
  siteMetadata: {
    title: `scorpion's dev log`,
    author: '윤서현',
    description: '이것저것 생각날 때마다 기록하기',
    siteUrl: 'https://pedantic-tereshkova-b0a891.netlify.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: { sh: 'bash', js: 'javascript' },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147256838-1',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => {
                const { siteUrl } = site.siteMetadata;
                const { excerpt, fields, frontmatter } = edge.node;
                const { slug } = fields;

                const html = edge.node.html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);
                const url = siteUrl + '/' + slug;
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at seohyun.me. You can read it online by <a href="${url}">clicking here</a>.)</div>
                `;

                return {
                  ...frontmatter,
                  description: excerpt,
                  date: frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [
                    {
                      'content:encoded': html + postText,
                    },
                  ],
                };
              }),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date
                        spoiler
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'seohyun log RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seohyun log`,
        short_name: `seohyun log`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `rgb(202, 180, 244)`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
  ],
};
