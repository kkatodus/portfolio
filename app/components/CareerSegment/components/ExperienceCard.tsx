// @ts-nocheck
"use client";
// @ts-nocheck
import useModalExperienceData from "@/app/hooks/useModalState";
import ExperienceType from "@/app/types";
import lsy from "@/public/images/lsy.jpeg";
import hf from "@/public/images/hf.png";
import kke from "@/public/images/kke.png";
import citizen from "@/public/images/citizen.png";
import pwc from "@/public/images/pwc.png";
import siemens from "@/public/images/siemens.png";
import scwest from "@/public/images/scwest.jpeg";
import uoft from "@/public/images/uoft.png";
import vector from "@/public/images/vector.jpg";
import kokkaidoc from "@/public/images/kokkaidoc.PNG";
import missing from "@/public/images/missing.png";
import reunion from "@/public/images/reunion.jpg";
import diary from "@/public/images/diary.jpg";
import nifty from "@/public/images/nifty.jpg";
import lupin from "@/public/images/lupin.jpg";
import aiwebsitebuilder from "@/public/images/aiwebsitebuilder.webp";
import digital from "@/public/images/digital.png";
import { CSSProperties } from "react";

const key2image = {
  lsy,
  aiwebsitebuilder,
  hf,
  citizen,
  kke,
  pwc,
  siemens,
  scwest,
  vector,
  uoft,
  missing,
  reunion,
  diary,
  nifty,
  lupin,
  kokkaidoc,
  digital,
};

const pastelColors = [
  "bg-orange-200",
  "bg-lime-300",
  "bg-sky-200",
  "bg-rose-200",
];

const ExperienceCard = ({ Experience }: { Experience: ExperienceType }) => {
  const { updateCurrentModalExperienceState } = useModalExperienceData();

  const {
    Name,
    Location,
    Start,
    End,
    Keywords,
    Company,
    Descriptions,
    key,
    textcolor,
  } = Experience;
  return (
    <div
      className={`relative h-[150px] w-[200px] min-w-[200px] lg:h-[300px] lg:min-w-[300px] lg:w-[200px] m-2 border-2 rounded-md flex flex-col justify-center items-center transition duration-500 hover:scale-110 cursor-pointer ${
        key ? "bg-white" : pastelColors[Math.floor(Math.random() * 4)]
      }`}
      style={
        key &&
        ({
          backgroundImage: `url(${
            key2image[key as keyof typeof key2image].src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        } as CSSProperties)
      }
      key={Name}
      onClick={() => updateCurrentModalExperienceState(Experience)}
    >
      <div
        className={`flex flex-col justify-center items-center bg-white bg-opacity-80 w-full h-full ${
          textcolor ? textcolor : "text-black"
        } `}
      >
        <h2 className="text-lg lg:text-2xl text-center font-bold">{Name}</h2>
        <h3 className="text-center lg:text-lg lg:font-bold ">{Company}</h3>
        <p className="text-sm lg:text-base lg:font-bold">{Location}</p>
        <p className="lg:font-bold text-sm lg:text-base">
          {Start} ~ {End}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
