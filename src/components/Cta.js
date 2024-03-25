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
  // @media only screen and (max-width: 1080px) {
  //   width: 42%;
  //   height: 17rem;
  //   padding: 1rem 2rem;
  //   p {
  //     font-size: 1.6rem;
  //   }
  // }
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

const ContactContainer = styled.div`
  @media only screen and (max-width: 1080px) and (min-width: 501px) {
    justify-content: center;
    .lowerLogo {
      width: 85%;
      bottom: 4rem;
    }
   
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 0 5rem 2rem 0;
    }
    
  }
`

const Image = styled.div``

const Phone = styled.a`
  @media only screen and (max-width: 1080px) and (min-width: 501px) {
    position: static;
    z-index: 2;
  }

  @media only screen and (max-width: 500px) {
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
      color: var(--blue);
    }
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
            <ContactContainer>
              {hero.map(h => (
                <Image key={h.id}>
                  <SanityImage
                    {...h.secondlogo}
                    alt={h.secondalt}
                    className="lowerLogo"
                    style={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                </Image>
              ))}
              <Phone href={`tel:${call.phone}`}>{call.phone}</Phone>
            </ContactContainer>
          </LowerContent>
        </NodeParser>
      ))}
    </>
  )
}

// Credit to https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ for responsive design template
