// gatsby-browser.js
import React from 'react'
import Layout from './src/components/Layout'

// wrap every page in your Layout
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
