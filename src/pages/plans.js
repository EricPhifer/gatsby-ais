import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Seo from '../components/Seo'

const PlanStyles = styled.div`
  max-width: 108rem;
  margin: 17rem auto 0;
  padding: 0 2rem;
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
`

const PlanContainer = styled.section`
  width: 100%;
  display: block;
  padding: 16rem 0 5rem;
  margin-top: -16rem;
`

const HeadContainer = styled.div`
  width: 100%;
`

const DotContainer = styled.div`
  width: 8%;
`

const Dot = styled.div`
  background-color: var(--blue);
  width: 5vmin;
  height: 5vmin;
  @media only screen and (max-width: 1080px) {
    width: 6vmin;
    height: 6vmin;
  }
`

const LeadTitle = styled.div`
  width: 90%;
  padding: 2rem;
  background-color: var(--black);
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

const H1 = styled.h1`
  color: var(--white);
  font-weight: 600;
  margin: 0;
  @media only screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 0 3rem;
  padding-left: 9rem;
  padding-right: 3rem;
  @media only screen and (max-width: 810px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

const ServiceInfo = styled.div`
  @media only screen and (max-width: 810px) {
    padding-left: 3rem;
  }
`

const Description = styled.p`
  text-align: justify;
  letter-spacing: 0.07rem;
  padding-top: 1.5rem;
`

const Title = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const Spacer = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  padding: 0 1rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const Contact = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`

const Tagline = styled.p`
  font-size: 3rem;
  margin: 0;
  @media only screen and (max-width: 1080px) {
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

export default function PlanPage() {
  const { plans, cta } = useStaticQuery(graphql`
    query {
      plans: allSanityServices {
        nodes {
          id
          title
          description
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
  const plannodes = plans.nodes
  const ctanodes = cta.nodes

  return (
    <PlanStyles>
      {plannodes.map(plan => (
        <PlanContainer id={plan.slug.current} key={plan.id}>
          <HeadContainer className="inline">
            <DotContainer>
              <Dot />
            </DotContainer>
            <LeadTitle>
              <H1>{plan.title}</H1>
            </LeadTitle>
          </HeadContainer>
          <Grid>
            {plan.plans.map(content => (
              <ServiceInfo className="flex" key={content._key}>
                <Description>
                  <Title className="upper">{content.plantitle}</Title>
                  <Spacer> | </Spacer>
                  {content.description}
                </Description>
              </ServiceInfo>
            ))}
          </Grid>
        </PlanContainer>
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
    </PlanStyles>
  )
}

export const Head = () => <Seo title="Health &amp; Life Insurance Plans" />
