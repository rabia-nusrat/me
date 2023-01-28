import React from "react";
import { GradientText } from "../utils/StyledComponents";

import everywaterlogo from "../images/everywater.svg";
import comsatslogo from "../images/exp_logos/comsats copy.png";
import pakvitaelogo from "../images/exp_logos/pakvitae.png";
import spectralogo from "../images/exp_logos/spectra.png";
import nestlelogo from "../images/exp_logos/nestle.png";
import nespaklogo from "../images/exp_logos/nespak.png";
import wwflogo from "../images/exp_logos/wwf.png";
import inspectestlogo from "../images/exp_logos/inspectest.png";
import clim8logo from "../images/exp_logos/1586031178527.jpeg";

const Exp2 = () => {
  return (
    <div
      id="experience"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-start  text-white text-left"
    >
      <h1 className="heading-gradient my-3 lg:mt-24 lg:mb-12">
        <GradientText>Companies </GradientText> I Have Worked With
      </h1>
      <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={everywaterlogo} alt="" className="w-[150px]" />
          <p className="my-4">EVERYWATER</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={comsatslogo} alt="" className="w-[150px]" />
          <p className="my-2 text-center">COMSATS UNIVERSITY LAHORE</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={pakvitaelogo} alt="" className="w-[150px]" />
          <p className="my-2">PAKVITAE</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={spectralogo} alt="" className="w-[150px]" />
          <p className="my-2">SPECTRA MAGAZINE</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={nestlelogo} alt="" className="w-[150px]" />
          <p className="my-2">NESTLE PAKISTAN</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={nespaklogo} alt="" className="w-[150px]" />
          <p className="my-2 text-center">
            NATIONAL ENGINEERING SERVICES PAKISTAN
          </p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={wwflogo} alt="" className="h-[150px]" />
          <p className="my-2 text-center">WWF PAKISTAN</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={inspectestlogo} alt="" className="w-[150px]" />
          <p className="my-2 text-center">INSPECTEST PAKISTAN</p>
        </div>
        <div className="flex flex-col items-center justify-end h-[200px] w-[200px]">
          <img src={clim8logo} alt="" className="w-[150px]" />
          <p className="my-2 text-center">CLIM8.ORG</p>
        </div>
      </div>
    </div>
  );
};

export default Exp2;
