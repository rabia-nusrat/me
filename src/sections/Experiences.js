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
    <Container
      id="experience"
      className="w-full min-h-screen flex flex-col items-start justify-start  text-white text-left"
    >
      <p className="font-heading font-bold text-5xl lg:text-6xl my-3 lg:mt-24 lg:mb-12">
        My <GradientText>Work Experiences.</GradientText>
      </p>
      <div className="w-full bg-black">
        <Accordion
          open={open === 1}
          onClick={() => handleOpen(1)}
          className="bg-black"
        >
          <AccordionHeader className="text-2xl lg:text-3xl font-heading font-bold text-white text-left hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              EVERYWATER {"("}PVT{")"} LTD{" "}
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Senior Research Engineer </pre>- 1st April, 2022 to
                    Current
                  </span>
                </p>
              </li>
              <li className="flex items-center text-[22px] my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
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
        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              COMSATS UNIVERSITY
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Research Assistant </pre>
                  </span>
                  - 1st August, 2021 to Current
                </p>
              </li>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Teaching Assitant </pre>
                  </span>
                  - 1st August, 2021 to Current
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              PAKVITAE
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Engineering Intern </pre>
                  </span>
                  - 1st November, 2020 to 1st September, 2021
                </p>
              </li>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Teaching Assitant </pre>
                  </span>
                  - 1st August, 2021 to Current
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              SPECTRA MAGAZINE
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Writing Intern </pre>
                  </span>
                  - 1st July, 2020 to 7th August, 2021
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} onClick={() => handleOpen(5)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              NESTLÉ PAKISTAN
              <span className="font-light"> - Sheikhupura, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Project Intern </pre>
                  </span>
                  - 9th July, 2019 to 15th August, 2019
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} onClick={() => handleOpen(6)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              NATIONAL ENGINEERING SERVICES PAKISTAN
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Engineering Intern </pre>
                  </span>
                  - 16th July, 2019 to 7th August, 2019
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} onClick={() => handleOpen(7)}>
          <AccordionHeader className="text-2xl lg:text-3xl text-left font-heading font-bold text-white hover:text-blue-gray-100">
            {/* <img src={everywaterlogo} alt="" height="100%" /> */}
            <p>
              WWF — PAKISTAN
              <span className="font-light"> - Lahore, Pakistan</span>
            </p>
          </AccordionHeader>
          <AccordionBody className="font-body font-light text-white">
            <ul>
              <li className="flex items-center text-2xl my-2">
                <Bullet />
                <p>
                  <span className="font-semibold">
                    <pre>Associate Intern </pre>
                  </span>
                  - 1st June, 2018 to 18th July, 2018
                </p>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </Container>
  );
}
