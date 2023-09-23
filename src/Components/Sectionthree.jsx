import React from "react";
import arrow from "../images/up-right-arrow.png";
import img1 from "../images/deconovo-HCiafGVJlL0-unsplash.jpg";
import img2 from "../images/ceyda-ciftci-dDVU6D_6T80-unsplash.jpg";
import img3 from "../images/joanna-kosinska-qcqmS0JG58Q-unsplash.jpg";
import img4 from "../images/mathilde-langevin-WUrXahlyjBo-unsplash.jpg";
import img5 from "../images/thanos-pal-I3S-Oha_5k4-unsplash.jpg";
const Sectionthree = () => {
  return (
    <div className="flex flex-col  gap-8 px-6 py-16">
      <div className="flex justify-between items-center pt-8  ">
        <p className="uppercase md:text-6xl text-3xl font-ayar tracking-tight">
          design <span className="font-freight">library</span>
        </p>
        <a
          href=""
          className="uppercase text-white bg-green-950 flex items-center md:px-4 px-3 py-1
             rounded-full gap-1 text-sm"
        >
          View all
          <img src={arrow} alt="" className="h-5" />
        </a>
      </div>

      {/********************************** */}

      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col gap-2 md:w-[560px]">
          <img src={img1} alt="" className="md:w-[560px]   " />
          <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
            editors list
          </p>
          <p className="font-semibold text-[17px] leading-4 text-[#203522] ">
            Jill and Monica share their January picks including wallpapered
            ceilings, a must-have 70s flatware set, and the puffy ceramics of
            Maxwell Mustardo.
          </p>
          <span className="flex gap-6 text-[12px] uppercase">
            <p>17.05.2020</p>
          </span>
        </div>

        <div className="flex flex-col gap-2 md:w-[350px]">
          <img
            src={img2}
            alt=""
            className=" md:w-[350px] md:h-[320px] rounded-t-full "
          />
          <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
            print issue
          </p>
          <p className="font-semibold text-[17px] leading-4 text-left text-[#203522]">
            The Sight Unseen Yearbook is a 160-page printed compilation of our
            favorite furniture and lighting from 2022.
          </p>
          <span className="flex gap-6 text-[12px] uppercase">
            <p>22.10.2022</p>
          </span>
        </div>

        <div className="flex flex-col gap-2 w-[360px] ">
          <img src={img3} alt="" className=" md:w-[360px] " />
          <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
            editors list
          </p>
          <p className="font-semibold text-[17px] leading-4 pr-6 text-[#203522]">
            Jill and Monica share their January picks, including a book on the
            psychology of decorating and the most perfect colorway.
          </p>
          <span className="flex gap-6 text-[12px] uppercase">
            <p>31.07.2023</p>
          </span>
        </div>

        <div className="flex flex-col  gap-2 md:w-[260px] h-auto ">
          <img src={img4} alt="" className=" md:w-48 md:h-48  " />
          <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
            discount
          </p>
          <p className="font-semibold text-[17px] leading-4 pr-6 text-[#203522]">
            Patrons get 25% off their first subscription order of Plant Paper,
            our favorite tree-free, zero-chemical toilet paper
          </p>
          <span className="flex gap-6 text-[12px] uppercase">
            <p>04.04.2023</p>
          </span>
        </div>

        <div className="flex flex-col  gap-2 md:w-[560px]">
          <img
            src={img5}
            alt=""
            className=" md:w-[560px] rounded-bl-[100px] "
          />
          <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
            wallpaper
          </p>
          <p className="font-semibold text-[16px] pr-6 text-[#203522]">
            Download our April 2022 desktop and iPhone wallpaper, two abstract
            painti by the New York artist Naomi Clark.
          </p>
          <span className="flex gap-6 text-[12px] uppercase">
            <p>10.01.2023</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sectionthree;
