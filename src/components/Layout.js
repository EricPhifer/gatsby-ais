import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import 'normalize.css'
import Nav from './Nav'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-bottom: 17.5rem;
`
// eslint-disable-next-line
export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav isMenuOpen={isMenuOpen} />
        <main>{children}</main>
        <Footer />
      </SiteStyles>
    </>
  )
}
