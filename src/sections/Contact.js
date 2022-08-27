import React, { useReducer, useState } from "react";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";
import { TextField, TextArea } from "../utils/FormComponents";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const setNameHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const setEmailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const [emailError, setEmailError] = useState("");
  const [company, setCompany] = useState("");
  const setCompanyHandler = (event) => {
    event.preventDefault();
    setCompany(event.target.value);
  };
  const [phone, setPhone] = useState("");
  const setPhoneHandler = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };
  const [message, setMessage] = useState("");
  const setMessageHandler = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };
  const [messageError, setMessageError] = useState("");

  const validateData = () => {
    console.log("validating...");
    let isValid = true;
    if (name.trim().length === 0) {
      setNameError("border-red-500");
      isValid = false;
    } else {
      setNameError("");
    }
    if (message.trim().length === 0) {
      setMessageError("border-red-500");
      isValid = false;
    } else {
      setMessageError("");
    }
    if (
      email.trim().length === 0 ||
      !email.trim().includes("@") ||
      !email.trim().includes(".")
    ) {
      setEmailError("border-red-500");
      isValid = false;
    } else {
      setEmailError("");
    }
    return isValid;
  };
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_u0o4lhn",
        "template_p5hi9fe",
        event.target,
        "hfUiQboGpNG5aZa_i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
  };
  return (
    <Container
      id="contact"
      className="w-full min-h-screen flex flex-col items-start justify-start py-[100px]  text-white text-left "
    >
      <p className="font-heading font-bold text-5xl my-3 lg:mt-24 lg:mb-12">
        <GradientText>Contact me.</GradientText>
      </p>
      <div className="w-full md:w-auto flex flex-col">
        <div className="flex flex-col md:flex-row">
          <TextField
            type="text"
            name="name"
            className={"md:mr-5 " + nameError}
            placeholder="Name *"
            required={true}
            value={name}
            onChange={setNameHandler}
            onBlur={validateData}
          />
          <TextField
            type="email"
            name="email"
            placeholder="Email ID *"
            className={emailError}
            required={true}
            value={email}
            onChange={setEmailHandler}
            onBlur={validateData}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <TextField
            type="text"
            name="company"
            value={company}
            className={"md:mr-5"}
            placeholder="Company"
            required={false}
            onChange={setCompanyHandler}
            onBlur={validateData}
          />
          <TextField
            type="text"
            name="phnum"
            value={phone}
            placeholder="Phone Number"
            required={false}
            onChange={setPhoneHandler}
            onBlur={validateData}
          />
        </div>
        <TextArea
          name="message"
          value={message}
          className={messageError}
          placeholder="Your message..."
          required={true}
          onChange={setMessageHandler}
          onBlur={validateData}
        />
        <button
          className="w-full md:w-32 h-12  my-5 rounded-full  bg-gradient-to-r from-[#007fed] to-[#00dcda] text-xl font-bold font-heading transition-all"
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
    </Container>
  );
}
