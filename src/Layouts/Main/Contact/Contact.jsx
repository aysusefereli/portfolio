import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const form = useRef();
  const btn = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tblmpac", "template_to4e66a", form.current, {
        publicKey: "VuLT51HHpG5LZDnnl",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          btn.current.innerText = "Submit";
          alert("email successfully sent check inbox");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section id="contact" className="contactPage">
      <h2 className="contactText">CONTACT WITH ME</h2>
      <div className="contact">
        <img data-aos="fade-right" src="/src/assets/email.png" className="contactImg" />
        <div data-aos="fade-left" className="form-container">
          <form className="form-content" onSubmit={sendEmail} ref={form}>
            <div className="nameAndEmail">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="sender_name"
                  id="sender_name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn" ref={btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
