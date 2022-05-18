import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const AboutStyles = styled.div`
    p {
        max-width: 1080px;
        margin: 0 auto;
    }
`;

export default function AboutPage({ data }) {
  const about = data.about.nodes;
  return (
    <>
      <SEO title="Board Members" />
    <AboutStyles>
        <p>About Info Coming...</p>
    </AboutStyles>
    </>
  );
}

export const query = graphql`
  query {
    about: allSanityAboutPage {
        id
    }
  }
`;
