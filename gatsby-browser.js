// gatsby-ssr.js
import React from 'react'
import Layout from './src/components/Layout'

// wrap every page in your Layout
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

// inject a single combined Google‑Fonts stylesheet
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // preconnect for better perf (optional)
    <link
      key="preconnect-googleapis"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    // one link for all four families ↓
    <link
      key="google-fonts-combined"
      rel="stylesheet"
      href={
        'https://fonts.googleapis.com/css2?' +
        'family=Dancing+Script:wght@400;700&' +
        'display=swap'
      }
    />,
  ])
}
