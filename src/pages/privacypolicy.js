import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PolicyStyles = styled.div`
  padding: 18rem 5rem 0;
  word-wrap: break-word;
  h1 {
    text-align: center;
  }
  .policyContainer {
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
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

export default function PrivacyPolicy({ data }) {
  const policies = data.policies.nodes;
  return (
    <>
      <SEO title="Privacy Policy" />
      <PolicyStyles>
        <p className="updateDate">Last updated: May 17, 2022</p>
        {policies.map((policy) => (
          <section key={policy.id}>
            <h1>{policy.title}</h1>
            <section className="policyContainer">
              <PortableText 
                value={policy._rawContent}
                components={defaultComponents}
                className="answer flex"
              />
            </section>
          </section>
        ))}
      </PolicyStyles>
    </>
  );
}

export const query = graphql`
  query {
    policies: allSanityPrivacyPolicy {
      nodes {
        id
        title
        _rawContent
      }
    }
  }
`;
