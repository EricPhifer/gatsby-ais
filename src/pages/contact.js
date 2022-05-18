import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ContactStyles = styled.div`
  p {
    max-width: 1080px;
    margin: 0 auto;
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
