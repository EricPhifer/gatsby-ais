import React, { useState, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'

// eslint-disable-next-line

const NodeParser = styled.div`
  position: relative;
  z-index: 1000;
`

const Navigation = styled.div`
  position: fixed;
  top: 0;
  .bg-gradient {
    z-index: 1001;
    height: 16rem;
    background-image: linear-gradient(to bottom, var(--blue), transparent);
  }
  .bg-gray {
    height: 7rem;
    position: fixed;
    top: 0;
    z-index: 1005;
    background: #595959;
    box-shadow: 0 1rem 1rem #000;
  }
  a {
    cursor: pointer;
  }
  /* Show compressed menu on small screens */
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const Full = styled.div`
  width: 100vw;
  position: fixed;
`

const Upper = styled.div`
  width: 100vw;
  display: flex;
  place-items: center center;
  position: relative;
  z-index: 1006;
  font-size: 20px;
  color: var(--white);
`

const Image = styled.div`
  position: relative;
  width: 50%;
  z-index: 1015;
  img {
    max-width: 41.5rem;
    margin-top: -1rem;
    height: auto;
    width: auto;
    background: transparent;
  }
`

const Lower = styled.nav`
  width: 50%;
  display: flex;
  justify-content: end;
  position: fixed;
  top: 5rem;
  right: 0;
  z-index: 1004;
  padding-right: 1.5rem;
`

const Services = styled.nav`
  :hover {
    color: #000070;
  }
  width: 80%;
  text-align: right;
  span {
    color: var(--white);
  }
  ul {
    display: inline-flex;
    flex-flow: row nowrap;
  }
  ul li {
    padding: 0 1.5rem;
  }
  ul li a {
    text-align: center;
    font-size: 1.6rem;
    color: var(--white);
    font-weight: bold;
    @media only screen and (max-width: 1000px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 877px) {
      font-size: 1rem;
    }
  }
`

const Phone = styled.a`
  width: 60%;
  margin-right: 8rem;
  margin-top: 1rem;
  position: relative;
  z-index: 1004;
  font-weight: bold;
  text-align: center;
  color: white;
  &:hover {
    color: #000070;
  }
`

const UList = styled.ul`
  list-style-type: none;
  @hover {
    color: #000070;
  }
`

const UItem = styled.li``

const LList = styled.ul`
  list-style-type: none;
  position: relative;
  z-index: 1004;
  display: inline-flex;
  margin-top: 13px;
`

const LItem = styled.li`
  height: 8.169rem;
  width: 8.231rem;
  margin: 0 5px;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: var(--black);
  text-transform: uppercase;
  box-shadow: inset 0 0 5px #000;
  &:last-child {
    background-color: var(--blue);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 5rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem 0;
    text-align: center;
    color: var(--white);
    &:hover {
      background-color: var(--white);
      color: var(--black);
      border-bottom: 1px solid var(--red);
      box-shadow: inset 0 0 5px #000;
    }
    &[aria-current='page'] {
      background-color: var(--white);
      color: var(--black);
      border-bottom: 1px solid var(--red);
    }
  }
`

const Text = styled.span`
  align-self: end;
  width: 100%;
  font-size: 12 px;
`

// Mobile Styling
const Mobile = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 801px) {
    display: none;
  }
  .inline {
    padding-bottom: 15rem;
    display: block;
    text-align: center;
    a,
  }
  img {
    width: 25rem;
    margin-top: 4rem;
  }
  a {
    color: var(--white);
    font-size: 1.5rem;
  }
  .lifeAltering {
    width: 13rem;
  }

  // Menu Toggling
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, 0);
  }

  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }

  @media only screen and (max-width: 300px) {
    img {
      width: 20rem;
    }
  }
`

const Gradient = styled.div`
  width: 100%;
  height: 16rem;
  background-image: linear-gradient(to bottom, var(--blue), transparent);
  position: fixed;
  top: 0;
  z-index: 1001;
`

const MobileContainer = styled.div`
  width: 100vw;
  height: 7rem;
  background: var(--gray);
  box-shadow: 0 10px 10px #000;
  position: fixed;
  top: 0;
  z-index: 1001;
`

const MobilePhone = styled.a`
  position: absolute;
  top: 25px;
  left: 7rem;
  font-weight: bold;
  z-index: 1002;
  @media only screen and (max-width: 300px) {
    left: 3.5rem;
  }
`

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 1001;
  -webkit-user-select: none;
  user-select: none;
`

const Input = styled.input`
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 1002;
  bottom: 5px;
  right: 5px;
`

const Hamburger = styled.span`
  display: flex;
  position: relative;
  width: 40px;
  height: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  z-index: 1001;
  transform-origin: 5px 0;
  background: var(--white);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`

const Menu = styled.div`
  height: 100dvh;
  width: 100dvw;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-image: linear-gradient(to bottom, var(--blue), #74c2d1);
  box-shadow: 0 0 10px #85888c;
  transform-origin: 0% 0%;
  transform: translate(100%, 0%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    transition-delay: 2s;
  }
  button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
`

const MobileUpper = styled.nav``

const MobileUpperList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10rem;
  padding: 0;
  list-style-type: none;
  a {
    margin-bottom: 4rem;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 3rem;
    &[aria-current='page'] {
      text-decoration: underline 3px var(--red);
    }
  }
  a:hover {
    opacity: 0.5;
  }
`

const MobileUpperItem = styled.li``

const NavButton = styled.button`
  height: 8rem;
`

const MobileLower = styled.nav`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  bottom: -15rem;
  font-size: 1.5rem;
  text-align: right;
  padding-bottom: 3rem;
`

const MobileLowerList = styled.ul`
  text-align: center;
  list-style-type: none;
  a {
    font-size: 2rem;
    color: #000080;
    text-decoration: underline;
    &[aria-current='/plans#employer-benefit-solutions'] {
      text-decoration: underline 3px var(--red);
    }
  }
  a:hover {
    opacity: 0.5;
  }
`

const MobileLowerItem = styled.li``

const LowerNavButton = styled.button`
  min-width: 200px;
`
const navLinks = styled.div`
  @hover {
    color: #000070;
  }
`

export default function Nav() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityLayoutHeader {
        nodes {
          id
          contactnumber
          title
          mainalt
          mainlogo {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)

  const { nodes } = navigation
  const [checked, setChecked] = React.useState(false || '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    // Cleanup function to reset the body class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const menuToggle = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <>
      {nodes.map(node => (
        <NodeParser key={node.id}>
          <Navigation>
            <Full className="bg-gradient" />
            <Full className="bg-gray" />
            <Upper className="maxWidth ">
              <Phone href={`tel:${node.contactnumber}`}>
                {node.contactnumber}
              </Phone>
              <Services>
                <UList>
                  <UItem>
                    <Link to="/plans#employer-benefit-solutions">
                      Employer and Individual Health Plans
                    </Link>
                  </UItem>
                  <span> | </span>
                  <UItem>
                    <Link to="/plans#medicare">Medicare</Link>
                  </UItem>
                  <span> | </span>
                  <UItem>
                    <Link to="/plans#life-insurance">Life Insurance</Link>
                  </UItem>
                </UList>
              </Services>
            </Upper>
            <Image>
              <SanityImage
                {...node.mainlogo}
                alt={node.mainalt}
                style={{
                  minHeight: '73px',
                  maxHeight: '121px',
                  minWidth: '250px',
                  maxWidth: '415px',
                  width: '80%',
                  objectFit: 'contain',
                  auto: 'format',
                }}
              />
            </Image>
            <Lower>
              <LList>
                <LItem>
                  <Link to="/">
                    <Text>Home</Text>
                  </Link>
                </LItem>
                <LItem>
                  <Link to="/about">
                    <Text>About Us</Text>
                  </Link>
                </LItem>
                <LItem>
                  <Link to="/services">
                    <Text>Services</Text>
                  </Link>
                </LItem>
                <LItem>
                  <Link to="/faq">
                    <Text>FAQ</Text>
                  </Link>
                </LItem>
                <LItem>
                  <Link to="/contact">
                    <Text>Contact Us</Text>
                  </Link>
                </LItem>
              </LList>
            </Lower>
          </Navigation>
          <Mobile>
            <Gradient />
            <MobileContainer>
              <MobilePhone href={`tel:${node.contactnumber}`} className="phone">
                {node.contactnumber}
              </MobilePhone>
              <Toggle id="menuToggle">
                <Input
                  type="checkbox"
                  checked={checked}
                  onClick={() => {
                    menuToggle(open => !open)
                    setChecked(old => !old)
                  }}
                />
                <Hamburger />
                <Hamburger />
                <Menu className="menuContainer">
                  <MobileUpper>
                    <MobileUpperList>
                      <MobileUpperItem>
                        <NavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link to="/" className="mobileLink">
                            Home
                          </Link>
                        </NavButton>
                      </MobileUpperItem>
                      <MobileUpperItem>
                        <NavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link to="/about" className="mobileLink">
                            About Us
                          </Link>
                        </NavButton>
                      </MobileUpperItem>
                      <MobileUpperItem>
                        <NavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link to="/services" className="mobileLink">
                            Services
                          </Link>
                        </NavButton>
                      </MobileUpperItem>
                      <MobileUpperItem>
                        <NavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link to="/faq" className="mobileLink">
                            FAQ
                          </Link>
                        </NavButton>
                      </MobileUpperItem>
                      <MobileUpperItem>
                        <NavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link to="/contact" className="mobileLink">
                            Contact Us
                          </Link>
                        </NavButton>
                      </MobileUpperItem>
                    </MobileUpperList>
                  </MobileUpper>
                  <MobileLower>
                    <MobileLowerList>
                      <MobileLowerItem>
                        <LowerNavButton
                          className="navLinks"
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link
                            className="activeLink"
                            to="/plans#employer-benefit-solutions"
                          >
                            Employer and Individual Health Plans
                          </Link>
                        </LowerNavButton>
                      </MobileLowerItem>
                      <br />
                      <MobileLowerItem className="inline">
                        <LowerNavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link
                            onClick={() => {}}
                            className="activeLink"
                            to="/plans#medicare"
                          >
                            Medicare
                          </Link>
                        </LowerNavButton>
                        <br />
                        <LowerNavButton
                          type="button"
                          onClick={() => {
                            menuToggle(open => !open)
                            setChecked(old => !old)
                          }}
                        >
                          <Link
                            className="activeLink"
                            to="/plans#life-insurance"
                          >
                            Life Insurance
                          </Link>
                        </LowerNavButton>
                      </MobileLowerItem>
                    </MobileLowerList>
                  </MobileLower>
                </Menu>
              </Toggle>
              <SanityImage
                {...node.mainlogo}
                alt={node.mainalt}
                style={{
                  objectFit: 'contain',
                  auto: 'format',
                }}
              />
            </MobileContainer>
          </Mobile>
        </NodeParser>
      ))}
    </>
  )
}
