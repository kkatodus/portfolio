"use client";
import { RxCross2 } from "react-icons/rx";
import useModalExperienceData from "@/app/hooks/useModalState";
import { Slide } from "react-awesome-reveal";
import ModalContent from "./components/ModalContent";

const ModalManager: React.FC = () => {
  const { currentModalExperienceState, updateCurrentModalExperienceState } =
    useModalExperienceData();

  if (!currentModalExperienceState) {
    return null;
  }
  return (
    <div className="fixed top-0 z-100 right-0 w-full h-full bg-slate-200 bg-opacity-25 flex justify-center items-center">
      <Slide
        direction="up"
        className="relative w-[90%] h-[90%] bg-slate-500 rounded-lg flex flex-col"
      >
        <div className="w-full h-full">
          <button
            onClick={() => updateCurrentModalExperienceState(null)}
            className="w-[50px] h-[50px] absolute right-0 top-0 hover:text-white transition-all ease-in-out duration-300 z-10"
          >
            <RxCross2 className="w-full h-full" />
          </button>
          <ModalContent Experience={currentModalExperienceState} />
        </div>
      </Slide>
    </div>
  );
};

export default ModalManager;
