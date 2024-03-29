import React, { useState } from "react";
import "./App.css";
import Home from "./sections/Home";
import NavBar from "./utils/NavBar";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Container from "./utils/Container";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Magazine from "./sections/Magazine";
import Exp2 from "./sections/Exp2";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const changeActiveSection = (event) => {
    if (window.scrollY === window.innerHeight * 0) {
      setActiveSection("home");
    }
    if (window.scrollY >= window.innerHeight * 1) {
      setActiveSection("about");
    }
    if (window.scrollY >= window.innerHeight * 2) {
      setActiveSection("experience");
    }
  };
  window.addEventListener("scroll", changeActiveSection);

  return (
    <>
      {/* <NavBar
        activeSection={activeSection}
        activeSectionSetter={setActiveSection}
      ></NavBar> */}
      <div className="bg-black w-full flex flex-col">
        <Container>
          <Home />
          <About />
          <Exp2 />
          <Skills />
          <Magazine />
          <Education />
          <Achievements />
          <Contact />
        </Container>
      </div>
    </>
  );
}

export default App;
