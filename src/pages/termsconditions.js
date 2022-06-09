import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  padding: 18rem 5rem 0;
  word-wrap: break-word;
  text-align: center;
  .termsContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: justify;
  }
  .updateDate {
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
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

export default function TermsConditions({ data }) {
  const terms = data.terms.nodes;
  return (
    <>
      <SEO title="Terms &amp; Conditions" />
      <TermStyles>
        <p className="updateDate">Last updated: May 17, 2022</p>
        {terms.map((term) => (
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
    </>
  );
}

export const query = graphql`
  query {
    terms: allSanityTermsConditions {
    nodes {
      id
      title
      _rawContent
    }
  }
  }
`;
