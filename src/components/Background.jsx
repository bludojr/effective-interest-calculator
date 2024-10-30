import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[linear-gradient(180deg,_#E0E7FF_0%,_#CBD5E1_100%)]">
      <div className="absolute w-[497px] h-[497px] rounded-full bg-[#4400FF1F] blur-3xl top-[-150px] left-[-150px] z-[-1]" />

      <div className="relative min-w-96 w-96 h-[800px] border-white border-[12px] rounded-3xl overflow-hidden mx-auto mt-16 bg-[#8ecae6] backdrop-blur-lg">
        {children}
      </div>
        
      <div className="absolute w-[497px] h-[497px] rounded-full bg-[#00F0FF1A] blur-3xl bottom-[-150px] right-[-150px] z-[-1]" />
    </div>
  );
};

export default Background;
