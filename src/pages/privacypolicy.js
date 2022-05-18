import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PolicyStyles = styled.div`
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
`;

function countOrder(policies) {
  const counts = policies.map((policy) => policy);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function PrivacyPolicy({ data }) {
  const policies = data.policies.nodes;
  return (
    <>
      <SEO title="Privacy Policy" />
      <PolicyStyles>
        <p className="updateDate">Last updated: May 17, 2022</p>
        {policies.map((policy) => (
          <div key={policy.id}>
            <br />
            <h1>{policy.title}</h1>
            <br />
            {content.map((children) => children.map((text) => text))}
          </div>
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
      content {
        children {
          text
        }
      }
    }
  }
  }
`;
