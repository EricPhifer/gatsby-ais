import React from 'react';
import { graphql, Link } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import family from '../assets/images/MultiGenerationFamily.jpg';
import clarity from '../assets/images/InsClarity.png';

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
  .upper {
    text-transform: uppercase;
  }
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
  .head {
    background-color: var(--black);
    color: var(--white);
    font-size: 2.5rem;
    h1 {
      margin-right: 10rem;
    }
  }
  .serviceContainer {
    width: 100%;
  }
  .img {
    width: 100%;
    height: 36rem;
    background-image: url(${family});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 5px 5px 10px #000;
  }
  .textImg {
    width: 100%;
    height: 9rem;
    background-image: url(${clarity});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 4rem 0;
  }
  .serviceCard {
    margin-top: 3rem;
    .dotContainer {
      width: 10%;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
        margin: 1rem 1.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 3.5rem;
        padding: 0 3rem 1rem 0; 
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      font-size: 3rem;
      margin: 0;
    }
    .phone {
       font-weight: bold;
       font-size: 2rem;
       &:hover {
         color: var(--blue);
       }
     }
    .buttonesque {
      display: flex;
      place-items: center center;
      place-content: center center;
      padding: 1rem;
      color: var(--white);
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
      margin: 2rem 0;
      background-color: var(--blue);
      border-right: 4px double var(--green);
      border-bottom: 2px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 4px double var(--blue);
        border-bottom: 2px double var(--blue);
      }
      .arrowRight {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletServiceStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  .noNineUnder {
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
  .noNineOver {
    @media only screen and (min-width: 901px) {
      display: none;
    }
  }
  .flexSwitch {
    @media only screen and (min-width: 901px) {
      display: inline-flex;
    }
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }
  padding-top: 16rem;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .head {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    h1 {
      font-size: 5rem;
      font-weight: bold;
    }
  }
  .serviceContainer {
    width: 100%;
  }
  .img {
    width: 100%;
    height: 36rem;
    background-image: url(${family});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 5px 5px 10px #000;
  }
  .textImg {
    width: 100%;
    height: 10rem;
    margin: 2rem 0;
    background-image: url(${clarity});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .serviceContainer {
    padding: 3rem 1rem 0;
  }
  .serviceCard {
    width: 100%;
    justify-content: center;
    .dotContainer {
      width: 5%;
      padding: 0.5rem 2rem;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 2.25rem;
        padding: 0 3rem 1rem 0;
        @media only screen and (min-width: 800px) {
          font-size: 3rem;
        }
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      font-size: 3rem;
      margin: 0;
    }
    .phone {
       font-weight: bold;
       font-size: 2rem;
       &:hover {
         color: var(--blue);
       }
     }
    .buttonesque {
      display: flex;
      place-items: center center;
      place-content: center center;
      padding: 1rem;
      color: var(--white);
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
      margin: 2rem 0;
      background-color: var(--blue);
      border-right: 4px double var(--green);
      border-bottom: 2px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 4px double var(--blue);
        border-bottom: 2px double var(--blue);
      }
      .arrowRight {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
  }
  @media only screen and (min-width: 901px) {
    padding-top: 18rem;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
    .textImg {
      height: 7rem;
    }
  }
`;

const MobileServiceStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  padding-top: 14rem;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .head {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    h1 {
      font-size: 3.5rem;
      font-weight: bold;
    }
  }
  .serviceContainer {
    width: 100%;
  }
  .img {
    width: 100%;
    height: 36rem;
    background-image: url(${family});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 5px 5px 10px #000;
  }
  .textImg {
    width: 100%;
    height: 5rem;
    background-image: url(${clarity});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 2rem 0;
  }
  .serviceContainer {
    padding: 3rem 1rem 0;
  }
  .serviceCard {
    width: 100%;
    justify-content: center;
    .dotContainer {
      width: 5%;
      padding: 0.5rem 2rem;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 2.25rem;
        padding: 0 3rem 1rem 0; 
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      font-size: 3rem;
      margin: 0;
    }
    .phone {
       font-weight: bold;
       font-size: 2rem;
       &:hover {
         color: var(--blue);
       }
     }
    .buttonesque {
      display: flex;
      place-items: center center;
      place-content: center center;
      padding: 1rem;
      color: var(--white);
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
      margin: 2rem 0;
      background-color: var(--blue);
      border-right: 4px double var(--green);
      border-bottom: 2px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 4px double var(--blue);
        border-bottom: 2px double var(--blue);
      }
      .arrowRight {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
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
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Employer Benefit Solutions</h2>
                </Link>
                <p>
                  We can find plans where, in many cases, your employees will receive comprehensive benefits with low out-of-pocket expenses and more choices than ever, all while keeping that personal touch we are known for.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Individual and Family Insurance Plans</h2>
                </Link>
                <p>
                Your family is the most important part of your life. We help you find health insurance that covers everyone, puts your mind at ease, and won’t break the bank with coverage that’s tailored to you and your family.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Supplemental Plans</h2>
                </Link>
                <p>
                Whether it be Medicare Plan G, Life Insurance, Disability Coverage, or Long Term Care Plans, we are experts that can give you peace of mind and explain all the options available to you.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Life Insurance Plans</h2>
                </Link>
                <p>
                Protection for your family and allows the family to help maintain its standard of living by providing income after the loss of a loved one.
                </p>
              </div>
            </div>
          </div>
          <div className="right flex">
            <div className="img"/>
            <div className="textImg"/>
            <div className="contact flex">
                <p className="tagline upper">
                  Good Health, That's the plan</p>
                <Link to="/contact" className="buttonesque upper">
                  Contact Us  <HiOutlineArrowNarrowRight className="arrowRight"/>
                </Link>
                <a href="tel:9702415542" className="phone">
                  970.241.5542
                </a>
              </div>
          </div>
        </div>
      </ServiceStyles>
      <TabletServiceStyles>
        <div className="flexSwitch">
          <div className="flex left">
            <div className="head flex">
              <h1>What we cover</h1>
            </div>
            <div className="img noNineOver"/>
            <div className="serviceContainer">
              <div className="serviceCard inline">
                <div className="dotContainer">
                  <div className="dot" />
                </div>
                <div className="serviceInfo flex">
                  <Link to="plans">
                    <h2>Employer Benefit Solutions</h2>
                  </Link>
                  <p>
                    We can find plans where, in many cases, your employees will receive comprehensive benefits with low out-of-pocket expenses and more choices than ever, all while keeping that personal touch we are known for.
                  </p>
                </div>
              </div>
              <div className="serviceCard inline">
                <div className="dotContainer">
                  <div className="dot" />
                </div>
                <div className="serviceInfo flex">
                  <Link to="plans">
                    <h2>Individual and Family Insurance Plans</h2>
                  </Link>
                  <p>
                  Your family is the most important part of your life. We help you find health insurance that covers everyone, puts your mind at ease, and won’t break the bank with coverage that’s tailored to you and your family.
                  </p>
                </div>
              </div>
              <div className="serviceCard inline">
                <div className="dotContainer">
                  <div className="dot" />
                </div>
                <div className="serviceInfo flex">
                  <Link to="plans">
                    <h2>Supplemental Plans</h2>
                  </Link>
                  <p>
                  Whether it be Medicare Plan G, Life Insurance, Disability Coverage, or Long Term Care Plans, we are experts that can give you peace of mind and explain all the options available to you.
                  </p>
                </div>
              </div>
              <div className="serviceCard inline">
                <div className="dotContainer">
                  <div className="dot" />
                </div>
                <div className="serviceInfo flex">
                  <Link to="plans">
                    <h2>Life Insurance Plans</h2>
                  </Link>
                  <p>
                  Protection for your family and allows the family to help maintain its standard of living by providing income after the loss of a loved one.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex">
            <div className="img noNineUnder"/>
            <div className="textImg"/>
              <div className="contact flex">
                <p className="tagline upper">
                  Good Health, <br />That's the plan</p>
                <Link to="/contact" className="buttonesque upper">
                  Contact Us  <HiOutlineArrowNarrowRight className="arrowRight"/>
                </Link>
                <a href="tel:9702415542" className="phone">
                  970.241.5542
                </a>
            </div>
          </div>
        </div>
      </TabletServiceStyles>
      <MobileServiceStyles>
        <div className="flex">
          <div className="head flex">
            <h1>What we cover</h1>
          </div>
          <div className="img"/>
          <div className="serviceContainer">
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Employer Benefit Solutions</h2>
                </Link>
                <p>
                  We can find plans where, in many cases, your employees will receive comprehensive benefits with low out-of-pocket expenses and more choices than ever, all while keeping that personal touch we are known for.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Individual and Family Insurance Plans</h2>
                </Link>
                <p>
                Your family is the most important part of your life. We help you find health insurance that covers everyone, puts your mind at ease, and won’t break the bank with coverage that’s tailored to you and your family.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Supplemental Plans</h2>
                </Link>
                <p>
                Whether it be Medicare Plan G, Life Insurance, Disability Coverage, or Long Term Care Plans, we are experts that can give you peace of mind and explain all the options available to you.
                </p>
              </div>
            </div>
            <div className="serviceCard inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="serviceInfo flex">
                <Link to="plans">
                  <h2>Life Insurance Plans</h2>
                </Link>
                <p>
                Protection for your family and allows the family to help maintain its standard of living by providing income after the loss of a loved one.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="textImg"/>
        <div className="contact flex">
            <p className="tagline upper">
              Good Health, <br />That's the plan</p>
            <Link to="/contact" className="buttonesque upper">
              Contact Us  <HiOutlineArrowNarrowRight className="arrowRight"/>
            </Link>
            <a href="tel:9702415542" className="phone">
              970.241.5542
            </a>
          </div>       
      </MobileServiceStyles>
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
