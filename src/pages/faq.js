import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { defaultComponents, PortableText } from '@portabletext/react';
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
    width: 100%;
    margin-bottom: 1rem;
  }
  .right {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: #000;
    color: var(--white);
    h2 {
      font-weight: bold;
    }
  }
  .dotContainer {
    width: 8%;
    padding-right: 3vmin;
    .dot {
      background-color: var(--blue);
      width: 4vmin;
      height: 4vmin;
    }
    @media only screen and (max-width: 550px) {
      .dot {
        width: 6vmin;
        height: 6vmin;
      }
    }
    @media only screen and (max-width: 450px) {
      .dot {
        width: 8vmin;
        height: 8vmin;
      }
    }
    @media only screen and (max-width: 350px) {
      .dot {
        width: 10vmin;
        height: 10vmin;
      }
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
    @media only screen and (max-width: 550px) {
     font-size: 1.3rem; 
    }
  }
  .paraInfo {
    padding: 0 2rem;
  }
  .answer {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    text-align: justify;

    // Styling rich text by key
    #1332c16aa9b1 {
      font-weight: bold;
    }
    #d10f621e440a0 {
      font-weight: bold;
    }
    #d0d307f4d8c5 {
      font-weight: bold;
    }
    #7766c6c6057d {
      font-weight: bold;
    }
    #32db947647c60 {
      font-weight: bold;
    }
    #054cd634043d0::before {
      content: "• ";
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #b2ece7cc77a0::before {
      content: "• ";
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #5213bb205e64::before {
      content: "• ";
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #c6587ba57477::before {
      content: "• ";
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #be905c3cb6a4::before {
      content: "• ";
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
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

  // Rich text style rendering
  .richTextUL {}
  .richTextOL {}
  .richTextLI {}
  .richTextEM {}
  .richTextStrong {
    font-weight: bold;
  }
  .richTextUnderline {
    text-decoration: underline;
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
                <PortableText 
                  value={faq._rawAnswer}
                  components={defaultComponents}
                  className="answer flex"
                />
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
  faqs: allSanityFaqs {
    nodes {
      id
      question
      _rawAnswer
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
