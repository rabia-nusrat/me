import React from "react";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";

export default function About() {
  return (
    <div
      id="about"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-center  text-white text-left "
    >
      <h1 className="heading-gradient ">
        About <GradientText>Me</GradientText>
      </h1>
      <div className="w-full lg:w-2/3 font-body font-light text-white text-2xl  mt-5 text-left">
        <p className="inline-block">
          An Environmental Engineering enthusiast with
        </p>{" "}
        <GradientText className="font-semibold inline-block">
          diverse experience
        </GradientText>{" "}
        <p className="inline">
          of working with companies in environmental sector who likes to get
          challenged; helps companies improve their environmental profile hence
          keeping people, economy, and planet at the heart of everything.
        </p>
      </div>

      {/* accordion */}
    </div>
  );
}
