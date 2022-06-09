import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import SEO from '../components/SEO';

const PlanStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 18rem;
  .planContainer {
    width: 100%;
    display: block;
    padding-top: 160px;
    margin-top: -160px;
  }
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
  .headContainer {
    width: 100%;
  }
  .dotContainer {
    width: 8%;
    .dot {
      background-color: var(--blue);
      width: 5vmin;
      height: 5vmin;
    }
  }
  .head {
    width: 90%;
    padding: 2rem;
    padding: 2rem;
    background-color: var(--black);
    h1 {
      color: var(--white);
      margin: 0;
    }
  }
  .planGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 0 3rem;
    padding-left: 9rem;
    padding-right: 3rem;
    .serviceInfo {
      p {
        text-align: justify;
        letter-spacing: 0.7px
      }
      .title {
        font-size: 1.75rem;
        font-weight: bold;
      }
      .spacer {
        font-size: 1.75rem;
        font-weight: bold
        padding: 0 1rem;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
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

const TabletPlanStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  padding: 18rem 2rem 0;
  .planContainer {
    width: 100%;
    display: block;
    padding-top: 160px;
    margin-top: -160px;
  }
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
  .headContainer {
    width: 100%;
  }
  .dotContainer {
    width: 8%;
    .dot {
      background-color: var(--blue);
      width: 6vmin;
      height: 6vmin;
    }
  }
  .head {
    width: 90%;
    padding: 2rem;
    background-color: var(--black);
    h1 {
      color: var(--white);
      font-weight: 600;
      margin: 0;
    }
  }
  .planGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 0 3rem;
    padding-left: 9rem;
    padding-right: 3rem;
    .serviceInfo {
      p {
        text-align: justify;
        letter-spacing: 0.7px
      }
      .title {
        font-size: 1.75rem;
        font-weight: bold;
      }
      .spacer {
        font-size: 1.75rem;
        font-weight: bold
        padding: 0 1rem;
      }
    }
    @media only screen and (max-width: 900px) {
      padding-left: 6rem;
      padding-right: 2rem;
    }
    @media only screen and (max-width: 750px) {
      grid-template-columns: 1fr;
      padding-left: 5rem;
      padding-right: 3rem;
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
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
const MobilePlanStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  padding: 16rem 2rem 0;
  .planContainer {
    width: 100%;
    display: block;
    padding-top: 160px;
    margin-top: -160px;
  }
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
  .headContainer {
    width: 100%;
  }
  .head {
    width: 100%;
    padding: 2rem;
    background-color: var(--black);
    h1 {
      color: var(--white);
      font-size: 2.5rem;
      font-weight: 600;
      margin: 0;
    }
  }
  .planGrid {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 1rem;
    .serviceInfo {
      p {
        text-align: justify;
        letter-spacing: 0.7px;
      }
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .spacer {
        font-size: 1.5rem;
        font-weight: bold
        padding: 0 1rem;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    .tagline {
      max-width: 245px;
      margin: 0;
      font-size: 3rem;
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

export default function PlanPage({ data }) {
  const plans = data.plans.nodes;
  const cta = data.cta.nodes;
  return (
    <>
      <SEO title="Health &amp; Life Insurance Plans" />
      <PlanStyles>
        {plans.map((plan) => (
          <section 
            className="planContainer" 
            id={plan.slug.current}
          >
            <div className="headContainer inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="head">
                <h1>{plan.title}</h1>
              </div>
            </div>
            <div className="planGrid">
              {plan.plans.map((content) => (
                <div className="serviceInfo flex" key={content._key}>
                  <p>
                    <span className="title upper">
                      {content.plantitle}
                    </span>
                    <span className="spacer"> | </span>
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
        {cta.map((call) => (
          <div className="contact flex" key={call.id}>
            <p className="tagline upper">
              {call.tagline}
            </p>
            <Link to="/contact" className="buttonesque upper">
              {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
            </Link>
            <a href={`tel:${call.phone}`} className="phone">
              {call.phone}
            </a>
          </div>
        ))}
      </PlanStyles>
      <TabletPlanStyles>
        {plans.map((plan) => (
          <section 
            className="planContainer" 
            id={plan.slug.current}
          >
          <div className="headContainer inline">
            <div className="dotContainer">
              <div className="dot" />
            </div>
            <div className="head">
              <h1>{plan.title}</h1>
            </div>
          </div>
          <div className="planGrid">
            {plan.plans.map((content) => (
              <div className="serviceInfo flex" key={content._key}>
                <p>
                  <span className="title upper">
                    {content.plantitle}
                  </span>
                  <span className="spacer"> | </span>
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
      {cta.map((call) => (
        <div className="contact flex" key={call.id}>
          <p className="tagline upper">
            {call.tagline}
          </p>
          <Link to="/contact" className="buttonesque upper">
            {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
          </Link>
          <a href={`tel:${call.phone}`} className="phone">
            {call.phone}
          </a>
        </div>
      ))}
      </TabletPlanStyles>
      <MobilePlanStyles>
        {plans.map((plan) => (
          <section 
            className="planContainer" 
            id={plan.slug.current}
          >
            <div className="headContainer inline">
              <div className="head">
                <h1>{plan.title}</h1>
              </div>
            </div>
            <div className="planGrid">
              {plan.plans.map((content) => (
                <div 
                  className="serviceInfo flex" 
                  key={content._key}
                >
                  <p>
                    <span className="title upper">
                      {content.plantitle}
                    </span>
                    <span className="spacer"> | </span>
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
        {cta.map((call) => (
          <div className="contact flex" key={call.id}>
            <p className="tagline upper">
              {call.tagline}
            </p>
            <Link to="/contact" className="buttonesque upper">
              {call.cta}  <HiOutlineArrowNarrowRight className="arrowRight"/>
            </Link>
            <a href={`tel:${call.phone}`} className="phone">
              {call.phone}
            </a>
          </div>
        ))}
      </MobilePlanStyles>
    </>
  );
}

export const query = graphql`
  query {
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
`;

