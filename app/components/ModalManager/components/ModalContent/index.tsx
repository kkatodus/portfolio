// @ts-nocheck
import ExperienceType from "@/app/types";
import Microlink from "@microlink/react";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";

const ModalContent = ({ Experience }: { Experience: ExperienceType }) => {
  const hasOtherMedia = Experience.videoLink || Experience.RelatedLinks;
  const hasDescription = Experience.Descriptions?.length > 0;
  return (
    <div className="relative m-2 flex flex-col h-full">
      <div className="w-[95%] text-white background">
        <h2 className="text-xl font-bold lg:text-4xl">
          {Experience.Name} {Experience.Company && "@"} {Experience.Company}
        </h2>
      </div>
      <div className="flex text-white">
        <h3>
          {Experience.Start}~ {Experience.End}
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
      <div className="relative bg-white mt-2 p-2 rounded-md flex flex-col lg:flex-row flex-1 overflow-y-scroll mb-4">
        {hasOtherMedia && (
          <div>
            {Experience.videoLink && (
              <iframe
                width="560"
                height="315"
                src={Experience.videoLink}
                title={Experience.Name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
            {Experience.RelatedLinks?.map((link) => (
              <div key={link} className="m-2">
                <Microlink url={link} />
              </div>
            ))}
            {Experience.DownloadableDocuments?.map((document) => {
              return (
                <Link
                  key={document.link}
                  href={document.link}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <p className="underline">{document.Text}</p>
                  <IoDocumentText className="text-5xl" />
                </Link>
              );
            })}
          </div>
        )}
        {hasDescription && hasOtherMedia && (
          <div className="w-[1px] bg-black" />
        )}
        {hasDescription && (
          <div className="px-3">
            {Experience.Descriptions?.map((description) => (
              <p key={description}>- {description}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
