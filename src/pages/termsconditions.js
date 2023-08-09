import { defaultComponents, PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'

const TermStyles = styled.div`
  padding: 18rem 5rem 0;
  word-wrap: break-word;
  .termsContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .updateDate,
  h1 {
    text-align: center;
  }
  @media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
  @media only screen and (max-width: 900px) {
    padding-top: 16rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 16rem;
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
      <p className="updateDate">Last updated: May 17, 2022</p>
      {nodes.map(term => (
        <section key={term.id}>
          <h1>{term.title}</h1>
          <section className="termsContainer">
            <PortableText
              value={term._rawContent}
              components={defaultComponents}
              className="answer flex"
            />
          </section>
        </section>
      ))}
    </TermStyles>
  )
}

export const Head = () => <Seo title="Terms &amp; Conditions" />
