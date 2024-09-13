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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // Cleanup function to reset the body class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main>{children}</main>
        <Footer />
      </SiteStyles>
    </>
  )
}
