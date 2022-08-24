import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Layout from "../../components/Layout/Layout";
import * as styles from "./contact.module.css";

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
          className={styles.main__form}
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action={`${fsURL}${fsEndpoint}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset className={styles.main__form__fieldset}>
            <label className={styles.main__form_label} htmlFor="inputName">
              name
            </label>
            <input
              className={styles.main__form_input}
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

            <label className={styles.main__form_label} htmlFor="inputEmail">
              email
            </label>
            <input
              className={styles.main__form_input}
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

            <label className={styles.main__form_label} htmlFor="inputMsg">
              message
            </label>
            <textarea
              className={styles.main__form_textarea}
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
              className={styles.moocow}
            />
          </fieldset>

          <button
            className={styles.main__form_submit}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </>
    </Layout>
  );
};

export default ContactPage;
