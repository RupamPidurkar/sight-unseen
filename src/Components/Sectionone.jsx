import React from "react";
import star from "../images/sparkler.png";
import img1 from "../images/yana-hurska-mgyTbsT8RmA-unsplash.jpg";
import img2 from "../images/yana-hurska-zeGT9j4ltRA-unsplash.jpg";
import img3 from "../images/linh-le-a0rE64YJDA4-unsplash.jpg";
import img4 from "../images/erica-queiroz-Y_HrIy8URNo-unsplash.jpg";
import img5 from "../images/feey-Ug5roZHlC78-unsplash.jpg";
import img6 from "../images/diana-light-3-6mITmMyGI-unsplash.jpg";
import img7 from "../images/billy-jo-catbagan-HR1x0_5dakE-unsplash.jpg";
import Progress from "./Progressbar";
import left from "../images/left.png";
import right from "../images/right.png";
const Sectionone = () => {
  return (
    <div
      className="bg-[#686A56] flex flex-col items-center md:gap-0 
    relative py-12 md:px-6 px-4 h-fit w-full"
    >
      <span className="flex items-center justify-center gap-4 md:mb-0 mb-12">
        <img src={star} alt="" className="h-4" />
        <p className="uppercase text-white border-1 border-white border rounded-full px-4">
          American design hot list
        </p>
        <img src={star} alt="" className="h-4" />
      </span>

      <span className="absolute md:left-[15%] md:top-[100px] top-[9.5%] left-6 z-30">
        <p className="text-white font-ayar uppercase lg:text-9xl md:text-6xl text-[44px]">
          <span className="font-curse">D</span>Aytrip{" "}
          <span className="font-freight">Studio</span>
        </p>
      </span>
      {/************************************* */}

      <div className="flex justify-between items-center md:mt-28 md:mb-0 mb-6 overflow-hidden">
        <div className="hidden md:flex justify-between gap-20">
          <img src={img1} alt="" className="w-32 h-32 object-cover" />
          <img src={img2} alt="" className="w-32 h-32 object-cover" />
          <img src={img3} alt="" className="w-32 h-32 object-cover" />
        </div>
        <img
          src={img4}
          alt=""
          className="md:w-[410px] md:h-full w-96 h-[450px] object-cover"
        />
        <div className="hidden md:flex justify-between gap-20">
          <img src={img5} alt="" className="w-32 h-32 object-cover" />
          <img src={img6} alt="" className="w-32 h-32 object-cover" />
          <img src={img7} alt="" className="w-32 h-32 object-cover" />
        </div>
      </div>

      {/******************** */}
      <div className="flex justify-between gap-[480px]">
        <img src={left} alt="" className="h-12 md:block hidden" />
        <div className=" flex flex-col items-center gap-6 md:w-[420px] md:mt-4">
          <div className="flex items-center gap-4 w-full">
            <p className="text-white font-base">01</p>
            <Progress />
            <p className="text-white font-base">02</p>
          </div>
          <p className="text-white text-center md:text-sm text-md">
            The London-based interiors firm Daytrip Studio can do soothing,
            pared back minimalism; they can do more maximalist drama. Still,
            whatever it is, it all derives from the same place: a fixation on
            materials and a layered attention to sensory details
          </p>
          <a
            href="#"
            className="bg-white uppercase text-[#48493c] px-6 py-1 rounded-full
          md:w-fit w-full text-center"
          >
            Read more
          </a>
        </div>
        <img src={right} alt="" className="h-12 md:block hidden" />
      </div>
    </div>
  );
};

export default Sectionone;
