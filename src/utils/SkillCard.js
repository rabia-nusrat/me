import React from "react";

const SkillCard = (props) => {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-gradient w-[300px] h-[170px] rounded-3xl">
      <div className="overflow-hidden flex items-center justify-between  bg-black w-[293px] h-[164px] rounded-3xl p-5">
        <p className="text-2xl font-semibold">{props.skill}</p>

        {props.children}
      </div>
    </div>
  );
};

export default SkillCard;
