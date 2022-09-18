import React from "react";
import SkillCard from "../utils/SkillCard";
import { GradientText } from "../utils/StyledComponents";
import { IconFlask2, IconRipple } from "@tabler/icons";
import waterSupply from "../images/500h/water-supply.png";
import waterQuality from "../images/500h/water-quality.png";
import wasteWater from "../images/500h/waste-water.png";
import carbonFoot from "../images/500h/carbon-footprint.png";
import microscope from "../images/500h/microscope.png";
import sustain from "../images/500h/sustainable.png";
import hollowFiber from "../images/500h/hollow-longevity.png";
import flatMembrane from "../images/500h/flat-longevity.png";

const Skills = () => {
  return (
    <div
      id="skillset"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-start  text-white text-left "
    >
      <h1 className="heading-gradient mt-[50px]">
        <GradientText>Skills</GradientText>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-[30px]">
        <SkillCard skill={"Water Supply Engineering"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={waterSupply} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Water Quality Assurance"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={waterQuality} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Wastewater Engineering"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={wasteWater} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Carbon Footprint Calculations"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={carbonFoot} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Scanning Electron Microscopy"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={microscope} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Sustainability Reporting"}>
          <div className="w-[200px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={sustain} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Hollow-fiber Membrane Longevity Testing"}>
          <div className="w-[300px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={hollowFiber} alt="" />
          </div>
        </SkillCard>
        <SkillCard skill={"Flat sheet Membare Testing"}>
          <div className="w-[300px] relative bottom-[-20px] right-[-30px] opacity-80">
            <img src={flatMembrane} alt="" />
          </div>
        </SkillCard>
      </div>
    </div>
  );
};

export default Skills;
