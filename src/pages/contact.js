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
  const contact = data.contact.nodes;

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
    contact: allSanityContactPage {
        id
    }
  }
`;
