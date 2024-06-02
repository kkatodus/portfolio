import { atom, useAtom } from "jotai";

const currentModalExperienceAtom = atom(null);

export default function useModalExperienceData() {
  const [currentModalExperienceState, setModalExperience] = useAtom(
    currentModalExperienceAtom
  );

  const updatecurrentModalExperienceState = (currentModalExperience) => {
    setModalExperience(currentModalExperience);
  };

  return { currentModalExperienceState, updatecurrentModalExperienceState };
}
