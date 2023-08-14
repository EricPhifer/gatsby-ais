import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import useForm from '../utils/useForm.js'
import useContact from '../utils/useContact.js'

const ContactStyles = styled.div`
  max-width: 108rem;
  margin: 14rem auto 0;
  min-height: 100vh;
  .upper {
    text-transform: uppercase;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .gray-bg {
    background-color: lightgray;
    padding: 1rem;
  }
`

const ContactContainer = styled.div`
  width: 100%;
  display: inline-flex;
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-flow: column-reverse wrap;
    justify-content: center;
    align-items: center;
  }
`

const Left = styled.div`
  width: 100%;
  padding: 23rem 5rem 0;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding: 23rem 0 0;
  }
`

const Content = styled.div`
  max-width: 37.5rem;
  margin-top: 2rem;
  font-size: 2rem;
  text-align: justify;
  @media only screen and (max-width: 501px) {
    margin: 2rem 1.5rem 0;
  }
`

const Paragraph = styled.p`
  padding-bottom: 1rem;
`

const CallContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
`

const Tagline = styled.p`
  max-width: 26rem;
  margin: 0 auto 2rem;
  font-size: 3rem;
`

const Phone = styled.a`
  font-weight: bold;
  font-size: 2.5rem;
  &:hover {
    color: var(--blue);
  }
`

const Address = styled.div`
  max-width: 37.5rem;
  margin-top: 2rem;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 2.5rem;
`

const Right = styled.div`
  width: 100%;
  height: 54rem;
`

const H1 = styled.h1`
  margin: 0.67rem 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4rem;
`

const FormStyles = styled.div`
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  background: var(--black);
  .required::placeholder,
  .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  input[type='radio'] {
    min-width: 1.5rem;
  }
  @media only screen and (max-width: 501px) {
    padding: 2rem;
  }
`

const Form = styled.form``

const FullField = styled.fieldset`
  border: none;
`

const Legend = styled.legend`
  color: var(--white);
  font-size: 2rem;
  margin: 0 auto;
`

const Label = styled.label`
  display: none;
`

const ContactMethodLabel = styled.label`
  width: 100%;
  display: inline-flex;
  color: var(--white);
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    align-items: center;
  }
  span {
    padding: 0.5rem;
  }
`

const Input = styled.input`
  width: 100%;
  height: 4rem;
  background-color: var(--white);
  margin: 0.5rem 0;
  padding-left: 1rem;
  border-radius: 2rem;
  &:active {
    border: 2px solid var(--blue);
  }
`

const Select = styled.select`
  width: 100%;
  height: 4rem;
  background-color: var(--white);
  color: var(--gray);
  margin: 5px 0;
  padding-left: 1rem;
  border-radius: 2rem;
  &:active {
    border: 2px solid var(--blue);
  }
`

const Span = styled.span``

const TextArea = styled.textarea`
  width: 100%;
  background-color: var(--white);
  margin: 5px 0;
  padding: 1rem 0 1rem 1rem;
  border-radius: 2rem;
  &:active {
    border: 2px solid var(--blue);
  }
`

const Submit = styled.button`
  max-width: 50rem;
  margin: 1.5rem auto;
  background: var(--green);
  color: var(--white);
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    background: var(--white);
    color: var(--green);
  }
`

const Required = styled.p`
  position: absolute;
  bottom: 0;
  right: 2rem;
  font-weight: bold;
  text-align: center;
`

const MapContainer = styled.div`
  margin-top: 22rem;
  position: relative;
  iframe {
    width: 100%;
    height: 45rem;
    border: none;
  }
`

export default function Contact() {
  const { contacts, cta } = useStaticQuery(graphql`
    query {
      contacts: allSanityContactPageContent {
        nodes {
          id
          firstparagraph
          streetaddress
          cityaddress
          secondparagraph
          thirdparagraph
          title
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

  const contactnodes = contacts.nodes
  const ctanodes = cta.nodes

  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    contactday: '',
    contacttime: '',
    contactmethod: '',
    message: '',
  })
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  })
  console.log(contact, error, loading, submitContact)
  if (errMessage) {
    return <p>{errMessage}</p>
  }

  return (
    <ContactStyles>
      <ContactContainer>
        <Left className="flex">
          {contactnodes.map(c => (
            <Content key={c.id}>
              <Paragraph>{c.firstparagraph}</Paragraph>
              <Paragraph>{c.secondparagraph}</Paragraph>
              <Paragraph className="gray-bg">{c.thirdparagraph}</Paragraph>
            </Content>
          ))}
          {ctanodes.map(call => (
            <CallContainer key={call.id}>
              <Tagline className=" upper">{call.tagline}</Tagline>
              <Phone href={`tel:${call.phone}`}>{call.phone}</Phone>
            </CallContainer>
          ))}
          {contactnodes.map(c => (
            <Address key={c.id}>
              <H3>{c.streetaddress}</H3>
              <H3>{c.cityaddress}</H3>
            </Address>
          ))}
        </Left>
        <Right className="contactInfo">
          <H1>Contact Us</H1>
          <FormStyles>
            <Form
              className="container"
              id="formContainer"
              method="post"
              // eslint-disable-next-line
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <FullField>
                <Legend>Your Information</Legend>
                <Label htmlFor="name" className="nameLabel">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={updateValue}
                  placeholder="Full Name"
                  className="required"
                />
                <Label htmlFor="email" className="emailLabel">
                  Email Address
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={updateValue}
                  placeholder="Email Address"
                  className="required"
                />
                <Label htmlFor="phone" className="phoneLabel">
                  Phone Number
                </Label>
                <Input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={updateValue}
                  placeholder="Phone Number"
                />
                <Label htmlFor="contactday" className="contactdayLabel">
                  Contact Day:
                </Label>
                <Select
                  type="contactday"
                  name="contactday"
                  value={values.contactday}
                  onChange={updateValue}
                  id="contactDay"
                >
                  <option value="ContactTime">
                    Best day to contact you...
                  </option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </Select>
                <Label htmlFor="contactday" className="contactdayLabel">
                  Contact Time:
                </Label>
                <Select
                  type="contacttime"
                  name="contacttime"
                  value={values.contacttime}
                  onChange={updateValue}
                  id="contactTimes"
                >
                  <option value="WhoToContact">
                    Best time to contact you...
                  </option>
                  <option value="8-9am">8-9am</option>
                  <option value="9-10am">9-10am</option>
                  <option value="10-11am">10-11am</option>
                  <option value="12-1pm">12-1pm</option>
                  <option value="1-2pm">1-2pm</option>
                  <option value="2-3pm">2-3pm</option>
                  <option value="3-4pm">3-4pm</option>
                  <option value="4-5pm">4-5pm</option>
                </Select>
                <ContactMethodLabel htmlFor="contactmethod">
                  <Span>Please contact me via:</Span>
                  <Label>
                    <Span>Email</Span>
                    <Input
                      type="radio"
                      id="emailmethod"
                      name="contactmethod"
                      value="Email"
                    />
                  </Label>
                  <Label>
                    <Span>Phone</Span>
                    <Input
                      type="radio"
                      id="phonemethod"
                      name="contactmethod"
                      value="Phone"
                    />
                  </Label>
                </ContactMethodLabel>
                <Label htmlFor="message" className="messageLabel">
                  Message
                </Label>
                <TextArea
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={updateValue}
                  rows="7"
                  placeholder="How can we help you with your insurance needs?"
                />
                <Submit type="submit" className="submitButton" value="Submit">
                  Submit Message
                </Submit>
              </FullField>
            </Form>
            <Required className="tomato">Required fields</Required>
          </FormStyles>
        </Right>
      </ContactContainer>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.753386369639!2d-108.55890598436525!3d39.066533944561094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c68f4f11b93%3A0xdf1f6524a186a19!2sActive%20Insurance%20Solutions!5e0!3m2!1sen!2sus!4v1654626606979!5m2!1sen!2sus"
          title="location-map"
        />
      </MapContainer>
    </ContactStyles>
  )
}

export const Head = () => <title>Contact Us</title>
