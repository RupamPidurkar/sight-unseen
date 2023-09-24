import React from "react";
import arrow from "../images/up-right-arrow.png";
import img1 from "../images/ceyda-ciftci-dDVU6D_6T80-unsplash.jpg";
import img2 from "../images/deconovo-5l6PTBM2smI-unsplash.jpg";
import img3 from "../images/angela-bailey-tuJtzghMuEw-unsplash.jpg";
import img4 from "../images/dylan-nolte-dUsmF-F-bJg-unsplash.jpg";
import img5 from "../images/thanos-pal-I3S-Oha_5k4-unsplash.jpg";
import img6 from "../images/katja-rooke-77JACslA8G0-unsplash.jpg";
import Aboutmagzine from "./Aboutmagzine";
import Sectionthree from "./Sectionthree";

const Sectiontwo = () => {
  return (
    <div className="bg-[#E5E0D8]">
      <div className="flex flex-col  gap-8 px-6 py-16">
        <div className="flex justify-between items-center md:pt-36  ">
          <p className="uppercase md:text-6xl text-3xl font-ayar tracking-tight">
            most <span className="font-freight">Popular</span>
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

        {/******************************** */}

        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 content-center">
          <div className="flex flex-col flex-0.5 gap-2 ">
            <img
              src={img4}
              alt=""
              className=" md:w-[355.8px] md:h-[533px]  object-cover"
            />
            <p
              className="uppercase text-sm border border-1 border-black
             w-fit px-2 rounded-full"
            >
              Sight unseen collection
            </p>
            <p className="font-bold text-[16px] pr-4">
              DANNY KAPLAN WANTS HIS NEW FURNITIRE COLLECTION
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>18.08.2023</p>
              <p className=" font-semibold">By Deborah Shapiro</p>
            </span>
          </div>

          <div className="flex flex-col flex-0.5 gap-1">
            <img src={img2} alt="" className=" h-72 " />
            <p
              className="uppercase text-sm border border-1 mt-2 border-black 
            w-fit px-2 rounded-full"
            >
              Discounts
            </p>
            <p className="font-bold text-[16px]">
              JONATHAN PESSIN SHOPS 7 DAYS A WEEK TO AMASS THE COLLECTION
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>11.07.2023</p>
              <p className=" font-semibold">By Dan Howarth</p>
            </span>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <img src={img3} alt="" className=" md:h-full h-72 " />
            <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
              Up and coming
            </p>
            <p className="font-bold text-[18px] md:pr-64">
              CAROLINE CHAO USES LIGHT ITSELF TO CREATE OPTICAL ILLUSIONS IN HER
              FURNITURE DEBUT
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>08.09.2023</p>
              <p className=" font-semibold">By Jill singer</p>
            </span>
          </div>

          <div className="flex flex-col flex-0.5 gap-1 flex-[0.5]">
            <img src={img1} alt="" className=" h-72 object-cover " />
            <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
              fair report
            </p>
            <p className="font-bold text-[18px] pr-6">
              THE BEST OF NEW YORK DESIGN WEEK 2023, PART II
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>11.07.2023</p>
              <p className=" font-semibold">By Deborah shapiro</p>
            </span>
          </div>

          <div className="flex flex-col flex-0.5 gap-6 w-80 flex-[0.5]">
            <div className="flex flex-col gap-2 border-t-[1px] border-black py-4">
              <p className="uppercase text-sm border border-1 border-black w-fit px-2 rounded-full">
                fair report
              </p>
              <p className="font-bold text-[18px]">
                THE BEST OF NEW YORK DESIGN WEEK 2023. PART I
              </p>
              <span className="flex gap-6 text-[12px] uppercase">
                <p>31.07.2023</p>
                <p className=" font-semibold">By Deborah shapiro</p>
              </span>
            </div>
            <div className="flex flex-col gap-2 border-t-[1px] border-black py-4">
              <p className="uppercase text-sm border border-1 border-black w-fit px-2 rounded-full">
                fair report
              </p>
              <p className="font-bold text-[18px]">
                THE BEST OF THE SALONE DEL MOBILE 2023: PART III
              </p>
              <span className="flex gap-6 text-[12px] uppercase">
                <p>01.08.2023</p>
                <p className=" font-semibold">By Jill singer</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-0.5 gap-1 flex-[0.5] ">
            <img src={img5} alt="" className=" h-72  rounded-tr-[150px]" />
            <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
              sighted
            </p>
            <p className="font-bold text-[18px] pr-4">
              MEET THE BELGIAN DESIGNER PUSHING THE LIMITS OF GLASS
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>21.08.2023</p>
              <p className=" font-semibold">By Dan Howarth</p>
            </span>
          </div>

          <div className="flex flex-col flex-0.5 gap-1 flex-[0.5]">
            <img src={img6} alt="" className=" h-72 " />
            <p className="uppercase text-sm border border-1 mt-2 border-black w-fit px-2 rounded-full">
              interiors
            </p>
            <p className="font-bold text-[18px]">
              THANK THIS COUPLE FOR BRINGING A DOSE OF COLOR
            </p>
            <span className="flex gap-6 text-[12px] uppercase">
              <p>30.08.2023</p>
              <p className=" font-semibold">By Dan Howarth</p>
            </span>
          </div>
        </div>
      </div>
      <Aboutmagzine />
      <Sectionthree />
    </div>
  );
};

export default Sectiontwo;
