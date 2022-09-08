import React from "react";
import {
  IconAward,
  IconBooks,
  IconBriefcase,
  IconFlask,
  IconHome,
  IconInfoCircle,
  IconSend,
} from "@tabler/icons";

const Sidebar = (props) => {
  const setActiveSect = (prop) => (event) => {
    props.activeSectionSetter(prop);
  };
  return (
    <div className="hidden md:flex h-screen flex-row items-center text-white">
      <div className="h-4/5 flex flex-col items-start justify-evenly px-[50px]">
        <a
          href="#home"
          className={props.activeSection === "home" && "font-semibold"}
          onClick={setActiveSect("home")}
        >
          <div className="flex flex-row items-center">
            <IconHome className="mr-2" />
            <p>Home</p>
          </div>
        </a>
        <a
          href="#about"
          className={props.activeSection === "about" && "font-semibold"}
          onClick={setActiveSect("about")}
        >
          <div className="flex flex-row items-center">
            <IconInfoCircle className="mr-2" />
            <p>About</p>
          </div>
        </a>
        <a
          href="#experience"
          className={props.activeSection === "experience" && "font-semibold"}
          onClick={setActiveSect("experience")}
        >
          <div className="flex flex-row items-center">
            <IconBriefcase className="mr-2" />
            <p>Experience</p>
          </div>
        </a>
        <a
          href="#skillset"
          className={props.activeSection === "skillset" && "font-semibold"}
          onClick={setActiveSect("skillset")}
        >
          <div className="flex flex-row items-center">
            <IconFlask className="mr-2" />
            <p>Skills</p>
          </div>
        </a>
        <a
          href="#education"
          className={props.activeSection === "education" && "font-semibold"}
          onClick={setActiveSect("education")}
        >
          <div className="flex flex-row items-center">
            <IconBooks className="mr-2" />
            <p>Education</p>
          </div>
        </a>
        <a
          href="#acheivements"
          className={props.activeSection === "achievements" && "font-semibold"}
          onClick={setActiveSect("achievements")}
        >
          <div className="flex flex-row items-center">
            <IconAward className="mr-2" />
            <p>Achievements</p>
          </div>
        </a>
        <a
          href="#contact"
          className={props.activeSection === "contact" && "font-semibold"}
          onClick={setActiveSect("contact")}
        >
          <div className="flex flex-row items-center">
            <IconSend className="mr-2" />
            <p>Contact</p>
          </div>
        </a>
      </div>
      <div className="w-[1px] h-screen bg-gradient-to-l from-[#007fed] to-[#00dcda]"></div>
    </div>
  );
};

export default Sidebar;
