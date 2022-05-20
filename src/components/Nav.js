import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const NavStyles = styled.div`
  .bg-gradient {
    position: static;
    z-index: 1;
    height: 12rem;
    background-image: linear-gradient(to bottom, var(--blue), #fff);
  }
  .bg-gray {
    position: static;
    z-index: 5;
    height: 6rem;
    background: var(--gray);
    box-shadow: 0 10px 10px #000;
  }
  .full {
    width: 100vw;
    position: fixed;
  }
  .maxWidth {
    max-width: 1080px;
    margin: 0 auto;
  }
  a {
    cursor: pointer;
  }
  .upperNav {
    display: flex;
    place-items: center center;
    position: static;
    z-index: 6;
    .phone {
      width: 50%;
      font-weight: bold;
      text-align: center;
      margin-right: 8rem;
    }
    a:hover {
      color: var(--blue);
    }
    nav {
      width: 50%;
      text-align: right;
      span {
        color: var(--white);
      }
      ul {
        display: inline-flex;
        flex-flow: row nowrap;
      }
      ul li {
        padding: 0 0.5rem;
      }
      ul li a {
        font-size: 1rem;
        color: var(--white);
        font-weight: bold;
      }
    }
  }
  .lowerNav {
    position: relative;
    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        margin-top: -4.5rem;
        height: auto;
        width: auto;
        background: transparent;
      }
      ul {
        position: static;
        z-index: 4;
        display: inline-flex;
        margin-top: 13px;
      }
    }
    a {
      height: 8.169rem;
      width: 8.231rem;
      margin: 0 5px;
      background-color: var(--black);
      color: var(--white);
      text-transform: uppercase;
      box-shadow: inset 0 8px 5px #000;
      &[aria-current='page'] {
        background-color: var(--white);
        color: var(--black);
        border-bottom: 1px solid var(--red);
        
      }
      &:last-child {
        background-color: var(--blue);
      }
      &:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }
    a li {
      display: flex;
      align-items: end;
      justify-content: center;
      margin-top: 5rem;
    }
    a li span {
      font-size: 1rem;
      font-weight: bold;
      padding: 1rem 0;
    }
  }
  nav ul {
    list-style-type: none;
  }

  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const TabletNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  height: 15rem;
  background-image: linear-gradient(to bottom, var(--blue), #fff);
  img {
    width: 36rem;
    margin-top: 3rem;
  }
  .navContainer {
    width: 100vw;
    height: 7rem;
    background: var(--gray);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;
  }
  .phone {
    position: absolute;
    top: 25px;
    left: 15rem;
    font-weight: bold;
    z-index: 2;
  }
  .navBarCancel {
    width: 0 !important;
    height: 0 !important;
    background: transparent;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: var(--white);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-image: linear-gradient(to bottom, var(--blue), #fff);
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    transition-delay: 2s;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  a {
    color: var(--white);
    font-size: 1.5rem;
  }
  a[aria-current='page'] {
    text-decoration: underline 3px var(--red);
  }
  .upperNav ul {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 10rem;
    padding: 0;
    list-style-type: none;
    a {
      margin-bottom: 4rem;
      color: var(--black);
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 0.5px var(--white), 0.5px 0 var(--white), 0 -0.5px var(--white), -0.5px 0 var(--white);
      font-size: 3rem;
    }
    a:hover {
      opacity: 0.5;
    }
  }
  .lowerNav {
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    bottom: 15px;
    right: 8px;
    font-size: 1.5rem;
    text-align: right;
    ul {
      padding: 0;
      list-style-type: none;
    }
    ul li a {
      font-size: 1.5rem;
      color: var(--blue);
    }
  }
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  height: 13rem;
  background-image: linear-gradient(to bottom, var(--blue), #fff);
  img {
    width: 25rem;
    margin-top: 4rem;
  }
  .navContainer {
    width: 100vw;
    height: 7rem;
    background: var(--gray);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;
  }
  .phone {
    position: absolute;
    top: 25px;
    left: 7rem;
    font-weight: bold;
    z-index: 2;
  }
  .navBarCancel {
    width: 0 !important;
    height: 0 !important;
    background: transparent;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: var(--white);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-image: linear-gradient(to bottom, var(--blue), #fff);
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    transition-delay: 2s;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  a {
    color: var(--white);
    font-size: 1.5rem;
  }
  a[aria-current='page'] {
    text-decoration: underline 3px var(--red);
  }
  .upperNav ul {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 10rem;
    padding: 0;
    list-style-type: none;
    a {
      margin-bottom: 4rem;
      color: var(--black);
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 0.5px var(--white), 0.5px 0 var(--white), 0 -0.5px var(--white), -0.5px 0 var(--white);
      font-size: 3rem;
    }
    a:hover {
      opacity: 0.5;
    }
  }
  .lowerNav {
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    bottom: 15px;
    right: 8px;
    font-size: 1.5rem;
    text-align: right;
    ul {
      padding: 0;
      list-style-type: none;
    }
    ul li a {
      font-size: 1.5rem;
      color: var(--blue);
    }
  }
  @media only screen and (max-width: 300px) {
    .phone {
      left: 3.5rem;
    }
    img {
      width: 20rem;
    }
  }
`;

export default function Nav() {
  const { layout } = useStaticQuery(graphql`
    query {
      layout: allSanityLayout {
        nodes {
          id
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
              ...ImageWithPreview
            }
          }
          title
        }
      }
    }
  `)

  const nodes = layout.nodes;
  console.log(nodes, layout)

  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <NavStyles>
            <div className="bg-gradient full" />
            <div className="full bg-gray">
              <div className="maxWidth upperNav">
                <a href={`tel:${node.header.contactnumber}`} className="phone">{node.header.contactnumber}</a>
                <nav>
                  <ul>
                    <li>
                      <Link to="/services#individual">Employer and Individual Health Plans</Link>
                    </li>
                    <span> | </span>
                    <li>
                      <Link to="/services#medicare">Medicare</Link>
                    </li>
                    <span> | </span>
                    <li>
                      <Link to="/services#life">Life Insurance</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            <div className="lowerNav maxWidth">
              <nav>
                <SanityImage 
                  {...node.header.logo}
                  alt="Active Insurance Logo"
                  style={{
                    width: '40%',
                    objectFit: 'contain',
                    auto: 'format',
                  }}
                />
                <ul>
                  <Link to="/">
                    <li>
                      <span>Home</span>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li>
                      <span>About Us</span>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <span>Services</span>
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li>
                      <span>FAQ</span>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li>
                      <span>Contact Us</span>
                    </li>
                  </Link>
                </ul>
           
              </nav>
            </div>
            </div>
          </NavStyles>
          <TabletNavStyles>
            <div className="navContainer">
              <a href={`tel:${node.header.contactnumber}`} className="phone">{node.header.contactnumber}</a>
              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                      <Link to="/" className="mobileLink">
                        <li>
                          <div>Home</div>
                        </li>
                      </Link>
                      <Link to="/about" className="mobileLink">
                        <li>
                          <div>About Us</div>
                        </li>
                      </Link>
                      <Link to="/services" className="mobileLink">
                        <li>
                          <div>Services</div>
                        </li>
                      </Link>
                      <Link to="/faq" className="mobileLink">
                        <li>
                          <div>FAQ</div>
                        </li>
                      </Link>
                      <Link to="/contact" className="mobileLink">
                        <li>
                          <div>Contact Us</div>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                  <nav className="lowerNav">
                    <ul className="inline">
                      <li>
                        <Link to="/services#individual">Employer and Individual Health Plans</Link>
                      </li>
                      <span className="navBarCancel"> | </span>
                      <li>
                        <Link to="/services#medicare">Medicare</Link>
                      </li>
                      <span className="navBarCancel"> | </span>
                      <li>
                        <Link to="/services#life">Life Insurance</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <SanityImage 
              {...node.header.logo}
              alt="Active Insurance Logo"
              style={{
                objectFit: 'contain',
                auto: 'format',
              }}
            />
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
            <div className="navContainer">
              <a href={`tel:${node.header.contactnumber}`} className="phone">{node.header.contactnumber}</a>
              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                      <Link to="/" className="mobileLink">
                        <li>
                          <div>Home</div>
                        </li>
                      </Link>
                      <Link to="/about" className="mobileLink">
                        <li>
                          <div>About Us</div>
                        </li>
                      </Link>
                      <Link to="/services" className="mobileLink">
                        <li>
                          <div>Services</div>
                        </li>
                      </Link>
                      <Link to="/faq" className="mobileLink">
                        <li>
                          <div>FAQ</div>
                        </li>
                      </Link>
                      <Link to="/contact" className="mobileLink">
                        <li>
                          <div>Contact Us</div>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                  <nav className="lowerNav">
                    <ul>
                      <li>
                        <Link to="/services#individual">Employer and Individual Health Plans</Link>
                      </li>
                      <br />
                      <li className="inline">
                        <Link to="/services#medicare">Medicare</Link>
                        <span className="navBarCancel"> | </span>
                        <Link to="/services#life">Life Insurance</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <SanityImage 
              {...node.header.logo}
              alt="Active Insurance Logo"
              style={{
                objectFit: 'contain',
                auto: 'format',
              }}
            />
            </div>
          </MobileNavStyles>
        </div>
      ))}
    </>
  );
}