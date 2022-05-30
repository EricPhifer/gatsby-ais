import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const PlanStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 18rem;
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

export default function PlanPage({ data }) {
  const faqs = data.faqs.nodes;
  const hero = data.hero.nodes;
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <PlanStyles>
          <p>Service Plans Coming...</p>
      </PlanStyles>
    </>
  );
}

export const query = graphql`
  query {
    faqs: allSanityFaq {
    nodes {
      id
      question
      answer
    }
  }
  hero: allSanityFaqHero {
    nodes {
      heading
      text
      image {
        asset {
          id
        }
      }
    }
  }
  }
`;
