import React from 'react';
import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import useForm from '../../utils/useForm.js';
import useContact from '../../utils/useContact.js';

import SEO from '../components/SEO';

const ContactStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-top: 18rem;
  .inline {
    display: inline-flex;
    flex-wrap: wrap;
  }
  .left {
    width: 45%;
    height: 433px;
    padding: 5rem;
    border-top: 3px solid var(--blue);
    border-bottom: 3px solid var(--blue);
    border-left: 3px solid var(--blue);
  }
  .right {
    width: 45%;
    height: 400px;
  }
  @media only screen and (max-width: 1081px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 501px) {
    padding-top: 1rem;
  }
`;

const FormStyles = styled.div`
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  background: var(--black);
  legend {
    color: var(--white);
    font-size: 2rem;
  }
  fieldset {
    border: none;
  }
  label {
    display: none; 
  }
  input,
  textarea {
    width: 96%;
  }
  input,
  textarea,
  select {
    margin: 5px 0;
    padding: 10px 0 10px 10px;
    border-radius: 20px;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .hide {
    display: none;
  }
  select,
  button {
    width: 100%;
  }
  select {
    color: var(--gray);
  }
  .submitButton {
    max-width: 500px;
    margin: 1.5rem auto;
    background: var(--green);
    color: var(--white);
    &:hover {
      background: var(--white);
      color: var(--green);
    }
  }
  @media (max-width: 400px) {
    input,
    textarea {
      width: 95%;
    }
    fieldset {
      margin: 0;
      padding: 5px;
    }
    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export default function Contact({ data }) {
  const contacts = data.contacts.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  console.log(contact, error, loading, submitContact);
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="Contact Us" />
        <ContactStyles>
          <div className="contactContainer inline">
            <div className="contactInfo left">
              <p>Address</p>
              <p>Phone Number</p>
            </div>
            <div className="contactInfo right">
              <FormStyles>
                <form
                  className="container"
                  id="formContainer"
                  method="post"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  name="contact"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <fieldset>
                    <legend>Contact Us</legend>
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={updateValue}
                      placeholder="Your Name"
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={updateValue}
                      placeholder="Your Email"
                    />
                    <label htmlFor="contacting" className="contactingLabel">
                      Contacting:
                    </label>
                    <select
                      type="contacting"
                      name="contacting"
                      value={values.contacting}
                      onChange={updateValue}
                      id="contactList"
                    >
                      <option value="WhoToContact">Who Are You Contacting?</option>
                      <option value="Randy">Randy</option>
                      <option value="CJ">CJ</option>
                      <option value="Rhonda">Rhonda</option>
                    </select>
                    <label htmlFor="message" className="messageLabel">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={updateValue}
                      rows="7"
                      placeholder="How can we help you with your insurance needs?"
                    />
                    <button type="submit" className="submitButton" value="Submit">
                      Submit Message
                    </button>
                  </fieldset>
                </form>
              </FormStyles>
            </div>
          </div>
        </ContactStyles>
    </>
  );
}

export const query = graphql`
  query {
    contacts: allSanityContactPage {
    nodes {
      id
      title
      description
      content {
        ... on SanityContactHero {
          id
          image {
            asset {
              id
            }
          }
        }
        ... on SanityContactInfo {
          id
          address
          phone
          title
        }
        ... on SanitySocialLink {
          id
          service
          username
        }
      }
      image {
        asset {
          id
        }
      }
    }
  }
  }
`;
