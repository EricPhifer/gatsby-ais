import React from 'react';
import { graphql, Link } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import texture from '../assets/images/texture.png';
import doc from '../assets/images/doc.jpg';
import opaque from '../assets/images/logo-opaque.png';
import SanityImage from 'gatsby-plugin-sanity-image';

const HeroStyles = styled.div`
  padding-top: 18rem;
  .hero {
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    .upper {
      text-transform: uppercase;
    }
  }
  .upperContent {
    width: 100%;
    height: 50.3rem;
    display: inline-flex;
    .mainImg { 
      width: 80%;
      background-image: url(${doc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .sideTexture {
      width: 20%;
      display: flex;
      place-items: center center;
      place-content: center center;
      background-image: url(${texture});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      p {
        width: 100%;
        font-family: Silom;
        font-size: 3.7rem;
        text-align: center;
        opacity: 0.75;
      }
    }
  }
  .textBox {
    width: 25%;
    height: 22rem;
    position: absolute;
    display: flex;
    flex-flow: column;
    background-color: var(--black);
    bottom: 8rem;
    right: 0;
    padding: 0.5rem 3rem;
    p {
      margin: 0;
      color: var(--white);
      font-size: 2rem;
      line-height: 2;
    }
    .buttonesque {
      width: 10.5rem;
      margin-left: 9rem;
      background-color: var(--blue);
      a {
        display: flex;
        place-items: center center;
        place-content: center center;
        padding: 1rem;
        color: var(--white);
        font-size: 1rem;
        font-weight: bold;
        &:hover {
          color: var(--blue);
        }
      }
      .arrowRight {
        font-size: 1.25rem;
      }
      &:hover {
        background-color: var(--white);
      }
    }
  }
  .lowerContent {
    width: 100%;
    height: 12.7rem;
    display: inline-flex;
    .taglineContainer {
      width: 50%;
      .tagline {
        max-width: 260px;
        margin: 0;
        font-size: 3rem;
      }
    }
    .contactContainer {
      width: 50%;
      position: relative;
      display: flex;
      place-content: center center;
      place-items: center center;
      .lowerLogo {
        width: 75%;
        height: 11rem;
        position: absolute;
        right: 0;
        bottom: 2rem;
        background-image: url(${opaque});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        opacity: 0.2;
      }
      .phone {
        margin-top: 6rem;
        font-weight: bold;
        position: static;
        z-index: 4;
        &:hover {
          color: var(--blue);
        }
      }
    }
  }
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

const PartnerStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  .headerBackdrop {
    width: 100%;
    height: 7rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center; 
    h3 {
      color: var(--white);
    }
  }
  .logoGrid {
    margin: 0 5rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 5rem;
  }
`;

export default function HomePage({ data }) {
  const homepage = data.homepage.nodes;
  const logolist = data.logolist.nodes;
  const heroes = data.heroes.nodes;
  return (
    <>
      <SEO title="Home Page" />
      {heroes.map((hero) => (
          <HeroStyles key={hero.id}>
            <div className="hero">
              <div className="upperContent">
                <div className="mainImg"/>
                <div className="sideTexture">
                  <p className="upper">Insurance Solutions</p>
                </div>
              </div>
              <div className="textBox">
                <p>Taking the worry out <br /> 
                of complex insurance issues<br /> 
                for both <span className="upper">businesses</span><br /> 
                and <span className="upper">individuals</span>
                </p>
                <div className="buttonesque">
                  <Link to="/contact" className="upper">
                    Contact Us  <HiOutlineArrowNarrowRight className="arrowRight"/>
                  </Link>
                </div>
              </div>
              <div className="lowerContent">
                <div className="taglineContainer">
                  <p className="tagline upper">Good Health, That's the Plan </p>
                </div>
                <div className="contactContainer">
                  <div className="lowerLogo"/>
                  <a href="tel:9702415542" className="phone">970.241.5542</a>
                </div>
              </div>
            </div>
          </HeroStyles>
        ))}
        <PartnerStyles>
        {logolist.map((list) => (
          <div className="nodeParser" key={list.id}>
            <div className="headerBackdrop">
              <h3>Our Partners</h3>
            </div>
            <div className="logoGrid">
              {list.logos.map((logo) => (
                <div className="logoContainer" key={logo.id}>
                  <SanityImage 
                  {...logo.image}
                  alt={logo.alt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        </PartnerStyles>
    </>
  );
}
{/* <SanityImage 
{...home.content.SanityHomepageHero.image}
alt="Doctor with Mother and Child"
style={{
  objectFit: 'cover',
  auto: 'format',
}}
/> */}
export const query = graphql`
  query {
    logolist: allSanityHomepageLogoList {
      nodes {
        logos {
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
          alt
          id
        }
        text
        id
      }
    }
    homepage: allSanityHomepage {
      nodes {
        title
        description
        id
      }
    }
    heroes: allSanityHomepageHero {
      nodes {
        image {
          asset {
            altText
            id
          }
          ...ImageWithPreview
        }
        id
        heading
        kicker
        subhead
        text
        title
      }
    }
  }
`;
