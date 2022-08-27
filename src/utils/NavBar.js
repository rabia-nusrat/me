import React from "react";

export default function NavBar(props) {
  const setActiveSect = (prop) => (event) => {
    props.activeSectionSetter(prop);
  };

  return (
    <>
      <div className=" bg-black bg-opacity-50 backdrop-blur w-screen h-16 hidden md:flex flex-col items-center fixed bottom-0 z-50 ">
        <div className="w-screen h-[1px] bg-gradient-to-r from-[#007fed] to-[#00dcda]"></div>
        <div className="container mx-auto px-3 flex flex-row items-center justify-between text-white font-light text-lg mt-4 ">
          <a
            href="#home"
            className={props.activeSection === "home" && "font-semibold"}
            onClick={setActiveSect("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={props.activeSection === "about" && "font-semibold"}
            onClick={setActiveSect("about")}
          >
            About
          </a>
          <a
            href="#experience"
            className={props.activeSection === "experience" && "font-semibold"}
            onClick={setActiveSect("experience")}
          >
            Work Experiences
          </a>
          <a
            href="#skillset"
            className={props.activeSection === "skillset" && "font-semibold"}
            onClick={setActiveSect("skillset")}
          >
            Skills
          </a>
          <a
            href="#education"
            className={props.activeSection === "education" && "font-semibold"}
            onClick={setActiveSect("education")}
          >
            Education
          </a>
          <a
            href="#acheivements"
            className={
              props.activeSection === "achievements" && "font-semibold"
            }
            onClick={setActiveSect("achievements")}
          >
            Achievements
          </a>
          <a
            href="#contact"
            className={props.activeSection === "contact" && "font-semibold"}
            onClick={setActiveSect("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
