import React from 'react';
import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

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
    .mainimg { 
      height: 62rem;
    }
    .sideTexture {
      display: flex;
      align-items: end;
      position: relative;
      .texture {
        height: 50.4rem
      }
      .solutions {
        height: 7rem;
        position: absolute;
        bottom: 11rem;
        padding: 0 0.4rem;
        z-index: 1;
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
    a {
      display: flex;
      place-items: center center;
      place-content: center center;
      padding: 1rem;
      color: var(--white);
      font-size: 1rem;
      font-weight: bold;
      width: 11.5rem;
      margin-left: 9rem;
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
        font-size: 2rem;
        color: var(--green);
      }
    }
  }
  .lowerContent {
    width: 100%;
    height: 12.7rem;
    display: inline-flex;
    .taglineContainer {
      width: 50%;
      display: flex;
      justify-content: end;
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

  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletHeroStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  padding-top: 16rem;
  .hero {
    position: relative;
    .upper {
      text-transform: uppercase;
    }
  }
  .upperContent {
    width: 100%;
    display: inline-flex;
    .mainimg { 
      @media only screen and (max-width: 1081px) {
        height: 60rem;
      }
      @media only screen and (max-width: 1000px) {
        height: 58rem;
      }
      @media only screen and (max-width: 950px) {
        height: 56rem;
      }
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
      @media only screen and (max-width: 700px) {
        height: 48rem;
      }
      @media only screen and (max-width: 600px) {
        height: 37rem;
      }
    }
    .sideTexture {
      position: relative;
      display: flex;
      align-items: end;
      justify-content: center;
      .texture {
        height: 100%;
      }
      .solutions {
        height: 7rem;
        position: absolute;
        z-index: 1;
        margin-bottom: 11rem;
        @media only screen and (max-width: 1030px) {
          height: 6rem;
        }
        @media only screen and (max-width: 900px) {
          height: 5rem;
        }
      }
      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
    @media only screen and (min-width: 575px) {
      height: 40rem;
    }
    @media only screen and (min-width: 625px) {
      height: 45rem;
    }
    @media only screen and (min-width: 675px) {
      height: 50rem;
    }
    @media only screen and (min-width: 725px) {
      height: 55rem;
    }
    @media only screen and (min-width: 775px) {
      height: 60rem;
    }
    @media only screen and (min-width: 825px) {
      height: 62rem;
    }
  }
  .textBox {
    width: 42%;
    height: 17rem;
    position: absolute;
    display: flex;
    flex-flow: column;
    background-color: var(--black);
    bottom: 6rem;
    right: 0;
    padding: 1rem 2rem;
    p {
      margin: 0;
      color: var(--white);
      font-size: 1.6rem;
      line-height: 2;
    }
    a {
      display: flex;
      align-items: center;
      jusify-content: center;
      padding: 0.7rem;
      color: var(--white);
      font-size: 1rem;
      font-weight: bold;
      width: 9rem;
      margin-left: 7rem;
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
        font-size: 2rem;
        color: var(--green);
      }
    }
  }
  .lowerContent {
    width: 100%;
    height: 6.7rem;
    display: inline-flex;
    .taglineContainer {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tagline {
        max-width: 145px;
        margin-left: 1rem;
        font-size: 1.7rem;
        @media only screen and (min-width: 700px) {
          max-width: 165px;
          font-size: 2rem;
        }
      }
    }
    .contactContainer {
      width: 50%;
      position: relative;
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 3rem 7rem 2rem 0;
      .lowerLogo {
        width: 75%;
        height: 11rem;
        position: absolute;
        right: 0;
        bottom: 2rem;
        opacity: 0.2;
        @media only screen and (max-width: 900px) {
          display: none;
        }
      }
      .phone {
        font-weight: bold;
        font-size: 1.5rem;
        &:hover {
          color: var(--blue);
        }
        @media only screen and (min-width: 700px) {
          font-size: 1.75rem;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .upperContent {
      height: 42rem;
    }
  }
  @media only screen and (min-width: 901px) {
    .upperContent {
      height: 50rem;
      .sideTexture {
        .solutions {
          width: 95%;
          bottom: 5rem;
        }
      }
    }
    .textBox {
      width: 25%;
      bottom: 10rem;
      a {
        position: static;
        z-index: 2;
      }
    }
    .lowerContent {
      height: 16rem;
      .taglineContainer {
        justify-content: end;
        align-items: start;
      }
      .contactContainer {
        justify-content: center;
        .lowerLogo {
          width: 85%;
          bottom: 4rem;
        }
        .phone {
          position: static;
          z-index: 2;
        }
      }
    }
  }
  @media only screen and (min-width: 1000px) {
    .upperContent {
      height: 62rem;
    }
  }
`;

const MobileHeroStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  padding-top: 13rem;
  .hero {
    position: relative;
    .upper {
      text-transform: uppercase;
    }
  }
  .upperContent {
    width: 100%;
    height: 20rem;
    display: inline-flex;
    .mainimg { 
      width: 100%;
    }
    @media only screen and (min-width: 321px) {
      height: 22rem;
    }
    @media only screen and (min-width: 385px) {
      height: 25rem;
    }
    @media only screen and (min-width: 425px) {
      height: 32rem;
    }
    @media only screen and (min-width: 500px) {
      height: 35rem;
    }
  }
  .textBox {
    width: 50%;
    height: 11rem;
    position: absolute;
    display: flex;
    flex-flow: column;
    background-color: var(--black);
    bottom: 6rem;
    right: 0;
    padding: 1rem 2rem;
    p {
      margin: 0;
      color: var(--white);
      font-size: 1rem;
      line-height: 2;
    }
    a {
      display: flex;
      align-items: center;
      jusify-content: center;
      padding: 0.5rem;
      color: var(--white);
      font-size: 0.8rem;
      font-weight: bold;
      width: 7.5rem;
      margin-left: 3rem;
      background-color: var(--blue);
      border-right: 2px double var(--green);
      border-bottom: 1px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 2px double var(--blue);
        border-bottom: 1px double var(--blue);
      }
      .arrowRight {
        font-size: 1.5rem;
        color: var(--green);
      }
    }
  }
  .lowerContent {
    width: 100%;
    height: 6.7rem;
    display: inline-flex;
    padding-top: 5rem;
    .taglineContainer {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tagline {
        max-width: 200px;
        margin: 0;
        align-self: start;
        font-size: 1.3rem;
        margin-left: 0.5rem;
        @media only screen and (min-width: 311px) {
          max-width: 145px;
        }
      }
    }
    .contactContainer {
      width: 50%;
      position: relative;
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 0 5rem 2rem 0;
      }
      .phone {
        font-weight: bold;
        font-size: 1.25rem;
        &:hover {
          color: var(--blue);
        }
      }
    }
  }
`;

const PartnerStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
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
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    gap: 5rem;
    img {
      max-width: 200px;
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletPartnerStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  text-align: center;
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
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 5rem;
    img {
      max-width: 200px;
    }
    @media only screen and (min-width: 800px) and (max-width: 1081px) {
      grid-template-columns: repeat(3, minmax(auto, 1fr));
    }
  }
`;

const MobilePartnerStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  text-align: center;
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
    display: grid;
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    gap: 2rem;
    img {
      max-width: 200px;
    }
  }
`;

export default function HomePage({ data }) {
  const logolist = data.logolist.nodes;
  const heroes = data.heroes.nodes;
  const cta = data.cta.nodes;
  return (
    <>
      <SEO title="Home Page" />
          <HeroStyles>
            {heroes.map((hero) => (
            <div className="hero" key={hero.id}>
              <div className="upperContent">
                <SanityImage
                  {...hero.mainimage}
                  alt={hero.mainalt}
                  className="mainimg"
                  styles={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
                <div className="sideTexture">
                  <SanityImage 
                    {...hero.bgimage}
                    alt={hero.bgalt}
                    className="texture"
                    styles={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                    />
                  <SanityImage 
                    {...hero.textimage}
                    alt={hero.textalt}
                    className="solutions"
                    styles={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                    />
                </div>
              </div>
            {cta.map((call) => (
              <div className="nodeParser"key={call.id}>
                <div className="textBox">
                  <p>Taking the worry out <br /> 
                  of complex insurance issues<br /> 
                  for both <span className="upper">businesses</span><br /> 
                  and <span className="upper">individuals</span>
                  </p>
                  <div className="buttonesque">
                    <Link to="/contact" className="upper">
                      {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
                    </Link>
                  </div>
                </div>
                <div className="lowerContent">
                  <div className="taglineContainer">
                    <p className="tagline upper">{call.tagline} </p>
                  </div>
                  <div className="contactContainer">
                    <SanityImage 
                      {...hero.secondlogo}
                      alt={hero.secondalt}
                      className="lowerLogo"
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                    />
                    <a href={`tel:${call.phone}`} className="phone">{call.phone}</a>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ))}
          </HeroStyles>
          <TabletHeroStyles>
          {heroes.map((hero) => (
            <div className="hero" key={hero.id}>
              <div className="upperContent">
                <SanityImage
                  {...hero.mainimage}
                  alt={hero.mainalt}
                  className="mainimg"
                  styles={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
                <div className="sideTexture">
                  <SanityImage 
                    {...hero.bgimage}
                    alt={hero.bgalt}
                    className="texture"
                    styles={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                  <SanityImage 
                    {...hero.textimage}
                    alt={hero.textalt}
                    className="solutions"
                    styles={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                </div>
              </div>
              {cta.map((call) => (
                <div className="nodeParser">
                  <div className="textBox">
                    <p>Taking the worry out <br /> 
                    of complex insurance issues<br /> 
                    for both <span className="upper">businesses</span><br /> 
                    and <span className="upper">individuals</span>
                    </p>
                    <Link to="/contact" className="upper">
                      {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
                    </Link>
                  </div>
                  <div className="lowerContent">
                    <div className="taglineContainer">
                      <p className="tagline upper">{call.tagline} </p>
                    </div>
                    <div className="contactContainer">
                      <SanityImage 
                        {...hero.secondlogo}
                        alt={hero.secondalt}
                        className="lowerLogo"
                        style={{
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                      />
                      <a 
                      href={`tel:${call.phone}`} 
                      className="phone"
                      >
                        {call.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </TabletHeroStyles>
        <MobileHeroStyles>
          {heroes.map((hero) => (
            <div className="hero" key={hero.id}>
              <div className="upperContent">
                <SanityImage
                  {...hero.mainimage}
                  alt={hero.mainalt}
                  className="mainimg"
                  styles={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              {cta.map((call) => (
                <div key={call.id}>
                  <div className="textBox">
                    <p>Taking the worry out <br /> 
                    of complex insurance issues<br /> 
                    for both <span className="upper">businesses</span><br /> 
                    and <span className="upper">individuals</span>
                    </p>
                    <Link to="/contact" className="upper">
                      {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
                    </Link>
                  </div>
                  <div className="lowerContent">
                    <div className="taglineContainer">
                      <p className="tagline upper">
                        {call.tagline} 
                      </p>
                    </div>
                    <div className="contactContainer">
                      <a href={`tel:${call.phone}`} className="phone">{call.phone}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </MobileHeroStyles>
        <PartnerStyles>
          <div className="headerBackdrop">
            <h3>Our Partners</h3>
          </div>
          <div className="logoGrid">
            {logolist.map((logo) => (
              <div className="logoContainer" key={logo.id}>
                <SanityImage 
                {...logo.logoimage}
                alt={logo.altTitle}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
                />
              </div>
            ))}
          </div>
        </PartnerStyles>
        <TabletPartnerStyles>
          <div className="headerBackdrop">
            <h3>Our Partners</h3>
          </div>
          <div className="logoGrid">
            {logolist.map((logo) => (
              <div className="logoContainer" key={logo.id}>
                <SanityImage 
                {...logo.logoimage}
                alt={logo.altTitle}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
                />
              </div>
            ))}
          </div>
        </TabletPartnerStyles>
        <MobilePartnerStyles>
          <div className="headerBackdrop">
            <h3>Our Partners</h3>
          </div>
          <div className="logoGrid">
            {logolist.map((logo) => (
              <div className="logoContainer" key={logo.id}>
                <SanityImage 
                {...logo.logoimage}
                alt={logo.altTitle}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
                />
              </div>
            ))}
          </div>
        </MobilePartnerStyles>
    </>
  );
}
export const query = graphql`
  query {
    heroes: allSanityHomepageHero {
      nodes {
        mainalt
        bgalt
        secondalt
        textalt
        bgimage {
          ...ImageWithPreview
          asset {
            id
          }
        }
        mainimage {
          ...ImageWithPreview
          asset {
            id
          }
        }
        secondlogo {
          ...ImageWithPreview
          asset {
            id
          }
        }
        textimage {
          ...ImageWithPreview
          asset {
            id
          }
        }
        title
        id
      }
    }
    logolist: allSanityHomepageLogo {
      nodes {
        id
        altTitle
        logoimage {
          ...ImageWithPreview
          asset {
            id
          }
        }
      }
    }
    cta: allSanityContactInfo {
      nodes {
        title
        tagline
        phone
        id
        cta
        address
      }
    }
  }
`;
