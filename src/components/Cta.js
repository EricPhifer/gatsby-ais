import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const NodeParser = styled.div`
  font-family: inherit;
`

const TextBox = styled.div`
  width: 25%;
  height: 22rem;
  position: absolute;
  display: flex;
  flex-flow: column;
  background-color: var(--black);
  bottom: 8rem;
  right: 0;
  padding: 0.5rem 3rem;
  z-index: 150;
  p {
    margin: 0;
    color: var(--white);
    font-size: 2rem;
    line-height: 2;
  }
  @media only screen and (max-width: 1080px) {
    width: 42%;
    height: 17rem;
    padding: 1rem 2rem;
    p {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
    height: 14rem;
    p {
      font-size: 1.35rem;
    }
  }
  @media only screen and (max-width: 355px) {
    width: 55%;
  }
  @media only screen and (max-width: 323px) {
    width: 65%;
  }
`

const Button = styled.div`
  position: relative;
  z-index: 160;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media only screen and (max-width: 1080px) {
    a {
      padding: 0.7rem;
      width: 11rem;
      margin-left: 7rem;
    }
  }
  @media only screen and (max-width: 500px) {
    a {
      width: 8.5rem;
      margin: 1rem 10rem;
    }
    .arrowRight {
      font-size: 1.5rem;
    }
  }
`

const LowerContent = styled.div`
  width: 100%;
  height: 20rem;
  display: inline-flex;
  position: relative;
  z-index: 125;
  @media only screen and (max-width: 1080px) {
    height: 6.7rem;
  }
  @media only screen and (max-width: 900px) {
    width: 25%;
    height: 16rem;
    padding-top: 3rem;
    bottom: 10rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`

const TaglinContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  .tagline {
    max-width: 26rem;
    margin: 0;
    font-size: 3rem;
  }
  @media only screen and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    .tagline {
      max-width: 20rem;
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
`

const Uppercase = styled.span`
  text-transform: uppercase;
`

const TabletHeroStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
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
  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    .upperContent {
      .mainimg {
        height: 128vmin;
      }
    }
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    .upperContent {
      .mainimg {
        height: 100%;
      }
    }
  }

  /* ----------- iPhone 11 Pro ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    .upperContent {
      .mainimg {
        height: 164vmin;
      }
    }
  }

  /* ----------- iPhone 12/13+ Pro ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  }
  /* ----------- iPhone 12/13+ Pro Max ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 428px) and (max-device-width: 926px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* Portrait */
  @media only screen and (min-device-width: 428px) and (max-device-width: 926px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  }

  /* Landscape */
  @media only screen and (min-device-width: 428px) and (max-device-width: 926px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    .upperContent {
      .mainimg {
        height: 120vmin;
      }
      .texture {
        height: 100% !important;
      }
      .solutions {
        height: 15vmin !important;
      }
    }
  }
`

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
  .textBox {
    width: 50%;
    height: 14rem;
    position: absolute;
    display: flex;
    flex-flow: column;
    background-color: var(--black);
    bottom: 6rem;
    right: 0;
    padding: 1rem 2rem;
    @media only screen and (max-width: 355px) {
      width: 55%;
      height: 14rem;
    }
    @media only screen and (max-width: 323px) {
      width: 65%;
    }
    p {
      margin: 0;
      color: var(--white);
      font-size: 1.35rem;
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
      width: 8.5rem;
      margin: 1rem 10rem;
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
        align-self: end;
        font-size: 1.5rem;
        margin: 0 0 2rem 0.5rem;
        @media only screen and (min-width: 311px) {
          max-width: 130px;
        }
      }
    }
    .contactContainer {
      width: 50%;
      position: relative;
      display: flex;
      justify-content: end;
      align-items: end;
      padding: 0 5rem 2rem 0;
      }
      .phone {
        font-weight: bold;
        font-size: 1.5rem;
        &:hover {
          color: var(--blue);
        }
      }
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
      
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      
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
      
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      
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
       
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      
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
       
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
       
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
       
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      
    } 
`

export default function Cta() {
  const { heroes, cta } = useStaticQuery(graphql`
    query {
      heroes: allSanityHomepageHero {
        nodes {
          secondalt
          secondlogo {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
      cta: allSanityContactInfo {
        nodes {
          tagline
          phone
          id
          cta
        }
      }
    }
  `)
  const { nodes } = cta
  const hero = heroes.nodes

  return (
    <>
      {nodes.map(call => (
        <NodeParser key={call.id}>
          <TextBox>
            <p>
              Taking the worry out <br />
              of complex insurance issues
              <br />
              for both <Uppercase>businesses</Uppercase>
              <br />
              and <Uppercase>individuals</Uppercase>
            </p>
            <Button>
              <Link to="/contact" className="upper">
                {call.cta} <HiOutlineArrowNarrowRight className="arrowRight" />
              </Link>
            </Button>
          </TextBox>
          <LowerContent>
            <TaglinContainer>
              <Uppercase className="tagline">{call.tagline} </Uppercase>
            </TaglinContainer>
            <div className="contactContainer">
              {hero.map(h => (
                <div key={h.id}>
                  <SanityImage
                    {...h.secondlogo}
                    alt={h.secondalt}
                    className="lowerLogo"
                    style={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                </div>
              ))}
              <a href={`tel:${call.phone}`} className="phone">
                {call.phone}
              </a>
            </div>
          </LowerContent>
        </NodeParser>
      ))}
    </>
  )
}

// Credit to https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ for responsive design template
