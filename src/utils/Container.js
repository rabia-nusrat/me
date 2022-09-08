import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Container(props) {
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
    <div className="w-full h-screen flex flex-row items-center justify-start">
      <Sidebar
        activeSection={activeSection}
        activeSectionSetter={setActiveSection}
      />

      <div
        id={props.id}
        className={`w-full h-screen snap-start overflow-y-scroll px-[30px] md:px-[100px] ${props.className} snap snap-y snap-mandatory scroll-smooth`}
      >
        {props.children}
      </div>
    </div>
  );
}
