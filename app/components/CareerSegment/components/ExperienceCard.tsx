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
import { CSSProperties } from "react";

const key2image = {
  lsy,
  hf,
  citizen,
  kke,
  pwc,
  siemens,
  scwest,
  vector,
  uoft,
  kokkaidoc,
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
      className={`relative h-[300px] min-w-[300px] w-[200px] m-2 border-2 rounded-md flex flex-col justify-center items-center transition duration-500 hover:scale-110 cursor-pointer ${
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
        className={`flex flex-col justify-center items-center bg-white bg-opacity-50 w-full h-full ${
          textcolor ? textcolor : "text-black"
        } `}
      >
        <h2 className="text-2xl text-center font-bold">{Name}</h2>
        <h3 className="text-center font-bold">{Company}</h3>
        <p className="font-bold">{Location}</p>
        <p className="font-bold">
          {End} ~ {Start}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
