import { defaultComponents, PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const PolicyStyles = styled.div`
  padding: 18rem 1rem 10rem;
  word-wrap: break-word;
  @media only screen and (max-width: 900px) {
    padding-top: 16rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 16rem;
  }
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

export default function PrivacyPolicy() {
  const { policies } = useStaticQuery(graphql`
    query {
      policies: allSanityPrivacyPolicy {
        nodes {
          id
          title
          _rawContent
        }
      }
    }
  `)
  const { nodes } = policies
  return (
    <PolicyStyles>
      <Updated>Last updated: May 17, 2022</Updated>
      {nodes.map(policy => (
        <Section key={policy.id}>
          <H1>{policy.title}</H1>
          <Container>
            <PortableText
              value={policy._rawContent}
              components={defaultComponents}
              className="flex"
            />
          </Container>
        </Section>
      ))}
    </PolicyStyles>
  )
}

export const Head = () => <title>Privacy Policy</title>
