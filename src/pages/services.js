import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ServiceStyles = styled.div`
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

export default function ServicePage({ data }) {
  const services = data.services.nodes;
  return (
    <>
      <SEO title="Insurance Services" />
      <ServiceStyles>
          <p>Services Coming...</p>
      </ServiceStyles>
    </>
  );
}

export const query = graphql`
  query {
    services: allSanityServicePage {
    nodes {
      title
      id
      description
      content {
        ... on SanityServiceEmployer {
          id
          title
          description
          plans {
            title
            description
            id
          }
        }
        ... on SanityServiceHero {
          id
          text
          heading
          image {
            asset {
              id
            }
          }
        }
        ... on SanityServiceIndividual {
          id
          description
          title
          plans {
            title
            description
            id
          }
        }
        ... on SanityServiceLife {
          id
          title
          description
          plans {
            title
            description
            id
          }
        }
        ... on SanityServiceMedicare {
          id
          title
          description
          plans {
            id
            title
            description
          }
        }
        ... on SanityServiceSupplemental {
          id
          title
          description
          plans {
            title
            id
            description
          }
        }
      }
    }
  }
  }
`;
