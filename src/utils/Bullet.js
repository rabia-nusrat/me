import React from "react";

const Bullet = (props) => {
  return (
    <span
      className={"inline-block bg-white w-3 h-3 mr-3 " + props.className}
    ></span>
  );
};

export default Bullet;
