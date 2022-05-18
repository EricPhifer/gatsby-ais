import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeStyles = styled.div`
  p {
    max-width: 1080px;
    margin: 0 auto;
  }
`;

export default function HomePage({ data }) {
  const homepage = data.homepage.nodes;
  return (
    <>
      <SEO title="Home Page" />
      {homepage.map((home) => (
        <HomeStyles key={homepage.id}>
         <p>Content Coming...</p>
        </HomeStyles>
      ))}
    </>
  );
}

export const query = graphql`
  query {
    homepage: allSanityHomePage {
      id
    }
  }
`;
