import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import classes from "../styles/Contact.module.css";

const Contact = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_htwf7j5",
        "template_eicjv4u",
        form.current,
        "V3vd-movOOGSjSLDY"
      )
      .then((result) => alert("Message sent successfully."))
      .catch((e) => console.log(e));
  };
  return (
    <div className={classes.flex} id="contact">
      <h1 className={classes.heading}>Contact</h1>
      <div className={classes.border}>
        <div className={classes.box}>
          <p className={classes.heading2}>Send me a message</p>
          <form onSubmit={submitHandler} ref={form} className={classes.form}>
            <div>
              <div className={classes.user}>
                <div className={classes.input}>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="itish"
                    name="user_name"
                    required
                  />
                </div>
                <div className={classes.input}>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className={classes.input}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={10} required name="message" />
              </div>
            </div>
            <div className={classes.buttonBox}>
              <button className={classes.button}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
