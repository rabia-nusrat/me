import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";
import pfp from "../images/dp.jpg";

export default function Home() {
  return (
    <div
      id="home"
      className="snap-start w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly"
    >
      <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start justify-center">
        <h1 className={"text-white heading-gradient"}>
          Hello! I'm <br />
          <GradientText className="font-extrabold">Rabia Nusrat</GradientText>
        </h1>
        <p className="text-white text-[25px] font-mono inline-block h-[150px] lg:h-auto">
          <TypeAnimation
            sequence={[
              1000,
              "Evironmental Engineer",
              1000,
              "",
              1000,
              `Tech Enthusiast`,
              1000,
              `Sustainability Specialist`,
              1000,
              `Membrane Technology Expert`,
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed="1"
            className="text-white text-[25px] inline-block"
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
    </div>
  );
}
