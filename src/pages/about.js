import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const AboutStyles = styled.div`
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

export default function AboutPage({ data }) {
  const about = data.about.nodes;
  const staff = data.staff.nodes;
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
    nodes {
      id
      content {
        ... on SanityAboutHero {
          id
          heading
          text
          image {
            asset {
              id
            }
          }
        }
        ... on SanityAboutMission {
          id
          mission
          title
        }
        ... on SanityAboutWhat {
          id
          name {
            list
            children {
              text
              marks
            }
            style
          }
        }
      }
      title
      description
      image {
        asset {
          id
        }
      }
    }
  }
  staff: allSanityAboutProfile {
    nodes {
      bio
      id
      image {
        asset {
          id
        }
      }
      jobTitle
      name
    }
  }
}
`;
