import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import LogoGrid from '../components/LogoGrid'

const Homestyle = styled.div`
  max-width: 108rem;
  margin: 17rem auto 0;
`

export default function HomePage() {
  return (
    <Homestyle>
      <Hero />
      <LogoGrid />
    </Homestyle>
  )
}

export const Head = () => <Seo title="Home" />
