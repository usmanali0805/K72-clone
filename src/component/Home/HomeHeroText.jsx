import React from "react";
import Video from "./Video";


const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center text-white">
      <div className="text-[9.2vw] uppercase leading-[8vw] flex justify-center items-center">The spark for</div>
      <div className="text-[9.2vw] uppercase leading-[8vw] flex justify-center items-center gap-1">
        all
        <div className="h-[10.5vh] w-[15.5vw] flex items-center justify-center  rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.2vw] uppercase leading-[8vw] flex justify-center items-center">creative</div>
    </div>
  );
};

export default HomeHeroText;
