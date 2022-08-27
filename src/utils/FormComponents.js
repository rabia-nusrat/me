import React from "react";

export function TextField(props) {
  return (
    <input
      type={props.type}
      className={`form-textarea bg-black w-full md:w-[350px] h-16 text-xl border-2 rounded-xl  mb-5 ${props.className}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      required={props.required}
    />
  );
}

export function TextArea(props) {
  return (
    <textarea
      className={`form-textarea bg-black w-full h-[300px] text-xl border-2 rounded-xl ${props.className}`}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></textarea>
  );
}
