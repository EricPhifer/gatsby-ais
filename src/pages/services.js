import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ServiceStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 18rem;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .serviceContainer {
    width: 100%;
    outline: 1px solid black;
  }
  .left {
    width: 50%;
    border: 1px solid red;
  }
  .right {
    width: 50%;
    border: 1px solid blue;
  }
`;

export default function ServicePage({ data }) {
  const services = data.services.nodes;
  return (
    <>
      <SEO title="Insurance Services" />
      <ServiceStyles>
        <div className="serviceContainer inline">
          <div className="left flex">
            <div className="head flex">
              <h1>What we cover</h1>
            </div>
            <div className="serviceCard">
              <h2>Employer Benefit Solutions</h2>
              <p></p>
            </div>
          </div>
          <div className="right flex">

          </div>
        </div>
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
