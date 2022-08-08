import * as React from "react";
import Layout from "../../components/layout";

import { useForm, ValidationError } from "@formspree/react";

import styles from "./contact.module.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mzbyerkv");
  if (state.succeeded) {
    return <p>Thanks you for your request! </p>;
  }

  return (
    <Layout pageTitle="Contact">
      <>
        <h2>get in touch</h2>
        <form
          className="main__form"
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/mzbyerkv"
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset className="main__form__fieldset">
            <label for="inputName">name</label>
            <input name="inputName" id="inputName" type="text" />
            <ValidationError
              prefix="Name"
              field="inputName"
              errors={state.errors}
            />

            <label for="inputEmail">email</label>
            <input name="inputEmail" id="inputEmail" type="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label for="inputMsg">message</label>
            <textarea name="inputMsg" id="inputMsg" required=""></textarea>
            <ValidationError
              prefix="Message"
              field="inputMsg"
              errors={state.errors}
            />

            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
            <input type="text" name="_gotcha" className="moocow" />
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

//   <form
//   >
//   <fieldset id="fs-frm-inputs">
//     <label for="full-name">Full Name</label>
//     <input type="text" name="name" id="full-name" placeholder="First and Last" required="">

//     <label for="email-address">Email Address</label>
//     <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
//     <label for="message">Message</label>
//     <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
//     <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
//   </fieldset>
//   <input type="submit" value="Submit">
// </form>

//         <form

//   >
//     <label htmlFor="email">Email Address</label>
//     <input id="email" type="email" name="email" />
//     <ValidationError prefix="Email" field="email" errors={state.errors} />

//     <textarea id="message" name="message" />
//     <ValidationError
//       prefix="Message"
//       field="message"
//       errors={state.errors}
//     />

//   </form>
