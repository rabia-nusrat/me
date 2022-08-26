import React from "react";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";

export default function About() {
  return (
    <Container
      id="about"
      className="w-full h-screen flex flex-col items-start justify-center  text-white text-left "
    >
      <p className="font-heading font-bold text-6xl">
        About <GradientText>Me.</GradientText>
      </p>
      <p className="w-full lg:w-2/3 font-body font-light text-3xl mt-5 text-justify lg:text-left">
        An Environmental Engineering enthusiast with{" "}
        <GradientText className="font-semibold">
          diverse experience
        </GradientText>{" "}
        of working with companies in environmental sector who likes to get
        challenged; helps companies improve their environmental profile hence
        keeping people, economy, and planet at the heart of everything.
      </p>

      {/* accordion */}
    </Container>
  );
}
