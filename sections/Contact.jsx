import React, { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Pricing = () => {
  const form = useRef();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwikkkg",
        "template_qzq2fjy",
        form.current,
        "kff8pfyEAzcn03zQA"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1>
        What are you waiting for?
        <br />
        {"Let's"} work together!
      </h1>
      <div className="contact-container">
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="contact-wrapper"
        >
          <div className="details-container">
            <h3>Our details</h3>
            <div className="contact-details" style={{}}>
              <span style={{ paddingRight: "1.5em" }}>
                <MdEmail />
              </span>
              <a
                href="mailto:hellomakersdev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                hellomakersdev@gmail.com
              </a>
            </div>
            <div className="contact-details">
              <span style={{ paddingRight: "1.5em" }}>
                <BsTelephoneFill />
              </span>
              <a href="tel:+2772-480-2452">072 480 2452</a>
            </div>
          </div>
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail}>
              <h3 style={{ margin: "0 0 2rem 0" }}>Contact Us</h3>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
              />
              <textarea name="message" placeholder="Enter your message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
