import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GradientText } from "../utils/StyledComponents";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./style.css";
import img from "../images/certificates/1598953915862.jpg";
import img2 from "../images/certificates/1600441072821.jpg";
import img3 from "../images/certificates/1601603646190.jpg";
import img4 from "../images/certificates/1621176520125.jpg";
import img5 from "../images/certificates/1622124375604.jpg";
import img6 from "../images/certificates/1622124375699.jpg";

import img9 from "../images/certificates/CC-6.jpg";
import img10 from "../images/certificates/Certificate-90.JPG";
import img11 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.08 PM (1).jpeg";
import img12 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.08 PM.jpeg";
import img13 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.09 PM.jpeg";
import img14 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.10 PM (1).jpeg";
import img15 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.10 PM.jpeg";
import img16 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.11 PM.jpeg";
import img17 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.13 PM.jpeg";
import img18 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.16 PM.jpeg";
import img19 from "../images/certificates/WhatsApp Image 2022-01-09 at 12.04.17 PM.jpeg";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

const Achievements = () => {
  const images = [
    { img: img, desc: "SPECTRA Summer Internship 2020" },
    { img: img2, desc: "STEM Fellow" },
    { img: img3, desc: "A&WMA Event" },
    { img: img4, desc: "SHayad Sohail Interview" },
    { img: img5, desc: "Laila Kasuri Interview" },
    { img: img6, desc: "Professor Marc Edwards Interview" },
    { img: img9, desc: "Nestle Internship" },
    { img: img10, desc: "Climate Reality Leadership Crops Training" },
    { img: img11, desc: "SSR at FAIDA Foundation" },
    { img: img12, desc: "Global UGRAD-Pakistan" },
    { img: img13, desc: "FAIDA Foundation" },
    { img: img14, desc: "Hult Prize Participant" },
    { img: img15, desc: "Employability Skills Workshop at UET Lahore" },
    { img: img16, desc: "Lahore Science Mela 2019 Participant" },
    { img: img17, desc: "Lahore Science Mela 2018 Participant" },
    { img: img18, desc: "Member of Organizing Committee at Hult Prize" },
    { img: img19, desc: "Employability Skills Workshop by Global UGRAD" },
  ];

  const slides = images.map((item) => {
    <SwiperSlide className="flex flex-col">
      <img src={item.img} alt="img 1" className="h=[500px] w-auto" />
      <p className="bg-gradient p-4 w-full">{item.desc}</p>
    </SwiperSlide>;
  });

  return (
    <div
      id="acheivements"
      className="snap-start w-full min-h-screen flex flex-col items-start justify-start  text-white text-left "
    >
      <h1 className="heading-gradient my-[50px]">
        <GradientText>My Achievements</GradientText>
      </h1>
      <div className="w-full md:w-4/5 xl:w-3/5 h-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
          navigation={true}
          autoplay={true}
        >
          <SwiperSlide className="flex flex-col">
            <img
              src={images[0].img}
              alt="img 1"
              className="h=[500px] w-auto rounded-2xl"
            />
            <p className="bg-gradient p-4 w-full">{images[0].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[1].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[1].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[2].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[2].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[3].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[3].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[4].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[4].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[5].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[5].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[6].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[6].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[7].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[7].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[8].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[8].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img src={images[9].img} alt="img 1" className="h=[500px] w-auto" />
            <p className="bg-gradient p-4 w-full">{images[9].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[10].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[10].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[11].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[11].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[12].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[12].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[13].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[13].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[14].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[14].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[15].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[15].desc}</p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <img
              src={images[16].img}
              alt="img 1"
              className="h=[500px] w-auto"
            />
            <p className="bg-gradient p-4 w-full">{images[16].desc}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
