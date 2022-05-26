import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  height: 18rem;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background-color: var(--gray);
  font-size: 1.25rem;
  .footerContainer {
    max-width: 1080px;
    margin: 0 auto;
    text-align: center;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      span {
        padding: 0 1rem;
      }
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
    }
    .footerNav {
      margin: 3rem 2.5rem;
      font-weight: bold;
      padding: 0 0.5rem;
      li {
        padding-bottom: 1rem;
      }
      a {
        color: var(--blue);
      }
    }
    a:hover {
      color: var(--white);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
`;

export default function Footer() {
    const { layout } = useStaticQuery(graphql`
      query {
        layout: allSanityLayout {
          nodes {
            id
            footer {
              dev
              designs
              copyright
              title
            }
            header {
              navItems {
                ... on SanityNavItemGroup {
                  id
                  name
                  navItems {
                    text
                    id
                    icon
                    href
                    description
                  }
                }
              }
              contactnumber
              id
              title
              logo {
                asset {
                  id
                }
              }
            }
            title
          }
        }
      }
    `)
  
  const nodes = layout.nodes;
  return (
    <FooterStyles>
      {nodes.map((node) => (
      <div className="footerContainer" key={node.id}>
        <ul className="footerNav inline">
          <li><Link to="/">Home</Link></li>
          <span> | </span>
          <li><Link to="/about">About Us</Link></li>
          <span> | </span>
          <li><Link to="/services">Services</Link></li>
          <span> | </span>
          <li><Link to="/faq">FAQ</Link></li>
          <span> | </span>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <ul className="footerCredits column">
          <li>&copy; Active Insurance Solutions {new Date().getFullYear()}</li>
          <li>
            <ul className="inline privTerms">
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <span> | </span>
              <li><Link to="/termsconditions">Terms &amp; Conditions</Link></li>
            </ul>
          </li>
          <li> 
            Designed by {' '}
            <span>
              Suzi Productions 
            </span>
            {' '}
            and
            {' '} 
            <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
              Eric Phifer LLC
            </a>
          </li>
          <li> 
            <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
              Developed by Eric Phifer LLC
            </a>
          </li>
        </ul>
      </div>
      ))}
    </FooterStyles>
  );
}
