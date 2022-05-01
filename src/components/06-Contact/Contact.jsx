import React from "react";
import styled from "styled-components";
import bkgPattern from "../../assets/img/bg-pattern-desktop.svg";

const onSubmitHandler = (e) => e.preventDefault();
const ContactForm = styled.div`
  min-height: 80vh;
  width: 80%;
  margin: 0 auto;
  background: url(${bkgPattern}), var(--primary-navy);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 4rem; */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
  border-radius: 2rem;

  div.container {
    width: 90%;
    form {
      display: flex;
      flex-direction: column;
      padding: 2rem;

      label {
        font-size: 1.5rem;
        color: var(--primary-light);
        margin: 1rem;
        padding: .5rem .75rem;
        border-radius: .5rem ;
        text-transform: uppercase;
        text-shadow: 5px 5px 5px rgba(255, 255, 255, 0.35);
        letter-spacing: 2px;
        width: max-content;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
      }
      input:not(:last-child),
      select {
        line-height: 2.2;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--primary-light);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);

        ::placeholder {
          color: var(--primary-navy);
          font-size: 1rem;
          text-transform: uppercase;
          padding-left: 0.75rem;
        }
      }
      input:last-child {
        padding: 1rem 2rem;
        min-width: 20%;
        margin: 1rem auto;
        font-size: 1.5rem;
        color: var(--primary-light);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        background-color: var(--tang);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
        border-radius: 0.75rem;
      }
      input, input:before, input:after {
          outline: none;
      }
      .custom-select {
        
        select {
          margin: 2rem 0;
          background-color: var(--primary-light);
          width: 20rem;
          text-align: center;
          option {
            font-size: 1.1rem;
            color: var(--primary-navy);
            background-color: var(--primary-light);
            text-transform: capitalize;
            line-height: 1.5;
          }
        }
      }
      textarea {
        border-radius: 1rem;
        padding: 2rem 1rem;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactForm id="contact">
      <div className="container">
        <form onClick={onSubmitHandler}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <div className="custom-select">
            <label htmlFor="service">Select a Service</label>
            <select id="service" name="service">
              <option value="Please select "> </option>
              <option value="Social media campaign">
                Social media campaign
              </option>
              <option value="branding & design">Branding &amp; Design</option>
              <option value="web development">Web Development</option>
              <option value="web development">Other</option>
            </select>
          </div>

          <label htmlFor="message">Message</label>
          <textarea
            value=""
            onChange={onSubmitHandler}
            rows="20"
            cols="100"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </ContactForm>
  );
};

export default Contact;