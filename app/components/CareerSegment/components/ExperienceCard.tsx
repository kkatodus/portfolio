"use client";
import useModalExperienceData from "@/app/hooks/useModalState";
import lsy from "@/public/images/lsy.jpeg";

const key2image = {
  lsy,
};

const ExperienceCard = ({ Experience }) => {
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
      className={`h-[300px] min-w-[300px] w-[200px] m-2 border-2 bg-slate-500 p-1  rounded-md flex flex-col justify-center items-center transition duration-500 hover:scale-110 cursor-pointer ${
        textcolor ? textcolor : "text-white"
      }`}
      style={
        key && {
          backgroundImage: `url(${key2image[key].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      }
      key={Name}
      onClick={() => updateCurrentModalExperienceState(Experience)}
    >
      <h2 className="text-2xl text-center font-bold">{Name}</h2>
      <h3 className="text-center font-bold">{Company}</h3>
      <p className="font-bold">{Location}</p>
      <p className="font-bold">
        {End} ~ {Start}
      </p>
    </div>
  );
};

export default ExperienceCard;
