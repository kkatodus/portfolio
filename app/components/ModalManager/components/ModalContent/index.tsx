// @ts-nocheck
import ExperienceType from "@/app/types";
import Microlink from "@microlink/react";

const ModalContent = ({ Experience }: { Experience: ExperienceType }) => {
  return (
    <div className="relative m-2 flex flex-col h-full">
      <div className="w-[95%] text-white background">
        <h2 className="text-4xl">
          {Experience.Name} {Experience.Company && "@"} {Experience.Company}
        </h2>
      </div>
      <div className="flex text-white">
        <h3>
          {Experience.End} ~ {Experience.Start}
        </h3>
        <h3 className="ml-10">{Experience.Location}</h3>
      </div>
      <div className="flex overflow-x-scroll">
        {Experience.Keywords?.map((keyword) => (
          <p
            key={keyword}
            className="bg-white rounded-lg mr-2 p-2 whitespace-nowrap"
          >
            {keyword}
          </p>
        ))}
      </div>
      <div className="relative bg-white mt-2 p-2 rounded-md flex-1 overflow-y-scroll mb-4">
        <div className="h-full flex flex-col">
          {Experience.RelatedLinks?.map((link) => (
            <div key={link} className="m-2">
              <Microlink url={link} />
            </div>
          ))}
          {Experience.Descriptions?.map((description) => (
            <p key={description}>- {description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
