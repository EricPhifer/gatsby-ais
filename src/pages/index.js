import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeStyles = styled.div`
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
  @media only screen and (max-width: 350px) {
    padding-top: 4rem;
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
    homepage: allSanityHomepage {
    nodes {
      content {
        ... on SanityHomepageHero {
          id
          image {
            asset {
              id
            }
          }
          title
          text
          subhead
          kicker
          heading
        }
        ... on SanityHomepageLogoList {
          id
          text
          logos {
            image {
              asset {
                id
              }
            }
            id
            alt
          }
        }
      }
      title
      id
      description
    }
  }
  }
`;
