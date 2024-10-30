import React from "react";
import CardContent from "./CardContent";



const Card = () => {
  return (
    <>
      <div className="">
        <div className="w-[360px] h-24 border-t-0 border-l-0 border-r-0 rounded-b-[12px] bg-[#003049]  flex items-center shadow-[14.65px 17.58px 29.29px 0px #0000000D] backdrop-blur-[20.5px] shadow-2xl">
          <CardContent />
        </div>
      </div>
    </>
  );
};

export default Card;
