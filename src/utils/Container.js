import React from "react";

export default function Container(props) {
  return (
    <div
      id={props.id}
      className={`container mx-auto snap-start px-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
