import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'

const PartnerStyles = styled.div`
  max-width: 108rem;
  margin: 0 auto;
  text-align: center;
`

const HeaderBackdrop = styled.div`
  width: 100%;
  height: 7rem;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
`

const H3 = styled.h3`
  color: var(--white);
`

const Grid = styled.div`
  margin: 0 5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  gap: 5rem;
  img {
    max-width: 20rem;
  }
  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    gap: 2rem;
  }
`

const Logos = styled.div``

export default function LogoGrid() {
  const { logolist } = useStaticQuery(graphql`
    query {
      logolist: allSanityHomepageLogo {
        nodes {
          id
          altTitle
          logoimage {
            ...ImageWithPreview
            asset {
              id
            }
          }
        }
      }
    }
  `)
  const { nodes } = logolist

  return (
    <PartnerStyles>
      <HeaderBackdrop>
        <H3>Our Partners</H3>
      </HeaderBackdrop>
      <Grid>
        {nodes.map(logo => (
          <Logos key={logo.id}>
            <SanityImage
              {...logo.logoimage}
              alt={logo.altTitle}
              style={{
                objectFit: 'contain',
                height: '200px',
                width: '200px',
                auto: 'format',
              }}
            />
          </Logos>
        ))}
      </Grid>
    </PartnerStyles>
  )
}
