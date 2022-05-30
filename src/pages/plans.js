import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

import SEO from '../components/SEO';

const PlanStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 18rem;
  .planContainer {
    width: 100%;
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
    background-color: var(--black);
    h1 {
      color: var(--white);
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
  padding: 18rem 2rem;
  .planContainer {
    width: 100%;
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
    background-color: var(--black);
    h1 {
      color: var(--white);
      font-weight: 600;
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

`;
const MobilePlanStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  padding: 16rem 2rem;
  .planContainer {
    width: 100%;
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
    background-color: var(--black);
    h1 {
      color: var(--white);
      font-size: 2.5rem;
      font-weight: 600;
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
`;

export default function PlanPage({ data }) {
  const faqs = data.faqs.nodes;
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <PlanStyles>
        {/* {plans.map((plan) => ( */}
          <section className="planContainer">
            <div className="headContainer inline">
              <div className="dotContainer">
                <div className="dot" />
              </div>
              <div className="head">
                <h1>Employer Benefit Solutions</h1>
              </div>
            </div>
            <div className="planGrid">
              <div className="serviceInfo flex">
                <p>
                  <span className="title upper">Better Health &amp; Protection</span>
                  <span className="spacer"> | </span>
                  Let us help you find plans where, in many cases, your employees will receive more comprehensive benefits with lower out-of-pocket expenses.
                </p>
              </div>
              <div className="serviceInfo flex">
                <p>
                  <span className="title upper">Personal Assistance</span>
                  <span className="spacer"> | </span>
                  We are here for you. we provide help to you and every one of your employees when you need it-not just once a year.
                </p>
              </div>
              <div className="serviceInfo flex">
                <p>
                  <span className="title upper">More Choices Than Ever</span>
                  <span className="spacer"> | </span>
                  Don't limit yourself. You have more options now than ever before. We can give you access to health plans from several insurance companies nationwide.
                </p>
              </div>
            </div>
          </section>
          {/* ))} */}
      </PlanStyles>
      <TabletPlanStyles>
         {/* {plans.map((plan) => ( */}
        <section className="planContainer">
          <div className="headContainer inline">
            <div className="dotContainer">
              <div className="dot" />
            </div>
            <div className="head">
              <h1>Employer Benefit Solutions</h1>
            </div>
          </div>
          <div className="planGrid">
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">Better Health &amp; Protection</span>
                <span className="spacer"> | </span>
                Let us help you find plans where, in many cases, your employees will receive more comprehensive benefits with lower out-of-pocket expenses.
              </p>
            </div>
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">Personal Assistance</span>
                <span className="spacer"> | </span>
                We are here for you. we provide help to you and every one of your employees when you need it-not just once a year.
              </p>
            </div>
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">More Choices Than Ever</span>
                <span className="spacer"> | </span>
                Don't limit yourself. You have more options now than ever before. We can give you access to health plans from several insurance companies nationwide.
              </p>
            </div>
          </div>
        </section>
        {/* ))} */}
      </TabletPlanStyles>
      <MobilePlanStyles>
         {/* {plans.map((plan) => ( */}
          <section className="planContainer">
          <div className="headContainer inline">
            <div className="head">
              <h1>Employer Benefit Solutions</h1>
            </div>
          </div>
          <div className="planGrid">
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">Better Health &amp; Protection</span>
                <span className="spacer"> | </span>
                Let us help you find plans where, in many cases, your employees will receive more comprehensive benefits with lower out-of-pocket expenses.
              </p>
            </div>
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">Personal Assistance</span>
                <span className="spacer"> | </span>
                We are here for you. we provide help to you and every one of your employees when you need it-not just once a year.
              </p>
            </div>
            <div className="serviceInfo flex">
              <p>
                <span className="title upper">More Choices Than Ever</span>
                <span className="spacer"> | </span>
                Don't limit yourself. You have more options now than ever before. We can give you access to health plans from several insurance companies nationwide.
              </p>
            </div>
          </div>
        </section>
          {/* ))} */}
      </MobilePlanStyles>
    </>
  );
}

export const query = graphql`
  query {
    faqs: allSanityFaq {
    nodes {
      id
      question
      answer
    }
  }
  hero: allSanityFaqHero {
    nodes {
      heading
      text
      image {
        asset {
          id
        }
      }
    }
  }
  }
`;
