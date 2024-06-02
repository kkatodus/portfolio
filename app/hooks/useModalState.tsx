"use client";
import { useAtom, atom } from "jotai";
import ExperienceType from "../types";
const currentModalExperienceAtom = atom<ExperienceType | null>(null);

const useModalExperienceData = () => {
  const [currentModalExperienceState, setModalExperience] = useAtom(
    currentModalExperienceAtom
  );

  const updateCurrentModalExperienceState = (
    currentModalExperience: ExperienceType | null
  ) => {
    setModalExperience(currentModalExperience);
  };

  return { currentModalExperienceState, updateCurrentModalExperienceState };
};

export default useModalExperienceData;
