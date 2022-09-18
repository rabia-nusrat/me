import React, { useState } from "react";
import everywaterlogo from "../images/everywater.svg";
import Container from "../utils/Container";
import { GradientText } from "../utils/StyledComponents";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Bullet from "../utils/Bullet";

export default function Experiences() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      id="experience"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-start  text-white text-left"
    >
      <h1 className="heading-gradient my-3 lg:mt-24 lg:mb-12">
        My <GradientText>Work Experience.</GradientText>
      </h1>
      <div className="w-full lg:w-5/6 bg-black">
        <Accordion
          open={open === 1}
          onClick={() => handleOpen(1)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              EVERYWATER {"("}PVT{")"} LTD{" "}
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-xl lg:text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Senior Research Engineer </pre>
                  </span>
                  - 1st April, 2022 to Current
                </p>
              </li>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Research Engineer </pre>
                  </span>
                  - 1st October, 2021 to 1st March, 2022
                </p>
              </li>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Graduate Engineer Trainee </pre>
                  </span>
                  - 1st August, 2021 to 1st October, 2021
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          onClick={() => handleOpen(2)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              COMSATS UNIVERSITY
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Research Assistant </pre>
                  </span>
                  - 1st August, 2021 to Current
                </p>
              </li>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Teaching Assitant </pre>
                  </span>
                  - 1st August, 2021 to Current
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          onClick={() => handleOpen(3)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              PAKVITAE
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Engineering Intern </pre>
                  </span>
                  - 1st November, 2020 to 1st September, 2021
                </p>
              </li>
              
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          onClick={() => handleOpen(4)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              SPECTRA MAGAZINE
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Writing Intern </pre>
                  </span>
                  - 1st July, 2020 to 7th August, 2021
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          onClick={() => handleOpen(5)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              NESTLÉ PAKISTAN
              <span className="font-light"> - Sheikhupura, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Project Intern </pre>
                  </span>
                  - 9th July, 2019 to 15th August, 2019
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 6}
          onClick={() => handleOpen(6)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              NATIONAL ENGINEERING SERVICES PAKISTAN
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Engineering Intern </pre>
                  </span>
                  - 16th July, 2019 to 7th August, 2019
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 7}
          onClick={() => handleOpen(7)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              WWF — PAKISTAN
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Associate Intern </pre>
                  </span>
                  - 1st June, 2018 to 18th July, 2018
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 8}
          onClick={() => handleOpen(8)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              INSPECTEST (PVT) LTD (DESCON HEADQUARTERS)
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>QA {"&"} HSE Intern </pre>
                  </span>
                  - 1st Jan, 2018 to 14th Jan, 2018
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 9}
          onClick={() => handleOpen(9)}
          className="bg-black border-b-[1px] border-b-blue-gray-900"
        >
          <AccordionHeader className="text-xl lg:text-2xl font-heading font-semibold text-white text-left hover:text-blue-gray-100 border-b-0">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              CLIM8.ORG
              <span className="font-light"> - Islamabad, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold inline-block">
                    <pre>Virtual Intern </pre>
                  </span>
                  - 1st May, 2018 to 12tt May, 2018
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
