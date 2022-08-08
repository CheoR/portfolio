import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Layout from "../../components/layout";
// import styles from "./contact.module.css";

const fsURL = process.env.GATSBY_FORMSPREE_URL;
const fsEndpoint = process.env.GATSBY_FORMSPREE_ENDPOINT;

const ContactPage = () => {
  const [state, handleSubmit] = useForm(fsEndpoint);
  if (state.succeeded) {
    return (
      <Layout pageTitle="Contact">
        <p>Thanks you for your request!</p>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Contact">
      <>
        <h2>get in touch</h2>
        <form
          className="main__form"
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action={`${fsURL}${fsEndpoint}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset className="main__form__fieldset">
            <label htmlFor="inputName">name</label>
            <input
              name="inputName"
              id="inputName"
              type="text"
              placeholder="First and Last"
            />
            <ValidationError
              prefix="Name"
              field="inputName"
              errors={state.errors}
            />

            <label htmlFor="inputEmail">email</label>
            <input
              name="inputEmail"
              id="inputEmail"
              type="email"
              placeholder="name@domain.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="inputMsg">message</label>
            <textarea
              name="inputMsg"
              id="inputMsg"
              required=""
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="inputMsg"
              errors={state.errors}
            />

            <input
              id="email-subject"
              type="text"
              name="_gotcha"
              value="Contact Form Submission"
              className="moocow"
            />
          </fieldset>
          <button className="submit" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </>
    </Layout>
  );
};

export default ContactPage;
