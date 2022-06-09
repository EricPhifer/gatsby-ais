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
  .upper {
    text-transform: uppercase;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .left {
    width: 45%;
    height: 433px;
    padding: 5rem;
    align-items: center;
  }
  .right {
    width: 45%;
    height: 400px;
  }
  h1 {
    text-align: center;
  }
  .content {
    max-width: 375px;
    margin-top: 2rem;
    font-size: 2rem;
    text-align: justify;
    p {
      padding-bottom: 1rem;
    }
    .p3 {
      background-color: lightgray;
      padding: 1rem;
    }
  }
  .address {
    max-width: 375px;
    margin-top: 2rem;
    text-align: center; 
    h3 {
      font-size: 2.5rem;
    }
  }
  .mapContainer {
    margin-top: 22rem;
    position: relative;
    iframe {
      width: 100%;
      height: 450px;
      border: none;
    }
  }
  .callContainer {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    .tagline {
      max-width: 260px;
      margin: 0 auto 2rem;
      font-size: 3rem;
    }
    .phone {
       font-weight: bold;
       font-size: 2.5rem;
       &:hover {
         color: var(--blue);
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const TabletContactStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 981px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  position: relative;
  min-height: 100vh;
  padding-top: 18rem;
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
  .left {
    width: 45%;
    height: 433px;
    padding: 5rem;
    align-items: center;
  }
  .right {
    width: 45%;
    height: 400px;
  }
  h1 {
    text-align: center;
  }
  .content {
    max-width: 375px;
    margin-top: 2rem;
    font-size: 2rem;
    text-align: justify;
    p {
      padding-bottom: 1rem;
    }
    .p3 {
      background-color: lightgray;
      padding: 1rem;
    }
  }
  .address {
    max-width: 375px;
    margin-top: 2rem;
    text-align: center; 
    h3 {
      font-size: 2.5rem;
    }
  }
  .mapContainer {
    margin-top: 5rem;
    position: relative;
    iframe {
      width: 100%;
      height: 450px;
      border: none;
    }
  }
  .callContainer {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    .tagline {
      max-width: 260px;
      margin: 0 auto 2rem;
      font-size: 3rem;
    }
    .phone {
       font-weight: bold;
       font-size: 2.5rem;
       &:hover {
         color: var(--blue);
      }
    }
  }
`;

const MobileContactStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  position: relative;
  min-height: 100vh;
  padding-top: 18rem;
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
  .left {
    width: 45%;
    height: 433px;
    padding: 5rem;
    align-items: center;
  }
  .right {
    width: 45%;
    height: 400px;
  }
  h1 {
    text-align: center;
  }
  .content {
    max-width: 375px;
    margin: 2rem 1.5rem 0;
    font-size: 2rem;
    text-align: justify;
    p {
      padding-bottom: 1rem;
    }
    .p3 {
      background-color: lightgray;
      padding: 1rem;
    }
  }
  .address {
    max-width: 375px;
    margin-top: 2rem;
    text-align: center; 
    h3 {
      font-size: 2.5rem;
    }
  }
  .mapContainer {
    margin-top: 5rem;
    position: relative;
    iframe {
      width: 100%;
      height: 450px;
      border: none;
    }
  }
  .callContainer {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    .tagline {
      max-width: 260px;
      margin: 0 auto 2rem;
      font-size: 3rem;
    }
    .phone {
       font-weight: bold;
       font-size: 2.5rem;
       &:hover {
         color: var(--blue);
      }
    }
  }
`;

const FormStyles = styled.div`
  margin: 0 auto;
  padding: 5rem;
  position: relative;
  display: flex;
  background: var(--black);
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
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
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  .contactmethodLabel {
    width: 100%;
    display: inline-flex;
    color: var(--white);
    align-items: center;
    padding-left: 1rem;
    span {
      padding-right: 2rem;
    }
    label {
      display: flex;
      span {
        padding: 0.5rem;
      }
    }
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
    font-size: 2rem;
    font-weight: bold;
    &:hover {
      background: var(--white);
      color: var(--green);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
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
  /* Hide menu on small screens */
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const TabletFormStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  margin: 0 auto;
  padding: 5rem;
  position: relative;
  display: flex;
  background: var(--black);
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
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
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  .contactmethodLabel {
    width: 100%;
    display: inline-flex;
    color: var(--white);
    align-items: center;
    padding-left: 1rem;
    span {
      padding-right: 2rem;
    }
    label {
      display: flex;
      span {
        padding: 0.5rem;
      }
    }
  }
  select,
  button {
    width: 98%;
  }
  select {
    color: var(--gray);
  }
  .submitButton {
    max-width: 500px;
    margin: 1.5rem auto;
    background: var(--green);
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    &:hover {
      background: var(--white);
      color: var(--green);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
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

const MobileFormStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  display: flex;
  background: var(--black);
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
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
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  input[type="radio"] {
    min-width: 15px;
  }
  .contactmethodLabel {
    width: 100%;
    display: inline-flex;
    color: var(--white);
    align-items: center;
    padding-left: 0.5rem;
    label {
      display: flex;
      span {
        padding: 0.5rem;
      }
    }
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
    font-size: 2rem;
    font-weight: bold;
    &:hover {
      background: var(--white);
      color: var(--green);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
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
  const cta = data.cta.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    contactday: '',
    contacttime: '',
    contactmethod: '',
    message: '',
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
              <div className='left flex'>
                {contacts.map((contact) => (
                  <div className="content" key={contact.id}>
                    <p className='p1'>{contact.firstparagraph}</p>
                    <p className='p2'>{contact.secondparagraph}</p>
                    <p className='p3'>{contact.thirdparagraph}</p>
                  </div>
                ))}
                {cta.map((call) => (
                  <div className="callContainer" key={call.id}>
                    <p className="tagline upper">
                      {call.tagline}
                    </p>
                    <a href={`tel:${call.phone}`} className="phone">
                      {call.phone}
                    </a>
                  </div>
                ))}
                {contacts.map((c) => (
                  <div className="address" key={c.id}>
                    <h3>{c.streetaddress}</h3>
                    <h3>{c.cityaddress}</h3>
                  </div>
                ))}
              </div>
              <div className="contactInfo right">
                <h1>Contact Us</h1>
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
                      <legend>Your Information</legend>
                      <label htmlFor="name" className="nameLabel">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={updateValue}
                        placeholder="Full Name"
                        className='required'
                      />
                      <label htmlFor="email" className="emailLabel">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={updateValue}
                        placeholder="Email Address"
                        className='required'
                      />
                      <label htmlFor="phone" className="phoneLabel">
                        Phone Number
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        id="phone"
                        value={values.phone}
                        onChange={updateValue}
                        placeholder="Phone Number"
                      />
                      <label htmlFor="contactday" className="contactdayLabel">
                        Contact Day:
                      </label>
                      <select
                        type="contactday"
                        name="contactday"
                        value={values.contactday}
                        onChange={updateValue}
                        id="contactDay"
                      >
                        <option value="ContactTime">Best day to contact you...</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                      </select>
                      <label htmlFor="contactday" className="contactdayLabel">
                        Contact Time:
                      </label>
                      <select
                        type="contacttime"
                        name="contacttime"
                        value={values.contacttime}
                        onChange={updateValue}
                        id="contactTimes"
                      >
                        <option value="WhoToContact">Best time to contact you...</option>
                        <option value="8-9am">8-9am</option>
                        <option value="9-10am">9-10am</option>
                        <option value="10-11am">10-11am</option>
                        <option value="12-1pm">12-1pm</option>
                        <option value="1-2pm">1-2pm</option>
                        <option value="2-3pm">2-3pm</option>
                        <option value="3-4pm">3-4pm</option>
                        <option value="4-5pm">4-5pm</option>
                      </select>
                      <label htmlFor='contactmethod' className='contactmethodLabel'>
                        <span>Please contact me via:</span>
                        <label><span>Email</span>
                        <input type="radio" id="emailmethod" name="contactmethod" value="Email" />
                          </label>                     
                        <label><span>Phone</span>
                        <input type="radio" id="emailmethod" name="contactmethod" value="Phone" />
                          </label>                     
                      </label>
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
                  <p className='tomato'>Required fields</p>
                </FormStyles>
              </div>
            </div>
          <div className='mapContainer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.753386369639!2d-108.55890598436525!3d39.066533944561094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c68f4f11b93%3A0xdf1f6524a186a19!2sActive%20Insurance%20Solutions!5e0!3m2!1sen!2sus!4v1654626606979!5m2!1sen!2sus" />
          </div>
        </ContactStyles>
        <TabletContactStyles>
          <div className="contactContainer flex">
            <div className="contactInfo">
              <h1>Contact Us</h1>
              <TabletFormStyles>
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
                    <legend>Your Information</legend>
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={updateValue}
                      placeholder="Full Name"
                      className='required'
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={updateValue}
                      placeholder="Email Address"
                      className='required'
                    />
                    <label htmlFor="phone" className="phoneLabel">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={updateValue}
                      placeholder="Phone Number"
                    />
                    <label htmlFor="contactday" className="contactdayLabel">
                      Contact Day:
                    </label>
                    <select
                      type="contactday"
                      name="contactday"
                      value={values.contactday}
                      onChange={updateValue}
                      id="contactDay"
                    >
                      <option value="ContactTime">Best day to contact you...</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <label htmlFor="contactday" className="contactdayLabel">
                      Contact Time:
                    </label>
                    <select
                      type="contacttime"
                      name="contacttime"
                      value={values.contacttime}
                      onChange={updateValue}
                      id="contactTimes"
                    >
                      <option value="WhoToContact">Best time to contact you...</option>
                      <option value="8-9am">8-9am</option>
                      <option value="9-10am">9-10am</option>
                      <option value="10-11am">10-11am</option>
                      <option value="12-1pm">12-1pm</option>
                      <option value="1-2pm">1-2pm</option>
                      <option value="2-3pm">2-3pm</option>
                      <option value="3-4pm">3-4pm</option>
                      <option value="4-5pm">4-5pm</option>
                    </select>
                    <label htmlFor='contactmethod' className='contactmethodLabel'>
                      <span>Please contact me via:</span>
                      <label><span>Email</span>
                      <input type="radio" id="emailmethod" name="contactmethod" value="Email" />
                        </label>                     
                      <label><span>Phone</span>
                      <input type="radio" id="emailmethod" name="contactmethod" value="Phone" />
                        </label>                     
                    </label>
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
                <p className='tomato'>Required fields</p>
              </TabletFormStyles>
            </div>
            <div className='flex'>
              {contacts.map((contact) => (
                <div className="content" key={contact.id}>
                  <p className='p1'>{contact.firstparagraph}</p>
                  <p className='p2'>{contact.secondparagraph}</p>
                  <p className='p3'>{contact.thirdparagraph}</p>
                </div>
              ))}
              {cta.map((call) => (
                <div className="callContainer" key={call.id}>
                  <p className="tagline upper">
                    {call.tagline}
                  </p>
                  <a href={`tel:${call.phone}`} className="phone">
                    {call.phone}
                  </a>
                </div>
              ))}
              {contacts.map((c) => (
                <div className="address" key={c.id}>
                  <h3>{c.streetaddress}</h3>
                  <h3>{c.cityaddress}</h3>
                </div>
              ))}
            </div>
          </div>
        <div className='mapContainer'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.753386369639!2d-108.55890598436525!3d39.066533944561094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c68f4f11b93%3A0xdf1f6524a186a19!2sActive%20Insurance%20Solutions!5e0!3m2!1sen!2sus!4v1654626606979!5m2!1sen!2sus" />
        </div>
        </TabletContactStyles>
        <MobileContactStyles>
          <div className="contactContainer flex">
            <div className="contactInfo">
              <h1>Contact Us</h1>
              <MobileFormStyles>
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
                    <legend>Your Information</legend>
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={updateValue}
                      placeholder="Full Name"
                      className='required'
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={updateValue}
                      placeholder="Email Address"
                      className='required'
                    />
                    <label htmlFor="phone" className="phoneLabel">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={updateValue}
                      placeholder="Phone Number"
                    />
                    <label htmlFor="contactday" className="contactdayLabel">
                      Contact Day:
                    </label>
                    <select
                      type="contactday"
                      name="contactday"
                      value={values.contactday}
                      onChange={updateValue}
                      id="contactDay"
                    >
                      <option value="ContactTime">Best day to contact you...</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <label htmlFor="contactday" className="contactdayLabel">
                      Contact Time:
                    </label>
                    <select
                      type="contacttime"
                      name="contacttime"
                      value={values.contacttime}
                      onChange={updateValue}
                      id="contactTimes"
                    >
                      <option value="WhoToContact">Best time to contact you...</option>
                      <option value="8-9am">8-9am</option>
                      <option value="9-10am">9-10am</option>
                      <option value="10-11am">10-11am</option>
                      <option value="12-1pm">12-1pm</option>
                      <option value="1-2pm">1-2pm</option>
                      <option value="2-3pm">2-3pm</option>
                      <option value="3-4pm">3-4pm</option>
                      <option value="4-5pm">4-5pm</option>
                    </select>
                    <label htmlFor='contactmethod' className='contactmethodLabel'>
                      <span>Please contact me via:</span>
                      <label><span>Email</span>
                      <input type="radio" id="emailmethod" name="contactmethod" value="Email" />
                        </label>                     
                      <label><span>Phone</span>
                      <input type="radio" id="emailmethod" name="contactmethod" value="Phone" />
                        </label>                     
                    </label>
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
                <p className='tomato'>Required fields</p>
              </MobileFormStyles>
            </div>
            <div className='flex'>
              {contacts.map((contact) => (
                <div className="content" key={contact.id}>
                  <p className='p1'>{contact.firstparagraph}</p>
                  <p className='p2'>{contact.secondparagraph}</p>
                  <p className='p3'>{contact.thirdparagraph}</p>
                </div>
              ))}
              {cta.map((call) => (
                <div className="callContainer" key={call.id}>
                  <p className="tagline upper">
                    {call.tagline}
                  </p>
                  <a href={`tel:${call.phone}`} className="phone">
                    {call.phone}
                  </a>
                </div>
              ))}
              {contacts.map((c) => (
                <div className="address" key={c.id}>
                  <h3>{c.streetaddress}</h3>
                  <h3>{c.cityaddress}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className='mapContainer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.753386369639!2d-108.55890598436525!3d39.066533944561094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c68f4f11b93%3A0xdf1f6524a186a19!2sActive%20Insurance%20Solutions!5e0!3m2!1sen!2sus!4v1654626606979!5m2!1sen!2sus" />
          </div>
        </MobileContactStyles>
    </>
  );
}

export const query = graphql`
  query {
    contacts:  allSanityContactPageContent {
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
`;
