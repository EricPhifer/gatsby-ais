import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ContactStyles = styled.div`
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

export default function Contact({ data }) {
  const contacts = data.contacts.nodes;

  return (
    <>
      <SEO title="Contact Me" />
        <ContactStyles>
            <p>Contacts Coming...</p>
        </ContactStyles>
    </>
  );
}

export const query = graphql`
  query {
    contacts: allSanityContactPage {
    nodes {
      id
      title
      description
      content {
        ... on SanityContactHero {
          id
          image {
            asset {
              id
            }
          }
        }
        ... on SanityContactInfo {
          id
          address
          phone
          title
        }
        ... on SanitySocialLink {
          id
          service
          username
        }
      }
      image {
        asset {
          id
        }
      }
    }
  }
  }
`;
