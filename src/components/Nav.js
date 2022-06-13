import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const NavStyles = styled.div`
  .bg-gradient {
    position: static;
    z-index: 1;
    height: 16rem;
    background-image: linear-gradient(to bottom, var(--blue), transparent);
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
      position: static;
      z-index: 4;
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
  .navGradient {
    width: 100%;
    height: 16rem;
    background-image: linear-gradient(to bottom, var(--blue), transparent);
    position: fixed;
    z-index: 1;
  }
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
    bottom: 5px;
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
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  a {
    color: var(--white);
    font-size: 1.5rem;
  }
  .upperNav ul {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 5rem;
    padding: 0;
    list-style-type: none;
    button {
      height: 10rem;
    }
    a {
      margin-bottom: 4rem;
      color: var(--black);
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 0.5px var(--white), 0.5px 0 var(--white), 0 -0.5px var(--white), -0.5px 0 var(--white);
      font-size: 3rem;
      &[aria-current='page'] {
        text-decoration: underline 3px var(--red);
      }
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
  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      }
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
      .lowerNav {
        right: 40px;
      }
    }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      }
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
      .lowerNav {
        right: 40px;
      }
    }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 5vmin;
        }
      } 
      .lowerNav {
        right: 40px;
      }
    }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      } 
      .lowerNav {
        right: 40px;
      }
    }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
      .lowerNav {
        right: 40px;
      }
    } 

  /* ----------- iPhone 11 Pro ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
      .lowerNav {
        right: 40px;
      }
    } 

  /* ----------- iPhone 12/13+ Pro ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
      .lowerNav {
        right: 40px;
      }
    } 
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .navGradient {
    width: 100%;
    height: 16rem;
    background-image: linear-gradient(to bottom, var(--blue), transparent);
    position: fixed;
    z-index: 1;
  }
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
    bottom: 5px;
    right: 5px;
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
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  a {
    color: var(--white);
    font-size: 1.5rem;
  }
  .lifeAltering {
    width: 10rem;
  }
  .upperNav ul {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 10rem;
    padding: 0;
    list-style-type: none;
    button {
      height: 7rem;
    }
    a {
      margin-bottom: 4rem;
      color: var(--black);
      text-decoration: none;
      text-transform: uppercase;
      text-shadow: 0 0.5px var(--white), 0.5px 0 var(--white), 0 -0.5px var(--white), -0.5px 0 var(--white);
      font-size: 3rem;
      &[aria-current='page'] {
        text-decoration: underline 3px var(--red);
      }
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
  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      }
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
    }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      }
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
    }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
     
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 5vmin;
        }
      } 
    }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      } 
    }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .lowerNav {
        bottom: 100px;
        right: 40px;
      } 
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      .upperNav ul {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        a {
          margin: 7vmin;
        }
      }
    } 
`;


export default function Nav() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityLayoutHeader {
        nodes {
          id
          contactnumber
          title
          mainalt
          mainlogo {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)

const nodes = navigation.nodes;
const [checked, setChecked] = React.useState(false || '');

  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <NavStyles>
            <div className="bg-gradient full" />
            <div className="full bg-gray">
              <div className="maxWidth upperNav">
                <a href={`tel:${node.contactnumber}`} className="phone">{node.contactnumber}</a>
                <nav>
                  <ul>
                    <li>
                      <Link to="/plans#employer-benefit-solutions">Employer and Individual Health Plans</Link>
                    </li>
                    <span> | </span>
                    <li>
                      <Link to="/plans#medicare">Medicare</Link>
                    </li>
                    <span> | </span>
                    <li>
                      <Link to="/plans#life-insurance">Life Insurance</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            <div className="lowerNav maxWidth">
              <nav>
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
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
            <div className="navGradient" />
            <div className="navContainer">
              <a href={`tel:${node.contactnumber}`} className="phone">{node.contactnumber}</a>
              <div id="menuToggle">
                <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/" className="mobileLink">
                          <li>
                            <p>Home</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/about" className="mobileLink">
                          <li>
                            <p>About Us</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/services" className="mobileLink">
                          <li>
                            <p>Services</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/faq" className="mobileLink">
                          <li>
                            <p>FAQ</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/contact" className="mobileLink">
                          <li>
                            <p>Contact Us</p>
                          </li>
                        </Link>
                      </button>
                    </ul>
                  </nav>
                  <nav className="lowerNav">
                    <ul className="inline">
                      <li>
                        <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/plans#employer-benefit-solutions">Employer and Individual Health Plans</Link>
                        </button>
                      </li>
                      <span className="navBarCancel"> | </span>
                      <li>
                        <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/plans#medicare">Medicare</Link>
                        </button>
                      </li>
                      <span className="navBarCancel"> | </span>
                      <li>
                        <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/plans#life-insurance">Life Insurance</Link>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <SanityImage 
              {...node.mainlogo}
              alt={node.mainalt}
              style={{
                objectFit: 'contain',
                auto: 'format',
              }}
            />
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
            <div className="navGradient" />
            <div className="navContainer">
              <a href={`tel:${node.contactnumber}`} className="phone">{node.contactnumber}</a>
              <div id="menuToggle">
              <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                    <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/" className="mobileLink">
                          <li>
                            <p>Home</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/about" className="mobileLink">
                          <li>
                            <p>About Us</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/services" className="mobileLink">
                          <li>
                            <p>Services</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/faq" className="mobileLink">
                          <li>
                            <p>FAQ</p>
                          </li>
                        </Link>
                      </button>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                        <Link to="/contact" className="mobileLink">
                          <li>
                            <p>Contact Us</p>
                          </li>
                        </Link>
                      </button>
                    </ul>
                  </nav>
                  <nav className="lowerNav">
                    <ul>
                      <li>
                        <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                          <Link to="/plans#employer-benefit-solutions">Employer and Individual Health Plans</Link>
                        </button>
                      </li>
                      <br />
                      <li className="inline">
                        <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                          <Link to="/plans#medicare">Medicare</Link>
                      </button>
                        <span className="navBarCancel"> | </span>
                      <button 
                        type="button" 
                        onClick={
                          () => {setChecked(old => !old)}
                        }
                      >
                          <Link to="/plans#life-insurance" className="lifeAltering">
                            Life Insurance
                          </Link>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <SanityImage 
              {...node.mainlogo}
              alt={node.mainalt}
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

// Credit to https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ for responsive design template