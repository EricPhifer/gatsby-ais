import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import SEO from '../components/SEO';

const FaqStyles = styled.div`
  max-width: 650px;
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
  .top {
    margin-bottom: 1rem;
  }
  .dotContainer {
    .dot {
      background-color: var(--blue);
      width: 3vmin;
      height: 3vmin;
    }
  }
  .faqCard {
    padding: 1.5rem;
  }
  .faqContainer {
    width: 100%;
  }
  .question {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  .answer {
    padding-bottom: 1rem;
    font-size: 1.3rem;
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      max-width: 260px;
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

export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  const cta = data.cta.nodes;
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <FaqStyles>
        {faqs.map((faq) => (
          <div 
            className="faqCard" 
            key={faq.id}
          >
            <div className='top inline'>
              <div className="left flex">       
                <div className="dotContainer">
                  <div className="dot" />
                </div>
              </div>
              <div className="right flex">
                <div className="question flex">
                  <h2>{faq.question}</h2>
                </div>
              </div>
            </div>
            <div className='bottom flex'>
              <div className='faqContainer'>
                {faq.answer.map((content) => (
                  <div className="paraInfo" key={content.id}>
                    <div className="answer">
                        {content.children.map((text) =>
                          <span key={text._key}>
                            {text.text}
                          </span>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
      </FaqStyles>
    </>
  );
}

export const query = graphql`
query {
  faqs: allSanityFaq {
    nodes {
      id
      question
      answer {
        children {
          _key
          text
          marks
        }
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
