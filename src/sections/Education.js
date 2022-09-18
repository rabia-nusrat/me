import React from "react";
import uetLogo from "../images/uet-logo.png";
import ssuLogo from "../images/ssu-logo.png";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";
import ImageCard from "../utils/ImageCard";

export default function Education() {
  return (
    <div
      id="education"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-center  text-white text-left "
    >
      <h1 className="heading-gradient my-3 lg:mt-24 lg:mb-12">
        <GradientText>Education and Training</GradientText>
      </h1>
      <div className="w-full flex flex-col xl:flex-row items-center">
        <ImageCard
          className=""
          image={uetLogo}
          heading="University of Engineering & Technology, Lahore"
          date="19th October 2016 - 31st August 2021"
          body="Bachelors in Environmental Engineering"
        />
        <ImageCard
          className=""
          image={ssuLogo}
          heading="Shawnee State University, USA"
          date="1st January, 2019 - 5th May, 2019"
          body="Global UGRAD Semester Exchange Program"
        />
      </div>
    </div>
  );
}
