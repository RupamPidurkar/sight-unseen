import React from "react";
import star from "../images/sparkle.png";
import img1 from "../images/diana-light-3-6mITmMyGI-unsplash.jpg";
const Aboutmagzine = () => {
  return (
    <div className="flex flex-col md:gap-12 py-12 ">
      <span className="flex items-center justify-center gap-4 md:mb-0 mb-6">
        <img src={star} alt="" className="h-4" />
        <p className="uppercase text-black border-1 border-black border rounded-full px-4">
          About magzine
        </p>
        <img src={star} alt="" className="h-4" />
      </span>

      <div className="text-center relative flex flex-col md:gap-12 gap-6">
        <p className="text-[#203522] font-ayar md:text-4xl text-lg uppercase tracking-tight">
          <p>
            si<span className="font-freight">g</span>ht unseen is an
            <span className="font-freight">o</span>nline mag
            <span className="font-freight">a</span>
            zine
          </p>
          <p className="md:pr-16 pr-8">
            th<span className="font-freight">a</span>t t
            <span className="font-freight">a</span>lks{" "}
            <span className="font-freight">a</span>boudwdwd. d
            <span className="font-freight">e</span>sign{" "}
            <span className="font-freight">a</span>nd
          </p>
        </p>

        <div className="flex absolute text-center justify-center md:top-12 md:left-[29%] top-9 left-[8%]">
          <span className="flex md:gap-4 gap-2 items-center">
            <p className="text-right md:leading-4 leading-none md:text-[11px] text-[6px]">
              Sight Unseen co-founders <br /> Monica Khemsurov and <br /> Jill
              Singer
            </p>
            <p className="md:text-4xl text-xl text-[#203522] uppercase">Fine</p>
          </span>
          <img
            src={img1}
            alt=""
            className=" md:w-52 md:h-28 w-28 h-16 object-cover  -z-5"
          />
          <span className="flex md:gap-4 gap-2 items-center ">
            <p className="md:text-4xl text-xl text-[#203522] uppercase">Art,</p>
            <p className="text-left md:leading-4 leading-none md:text-[11px] text-[6px]">
              Khemsurov is also a <br /> contributing editor for <br /> T
              magzine
            </p>
          </span>
        </div>

        <p className="text-[#203522] font-ayar md:text-4xl text-lg uppercase z-50">
          <p>
            F<span className="font-freight">O</span>cusing on independent cr
            <span className="font-freight">e</span>ators
          </p>
          <span className="font-freight">W</span>orki
          <span className="font-freight">n</span>g
          <span className="font-freight"> O</span>utside b
          <span className="font-freight">o</span>
          undries.
        </p>
      </div>
      <a
        href="#"
        className="uppercase underline underline-offset-4 text-center"
      >
        Learn more
      </a>
    </div>
  );
};

export default Aboutmagzine;
