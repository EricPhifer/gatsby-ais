import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

// TODO: reworking Footer to reduce height and add continuity

const FooterStyles = styled.footer`
  width: 100vw;
  min-height: 12rem;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background-color: var(--gray);
  font-size: 1.25rem;

  .column {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  .inline {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    span {
      padding: 0 1rem;
    }
  }
`

const RelativePosition = styled.div`
  width: 100%;
  .row {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    padding: 2rem;
    justify-content: center;
  }
`

const Nav = styled.ul`
  margin: 3rem 2.5rem;
  font-weight: bold;
  padding: 3rem 0.5rem;
  margin: 0;
  list-style-type: none;
`

const Item = styled.li`
  padding-bottom: 1rem;
`

const Pages = styled(Link)`
  color: var(--blue);
  &:hover {
    color: var(--white);
  }
  &[aria-current='page'] {
    border-bottom: 1px solid var(--red);
  }
`

const Span = styled.span``

const Credits = styled.ul`
  width: 100%;
  padding: 0 2rem;
  margin: 0;
  list-style-type: none;
`

const CopyrightItem = styled.li``

const Terms = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const TermItems = styled.li``

const PolicyLink = styled(Link)`
  color: var(--blue);
  &:hover {
    color: var(--white);
  }
  &[aria-current='page'] {
    border-bottom: 1px solid var(--red);
  }
`

const Designer = styled.a`
  color: var(--blue);
  &:hover {
    color: var(--white);
  }
`

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: allSanityLayoutFooter {
        nodes {
          dev
          designs
          copyright
          id
          title
        }
      }
    }
  `)

  const { nodes } = footer
  return (
    <FooterStyles>
      {nodes.map(node => (
        <Container className="column" key={node.id}>
          <Nav className="inline">
            <Item>
              <Pages to="/">Home</Pages>
            </Item>
            <Span> | </Span>
            <Item>
              <Pages to="/about">About Us</Pages>
            </Item>
            <Span> | </Span>
            <Item>
              <Pages to="/services">Services</Pages>
            </Item>
            <Span> | </Span>
            <Item>
              <Pages to="/faq">FAQ</Pages>
            </Item>
            <Span> | </Span>
            <Item>
              <Pages to="/contact">Contact Us</Pages>
            </Item>
          </Nav>
          <RelativePosition>
            <Credits className="row">
              <CopyrightItem>
                &copy; {node.copyright} {new Date().getFullYear()}
              </CopyrightItem>
              <CopyrightItem>
                <Terms className="inline">
                  <TermItems>
                    <PolicyLink to="/privacypolicy">Privacy Policy</PolicyLink>
                  </TermItems>
                  <Span> | </Span>
                  <TermItems>
                    <PolicyLink to="/termsconditions">
                      Terms &amp; Conditions
                    </PolicyLink>
                  </TermItems>
                </Terms>
              </CopyrightItem>
              <CopyrightItem>
                Built by <Span>{node.designs[0]}</Span> and{' '}
                <Designer
                  href="https://phiferwebsolutions.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {node.designs[1]}
                </Designer>
              </CopyrightItem>
            </Credits>
          </RelativePosition>
        </Container>
      ))}
    </FooterStyles>
  )
}
