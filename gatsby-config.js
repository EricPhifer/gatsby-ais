require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Active Insurance Solutions',
    siteUrl: 'https://activeinsurancegj.com',
    description: `We strive to preserve your family’s health and lifestyle at a cost you can afford by affiliating with top insurance providers; bringing you inclusive and flexible coverages at their most competitive rates.`,
    author: 'Phifer Web Solutions',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://activeinsurancegj.com',
        sitemap: 'https://activeinsurancegj.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID || '9etebhqo',
        dataset: process.env.SANITY_DATASET || 'production',
        apiVersion: '2024-07-23',
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: process.env.SANITY_PROJECT_ID || '9etebhqo',
        dataset: process.env.SANITY_DATASET || 'production',
      },
    },
  ],
}
