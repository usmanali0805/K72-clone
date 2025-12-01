import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-10">
    <div className="w-full flex justify-end text-white">
      <p className="w-1/5 text-[1.2vw] font-normal p-2">&emsp;&emsp;&emsp;&emsp;&emsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We're transparent, honest and say what we mean, and when we believe in something, we're all in.
      </p>
    </div>
      <div className="flex text-white items-center gap-5 justify-center">
        <Link
          to={"/project"}
          className="font-[font1] border-2 text-[7.5vw] overflow-hidden pt-2 leading-[7vw] uppercase flex items-center justify-center border-white px-5 rounded-full transition duration-150 hover:border-[#D3FD50] hover:text-[#D3FD50]"
        >
          Work
        </Link>
        <Link
          to={"/agence"}
          className="font-[font1] border-2 text-[7.5vw] overflow-hidden pt-2 leading-[7vw] uppercase flex items-center justify-center border-white px-5 rounded-full transition duration-150 hover:border-[#D3FD50] hover:text-[#D3FD50] "
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
