import { defaultComponents, PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'

const TermStyles = styled.div`
  padding: 18rem 1rem 10rem;
  word-wrap: break-word;
`

const Updated = styled.p`
  text-align: center;
`

const Section = styled.section``

const H1 = styled.h1`
  text-align: center;
`

const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  p {
    padding: 1rem 0;
  }
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
  a {
    color: var(--blue);
    &:hover {
      color: var(--gray);
    }
  }
`

export default function TermsConditions() {
  const { terms } = useStaticQuery(graphql`
    query {
      terms: allSanityTermsConditions {
        nodes {
          id
          title
          _rawContent
        }
      }
    }
  `)
  const { nodes } = terms
  return (
    <TermStyles>
      <Updated>Last updated: May 17, 2022</Updated>
      {nodes.map(term => (
        <Section key={term.id}>
          <H1>{term.title}</H1>
          <Container>
            <PortableText
              value={term._rawContent}
              components={defaultComponents}
              className="flex"
            />
          </Container>
        </Section>
      ))}
    </TermStyles>
  )
}

export const Head = () => <Seo title="Terms &amp; Conditions" />
