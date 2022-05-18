import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const FaqStyles = styled.div`
    p {
        max-width: 1080px;
        margin: 0 auto;
    }
`;

export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  return (
    <>
      <SEO title="Board Members" />
    <FaqStyles>
        <p>FAQs Coming...</p>
    </FaqStyles>
    </>
  );
}

export const query = graphql`
  query {
    faqs: allSanityFaqPage {
        id
    }
  }
`;
