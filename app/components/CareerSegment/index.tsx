import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ExperienceCard from "./components/ExperienceCard";

const CareerSegment = ({ Genre, Experiences }) => {
  return (
    <div className="h-full w-full flex justify-center items-center snap-center relative ">
      <h1 className="absolute top-0 left-0 text-4xl mt-2 ml-2 font-bold ">
        {Genre}
      </h1>
      <hr className="absolute border-2 border-solid border-black w-full" />
      <div className="flex flex-row overflow-x-scroll no-scrollbar w-100 relative">
        {Experiences.map((Experience) => {
          const { Name } = Experience;
          return <ExperienceCard key={Name} Experience={Experience} />;
        })}
      </div>
      <div className="text-4xl absolute bottom-0">
        <MdKeyboardDoubleArrowDown className="animate-bounce" />
      </div>
    </div>
  );
};

export default CareerSegment;
