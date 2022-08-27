import React from "react";

export default function ImageCard(props) {
  return (
    <div className="w-full h-auto border-[1px] rounded-2xl my-5 xl:m-5 flex flex-col md:flex-row justify-start items-center">
      <div className="w-1/2 md:w-1/3 m-5">
        <img src={props.image} alt="" width={"100%"} />
      </div>
      <div className="hidden md:block w-[1px] h-40 bg-blue-gray-800 "></div>
      <div className="block md:hidden h-[1px] w-3/4 bg-blue-gray-800 "></div>
      <div className="md:w-2/3 py-8 flex flex-col items-center md:items-start justify-start m-5">
        <p className="text-2xl font-heading text-center md:text-left font-semibold">
          {props.heading}
        </p>
        <p className="text-lg font-light text-center md:text-left my-3">
          {props.date}
        </p>
        <p className="text-2xl font-body text-center md:text-left font-medium">
          {props.body}
        </p>
      </div>
    </div>
  );
}
