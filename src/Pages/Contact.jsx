import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  function formSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqw7mjk",
        "template_x9c4cwp",
        form.current,
        "_XxZFjhVz-3kmaHNt"
      )
      .then((res) =>
        toast.success("Message sent Successfully", {
          position: "top-center",
          autoClose: 1000,
        })
      )
      .catch((err) =>
        toast.error("Something went wrong", {
          position: "bottom-center",
          autoClose: 1000,
        })
      );
    e.target.reset();
  }
  return (
    <div className="contactSec" id="contact">
      <div className="container">
        <div className="contact--det">
          <h1>
            Contact <span>.</span>{" "}
          </h1>
          <h2>IFIC Tower, 61 Purana Paltan GPO Box: 2229, Dhaka - 1000</h2>
          <span>+880 123456789</span>
          <br />
          <br />
          <br />
          <small>sarwaralam10923@gmail.com</small>
        </div>
        <div className="contact--form">
          <h2>
            Let's grab a coffee and jump on conversation{" "}
            <span>chat with me.</span>
          </h2>

          <form ref={form} onSubmit={formSubmit}>
            <input
              type="text"
              name="user"
              id=""
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="mail"
              id=""
              placeholder="Your Email"
              required
            />
            <textarea rows="100" placeholder="Message" name="query" required />

            <button className="link--btn" type="submit">
              Contact Me
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
