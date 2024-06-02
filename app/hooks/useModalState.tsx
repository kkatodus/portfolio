"use client";
import { useAtom, atom } from "jotai";
const currentModalExperienceAtom = atom(null);

const useModalExperienceData = () => {
  const [currentModalExperienceState, setModalExperience] = useAtom(
    currentModalExperienceAtom
  );

  const updateCurrentModalExperienceState = (currentModalExperience) => {
    setModalExperience(currentModalExperience);
  };

  return { currentModalExperienceState, updateCurrentModalExperienceState };
};

export default useModalExperienceData;
