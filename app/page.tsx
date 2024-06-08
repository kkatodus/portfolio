// @ts-nocheck
import { CareerData } from "@/public/mycareer.json";
import { PortfolioImage } from "./components/PortfolioImage";
import CareerSegment from "./components/CareerSegment";
import ModalManager from "./components/ModalManager";
import ExperienceType from "./types";

export default function Home() {
  return (
    <div className="h-full w-full absolute snap-y snap-mandatory overflow-y-scroll">
      <PortfolioImage />

      {CareerData.map(
        (career: { Genre: string; Experiences: ExperienceType[] }) => {
          return (
            <CareerSegment
              key={career.Genre}
              Genre={career.Genre}
              Experiences={career.Experiences}
            />
          );
        }
      )}
      <ModalManager />
    </div>
  );
}
