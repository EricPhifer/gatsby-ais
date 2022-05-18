import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  word-wrap: break-word;
  padding-left: 5rem;
  padding-right: 5rem;
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
`;

export default function TermsConditions({ data }) {
  const terms = data.terms.nodes;
  return (
    <>
      <SEO title="Terms &amp; Conditions" />
      <TermStyles>
        <h1>Terms and Conditions</h1>
        <p className="updateDate">Last updated: May 23, 2022</p>
        {terms.map((term) => (
          <div key={term.id}>
            <br />
            <h1>{term.title}</h1>
            <br />
            {term.content.children.map((text) => text)}
          </div>
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
      content {
        children {
          text
        }
      }
    }
  }
  }
`;
