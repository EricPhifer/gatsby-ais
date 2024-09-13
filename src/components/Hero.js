import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SanityImage from 'gatsby-plugin-sanity-image'
import { FaCaretRight } from 'react-icons/fa'

const HeroContainer = styled.header`
  width: 100%;
`

// Upper part of the Hero Element
const UpperContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  z-index: 100;
`

const Image = styled.div`
  grid-column: 1 / span 3;
  img {
    clamp:
    width: 100%;
  }
  @media only screen and (max-width: 915px) {
    grid-column: 1 / span 4;
  }
`

const Texture = styled.div`
  max-height: 58.2rem;
  grid-column: 4 / span 1;
  position: relative;
  img {
    height: 100%;
  }
  @media only screen and (max-width: 915px) {
    display: none;
  }
`

const Words = styled.div`
  height: 9rem;
  position: absolute;
  top: 50%;
  @media only screen and (max-width: 915px) {
    display: none;
  }
`

// Lower part of the Hero Element

const LowerContent = styled.div`
  width: 100%;
  height: 20rem;
  display: inline-flex;
  position: relative;
  z-index: 125;
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`

const TextBox = styled.div`
  height: 22rem;
  position: absolute;
  display: flex;
  flex-flow: column;
  background-color: var(--black);
  bottom: 8rem;
  right: 0;
  padding: 0.5rem 3rem;
  z-index: 150;
  @media only screen and (max-width: 1080px) {
    height: 20rem;
    padding: 1rem 2rem;
  }
`

const BoxText = styled.p`
  margin: 0;
  color: var(--white);
  font-size: 2rem;
  line-height: 2;
  @media only screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
`

const Cta = styled.div`
  position: absolute;
  top: 7rem;
  right: 3rem;
  z-index: 160;
  a {
    width: 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
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
  @media only screen and (max-width: 500px) {
    .arrowRight {
      font-size: 1.5rem;
    }
  }
`

const ContactContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1080px) {
    justify-content: end;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
  }
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`

const Telephone = styled.a`
  align-self: end;
  font-weight: bold;
  position: static;
  z-index: 125;
  &:hover {
    color: var(--blue);
  }
  @media only screen and (max-width: 1080px) {
    font-weight: bold;
    font-size: 2rem;
  }
  @media only screen and (max-width: 900px) {
    position: static;
    z-index: 2;
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
  @media only screen and (max-width: 900px) {
    justify-content: end;
    align-items: start;
  }
  @media only screen and (max-width: 420px) {
    align-items: end;
  }
  @media only screen and (max-width: 410px) {
    .tagline {
      font-size: 1.75rem;
    }
  }
`

const LowerLogo = styled.div`
  img {
    max-width: 40rem;
    width: 90%;
    height: 11rem;
    position: absolute;
    right: 0;
    bottom: 2rem;
    opacity: 0.2;
    z-index: 150;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`

const Uppercase = styled.span`
  text-transform: uppercase;
`

export default function Hero() {
  const { heroes, cta } = useStaticQuery(graphql`
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

  const { nodes } = heroes
  const cnodes = cta.nodes
  return (
    <HeroContainer>
      {nodes.map(node => (
        <UpperContent key={node.id}>
          <Image>
            <SanityImage
              {...node.mainimage}
              alt={node.mainalt}
              styles={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </Image>
          <Texture>
            <SanityImage
              {...node.bgimage}
              alt={node.bgalt}
              styles={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <Words>
              <SanityImage
                {...node.textimage}
                alt={node.textalt}
                className="solutions"
                styles={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </Words>
          </Texture>
        </UpperContent>
      ))}
      {cnodes.map(call => (
        <LowerContent key={call.id}>
          <TextBox>
            <BoxText>
              Taking the worry out <br />
              of complex insurance issues
              <br />
              for both <Uppercase>businesses</Uppercase>
              <br />
              and <Uppercase>individuals</Uppercase>
            </BoxText>
          </TextBox>
          <Cta>
            <Link to="/contact" className="upper">
              {call.cta} <FaCaretRight className="arrowRight" />
            </Link>
          </Cta>
          <TaglinContainer>
            <Uppercase className="tagline">{call.tagline} </Uppercase>
          </TaglinContainer>
          <ContactContainer>
            {nodes.map(h => (
              <LowerLogo key={h.id}>
                <SanityImage
                  {...h.secondlogo}
                  alt={h.secondalt}
                  className="lowerLogo"
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </LowerLogo>
            ))}
            <Telephone href={`tel:${call.phone}`} className="phone">
              {call.phone}
            </Telephone>
          </ContactContainer>
        </LowerContent>
      ))}
    </HeroContainer>
  )
}
