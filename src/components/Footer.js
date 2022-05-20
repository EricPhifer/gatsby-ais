import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 2.5rem;
  ul {
    margin: 0;
    padding: 8vmin 0;
    text-align: center;
    font-size: 1.4rem;
    list-style-type: none;
    @media only screen and (max-width: 350px) {
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: gray;
    &:hover {
      color: tomato;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul>
        <li>&copy; Active Insurance Solutions {new Date().getFullYear()}</li>
        <li>
          <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
            Designed &amp; Developed by Eric Phifer LLC
          </a>
        </li>
        <li>
          <div />
          <Link to="/privacypolicy">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/termsconditions">
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </FooterStyles>
  );
}
// GraphQL for Header & Footer
// allSanityLayout {
//     nodes {
//       id
//       footer {
//         dev
//         designs
//         copyright
//         title
//       }
//       header {
//         navItems {
//           ... on SanityNavItemGroup {
//             id
//             name
//             navItems {
//               text
//               id
//               icon
//               href
//               description
//             }
//           }
//         }
//         contactnumber
//         id
//         title
//         logo {
//           asset {
//             id
//           }
//         }
//       }
//       title
//     }
//   }