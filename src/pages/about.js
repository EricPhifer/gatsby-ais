import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import SanityImage from 'gatsby-plugin-sanity-image'
import { defaultComponents, PortableText } from '@portabletext/react'

const AboutStyles = styled.div`
  max-height: 100%;
  max-width: 108rem;
  margin: 18rem auto 5rem;
  text-align: left;
  // @media only screen and (max-width: 500px) {
  // ::-webkit-scrollbar {
  //   display: none;
  //   overflow: hidden;
  //   background-attachment: fixed;
  // }
  //  {
  //   -ms-overflow-style: none;
  //   overflow: hidden;
  //   background-attachment: fixed;
  // }
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
  #randy {
    order: 1;
  }
  #c {
    order: 2;
  }
  #rhonda {
    order: 3;
  }
  #katie {
    order: 4;
  }
  @media only screen and (max-width: 1080px) {
    margin: 16rem auto 5rem;
  }
  @media only screen and (max-width: 500px) {
    margin: 13rem auto 5rem;
  }
`

const TopSide = styled.div`
  width: 100%;
  min-height: 10rem;
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-flow: column wrap;
  }
`

const Left = styled.div`
  width: 60%;
  background-color: var(--black);
  color: var(--white);
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding-right: 10rem;
  padding-bottom: 1rem;
  h1 {
    padding-left: 2rem;
    margin: 0;
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    padding: 0;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

const Right = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: #d3d3d3;
  .textImg {
    height: 3rem;
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0 0;
  }
  @media only screen and (max-width: 900px) {
    height: 5rem;
    .textImg {
      height: 50%;
    }
  }
`

const Content = styled.div`
  width: 100%;
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`

const StaffContainer = styled.section`
  width: 60%;
  @media only screen and (max-width: 1080px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`

const Staff = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media only screen and (max-width: 1080px) {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`

const StaffImage = styled.div`
  width: 30%;
  min-width: 20rem;
  margin: 0 2rem 0 0;
  img {
    width: 20rem;
    height: 20rem;
    box-shadow: 0.5rem 0.5rem 1rem #000;
  }
  @media only screen and (max-width: 1080px) {
    text-align: center;
    img {
      width: 25rem;
      height: 25rem;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
    margin: 0 1rem 0 0;
  }
  @media only screen and (max-width: 400px) {
    width: 65%;
  }
`

const StaffInfo = styled.div`
  width: 80%;
  margin-right: 2rem;
  padding: 0 2rem;

  p {
    margin: 0.3rem 0;
  }
  @media only screen and (max-width: 1080px) {
    max-width: 60rem;
    margin: 3rem 0 0 0;
    p {
      margin: 0.3rem 4rem 0 0;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
    p {
      margin: 0.3rem 0;
    }
  }
`

const Title = styled.p``
const Email = styled.p``
const Bio = styled.p``

const H3 = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`

const MissionContainer = styled.section`
  width: 40%;
  .mission {
    width: 100%;
    background-color: var(--blue);
    color: var(--white);
    h3 {
      padding-top: 1rem;
    }
    p {
      max-width: 50rem;
      padding: 1.5rem;
      margin: 0;
    }
  }
  @media only screen and (max-width: 1080px) {
    width: 80%;
    .mission {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    p {
      margin: 0.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    p {
      margin: 0;
    }
  }
`

const Info = styled.div`
  background-color: #d3d3d3;
  padding: 2.5rem;
  font-size: 1.75rem;
  letter-spacing: 0.6px;
  @media only screen and (max-width: 1080px) {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Contact = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
`

const Tagline = styled.p`
  font-size: 3rem;
  max-width: 26rem;
  text-align: center;
  @media only screen and (max-width: 1080px) {
    .nextTo {
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 320px) {
    .nextTo {
      display: flex;
      flex-direction: column;
    }
  }
`

const Phone = styled.a`
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    color: var(--blue);
  }
  @media only screen and (max-width: 1080px) {
    margin: 2rem;
  }
  @media only screen and (max-width: 500px) {
    margin: 2.5rem;
  }
`

const Buttonesque = styled(Link)`
  display: flex;
  place-items: center center;
  place-content: center center;
  margin: 2rem 0;
  padding: 1rem;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: bold;
  width: 12.5rem;
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
  @media only screen and (max-width: 1080px) {
    margin: 2rem;
  }
`

export default function AboutPage() {
  const { profiles, contents, cta } = useStaticQuery(graphql`
    query {
      profiles: allSanityAboutProfile {
        nodes {
          email
          bio
          id
          jobTitle
          name
          mainalt
          profileimage {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
      contents: allSanityAboutContent {
        nodes {
          _rawContent
          mainimage {
            asset {
              id
            }
            ...ImageWithPreview
          }
          id
          title
          mainalt
          textalt
          textimage {
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
  const pnodes = profiles.nodes
  const conodes = contents.nodes
  const ctanodes = cta.nodes
  return (
    <AboutStyles>
      {conodes.map(content => (
        <TopSide className="inline" key={content.id}>
          <Left className="flex">
            <h1>{content.title}</h1>
          </Left>
          <Right className="flex">
            <SanityImage
              {...content.textimage}
              alt={content.textalt}
              className="textImg"
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </Right>
        </TopSide>
      ))}
      <Content className="inline">
        <StaffContainer className="flex">
          {pnodes.map(staff => (
            <Staff
              className="inline"
              key={staff.id}
              id={staff.name.split(' ')[0].toLowerCase().split('.')[0]}
            >
              <StaffImage>
                <SanityImage
                  {...staff.profileimage}
                  alt={staff.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </StaffImage>
              <StaffInfo className="flex">
                <H3 className="name">{staff.name}</H3>
                <Title>{staff.jobTitle}</Title>
                <Email>{staff.email}</Email>
                <Bio>{staff.bio}</Bio>
              </StaffInfo>
            </Staff>
          ))}
        </StaffContainer>
        <MissionContainer className="flex">
          {conodes.map(c => (
            <Info key={c.id} className="flex">
              <PortableText
                value={c._rawContent}
                components={defaultComponents}
                className="flex"
              />
            </Info>
          ))}
          {ctanodes.map(call => (
            <Contact className="flex" key={call.id}>
              <Tagline className="upper">{call.tagline}</Tagline>
              <Phone href={`tel:${call.phone}`}>{call.phone}</Phone>
              <Buttonesque to="/contact" className="upper">
                {call.cta} <HiOutlineArrowNarrowRight className="arrowRight" />
              </Buttonesque>
            </Contact>
          ))}
        </MissionContainer>
      </Content>
    </AboutStyles>
  )
}

export const Head = () => <title>About Us</title>
