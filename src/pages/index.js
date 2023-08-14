import React from 'react'
import styled from 'styled-components'
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

export const Head = () => <title>Active Insurance - Home</title>
