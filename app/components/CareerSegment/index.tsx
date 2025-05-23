import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceType from "@/app/types";

const CareerSegment = ({
  Genre,
  Experiences,
}: {
  Genre: string;
  Experiences: ExperienceType[];
}) => {
  return (
    <div className="h-[40%] lg:h-full lg:w-full flex justify-center items-center snap-center relative ">
      <h1 className="absolute  lg:absolute top-0 left-0 text-2xl lg:text-4xl mt-2 ml-2 font-bold ">
        {Genre}
      </h1>
      <hr className="absolute border-2 border-solid border-black w-full -z-50" />
      <div className="flex flex-row overflow-x-scroll md:overflow-y-cliplg:overflow-y-clip w-100 relative">
        {Experiences.map((Experience) => {
          const { Name } = Experience;
          return <ExperienceCard key={Name} Experience={Experience} />;
        })}
      </div>
      <div className="invisible lg:visible text-4xl absolute bottom-0">
        <MdKeyboardDoubleArrowDown className="animate-bounce" />
      </div>
    </div>
  );
};

export default CareerSegment;
