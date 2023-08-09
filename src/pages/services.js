import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Seo from '../components/Seo'

const ServiceStyles = styled.div`
  max-width: 1080px;
  margin: 17rem auto 0;
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
  #Medicare {
    display: none;
  }
  .flexSwitch {
    @media only screen and (min-width: 901px) {
      display: inline-flex;
    }
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-flow: column-reverse wrap;
    }
  }
  @media only screen and (max-width: 800px) {
    margin: 14rem auto 0;
  }
`

const ServiceContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 1080px) {
    padding: 3rem 1rem 0;
  }
`

const Left = styled.div`
  width: 50%;
  margin-bottom: 5rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`

const HeadTitle = styled.div`
  background-color: var(--black);
  color: var(--white);
  font-size: 2.5rem;
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

const H1 = styled.h1`
  margin-left: 5rem;
  @media only screen and (max-width: 1080px) {
    font-size: 5rem;
    font-weight: bold;
    margin-left: 2rem;
  }
  @media only screen and (max-width: 900px) {
    margin: 0.6rem auto;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3.5rem;
    margin: 2rem auto;
  }
`

const Card = styled.div`
  margin-top: 3rem;
  @media only screen and (min-width: 1080px) {
    width: 100%;
    justify-content: center;
  }
`

const DotContainer = styled.div`
  width: 10%;
  @media only screen and (max-width: 500px) {
    width: 15%;
  }
`

const Dot = styled.div`
  background-color: var(--blue);
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem 1.5rem;
`

const Info = styled.div`
  width: 90%;
`

const Plans = styled(Link)``

const H2 = styled.h2`
  text-align: left;
  font-size: 3.5rem;
  font-weight: 700;
  padding: 0 3rem 1rem 0;
  @media only screen and (max-width: 1080px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const Paragraph = styled.p`
  padding: 0 2rem 0 0;
  margin: 0;
`

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`

const ImgContainer = styled.span`
  .mainimg {
    width: 100%;
    box-shadow: 0.2rem 0.2rem 1rem #000;
  }
  .textImg {
    width: 100%;
    height: 9rem;
    margin: 0;
    @media only screen and (max-width: 1080px) {
      height: 7rem;
      margin: 0;
    }
  }
`

const Contact = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`

const Tagline = styled.p`
  font-size: 3rem;
  margin: 0;
  @media only screen and (min-width: 1080px) {
    max-width: 26rem;
  }
`

const Buttonesque = styled(Link)`
  display: flex;
  place-items: center center;
  place-content: center center;
  padding: 1rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  width: 11.5rem;
  margin: 2rem 0;
  background-color: var(--blue);
  border-right: 0.4rem double var(--green);
  border-bottom: 0.2rem double var(--green);
  &:hover {
    background-color: var(--white);
    color: var(--blue);
    border-right: 0.4rem double var(--blue);
    border-bottom: 0.2rem double var(--blue);
  }
  .arrowRight {
    font-size: 2.5rem;
    color: var(--green);
  }
`

const Phone = styled.a`
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    color: var(--blue);
  }
`

export default function ServicePage() {
  const { services, plans, cta } = useStaticQuery(graphql`
    query {
      services: allSanityServiceContent {
        nodes {
          title
          id
          mainalt
          textalt
          mainimage {
            asset {
              id
            }
            ...ImageWithPreview
          }
          textimage {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
      plans: allSanityServices {
        nodes {
          description
          id
          title
          slug {
            current
          }
          plans {
            _key
            plantitle
            description
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

  const servicenodes = services.nodes
  const plannodes = plans.nodes
  const ctanodes = cta.nodes

  return (
    <ServiceStyles>
      <ServiceContainer className="flexSwitch">
        <Left className="flex">
          {servicenodes.map(service => (
            <HeadTitle className="flex" key={service.id}>
              <H1>{service.title}</H1>
            </HeadTitle>
          ))}
          {plannodes.map(plan => (
            <Card className="inline" id={plan.title} key={plan.id}>
              <DotContainer>
                <Dot />
              </DotContainer>
              <Info className="flex">
                <Plans to={`/plans#${plan.slug.current}`}>
                  <H2>{plan.title}</H2>
                </Plans>
                <Paragraph>{plan.description}</Paragraph>
              </Info>
            </Card>
          ))}
        </Left>
        <Right className="flex">
          {servicenodes.map(service => (
            <ImgContainer key={service.id}>
              <SanityImage
                {...service.mainimage}
                alt={service.mainalt}
                className="mainimg"
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
              <SanityImage
                {...service.textimage}
                alt={service.textalt}
                className="textImg"
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </ImgContainer>
          ))}
          {ctanodes.map(call => (
            <Contact className="flex" key={call.id}>
              <Tagline className="upper">{call.tagline}</Tagline>
              <Buttonesque to="/contact" className="upper">
                {call.cta} <HiOutlineArrowNarrowRight className="arrowRight" />
              </Buttonesque>
              <Phone href={`tel:${call.phone}`}>{call.phone}</Phone>
            </Contact>
          ))}
        </Right>
      </ServiceContainer>
    </ServiceStyles>
  )
}

export const Head = () => <Seo title="Insurance Services" />
