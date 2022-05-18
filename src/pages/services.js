import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ServiceStyles = styled.div`
    p {
        max-width: 1080px;
        margin: 0 auto;
    }
`;

export default function ServicePage({ data }) {
  const services = data.services.nodes;
  return (
    <>
      <SEO title="Board Members" />
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
