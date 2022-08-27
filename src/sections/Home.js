import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";
import pfp from "../images/pfp.jpg";

export default function Home() {
  return (
    <Container
      id="home"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly"
    >
      <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start justify-center">
        <p className={"text-white text-[50px]  font-heading font-bold"}>
          Hello! I'm <br />
          <GradientText className="font-extrabold">Rabia Nusrat</GradientText>
        </p>
        <p className="text-white text-[30px] font-mono inline-block h-[150px] lg:h-auto">
          I am{" "}
          <TypeAnimation
            sequence={[
              1000,
              "an Evironmental Engineer",
              1000,
              "",
              1000,
              `a Tech Enthusiast`,
              1000,
              "",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed="1"
            className="text-white text-[30px] inline-block"
          />
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        <div className="w-[350px] h-[350px] bg-blue-gray-900 rounded-full overflow-hidden border-[10px] border-blue-gray-900">
          <div className="w-full h-full flex items-center justify-center">
            <img src={pfp} alt="" className="h-full" />
          </div>
        </div>
      </div>
    </Container>
  );
}
