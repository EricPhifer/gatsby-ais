import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { defaultComponents, PortableText } from '@portabletext/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Seo from '../components/Seo'

const FaqStyles = styled.div`
  max-width: 65rem;
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
`

const Card = styled.div`
  padding: 1.5rem;
`

const Top = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

const Left = styled.div``

const DotContainer = styled.div`
  width: 8%;
  padding-right: 3vmin;
`

const Dot = styled.div`
  background-color: var(--blue);
  width: 4vmin;
  height: 4vmin;
  @media only screen and (max-width: 550px) {
    width: 6vmin;
    height: 6vmin;
  }
  @media only screen and (max-width: 450px) {
    width: 8vmin;
    height: 8vmin;
  }
  @media only screen and (max-width: 350px) {
    width: 10vmin;
    height: 10vmin;
  }
`

const Right = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #000;
  color: var(--white);
`

const Question = styled.div`
  font-size: 1.5rem;
  padding-left: 1rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`

const H2 = styled.h2`
  font-weight: bold;
`

const Bottom = styled.div`
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
      content: '• ';
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #b2ece7cc77a0::before {
      content: '• ';
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #5213bb205e64::before {
      content: '• ';
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #c6587ba57477::before {
      content: '• ';
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
    #be905c3cb6a4::before {
      content: '• ';
      color: #000;
      padding-left: 1rem;
      font-weight: bold;
    }
  }
`

const FaqContainer = styled.div`
  width: 100%;
`

const Contact = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`

const Tagline = styled.p`
  max-width: 260px;
  margin: 0;
  font-size: 3rem;
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
`

const Phone = styled.a`
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    color: var(--blue);
  }
`

export default function FaqPage() {
  const { faqs, cta } = useStaticQuery(graphql`
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
  `)

  const faqnodes = faqs.nodes
  const ctanodes = cta.nodes

  return (
    <FaqStyles>
      {faqnodes.map(faq => (
        <Card key={faq.id}>
          <Top className="inline">
            <Left className="flex">
              <DotContainer>
                <Dot />
              </DotContainer>
            </Left>
            <Right className="flex">
              <Question className="flex">
                <H2>{faq.question}</H2>
              </Question>
            </Right>
          </Top>
          <Bottom className="flex">
            <FaqContainer>
              <PortableText
                value={faq._rawAnswer}
                components={defaultComponents}
                className="answer flex"
              />
            </FaqContainer>
          </Bottom>
        </Card>
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
    </FaqStyles>
  )
}

export const Head = () => <Seo title="Frequently Asked Questions" />
