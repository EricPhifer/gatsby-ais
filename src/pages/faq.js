import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const FaqStyles = styled.div`
  padding-top: 18rem;
  p {
    max-width: 1080px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  const hero = data.hero.nodes;
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <FaqStyles>
          <p>FAQs Coming...</p>
      </FaqStyles>
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
