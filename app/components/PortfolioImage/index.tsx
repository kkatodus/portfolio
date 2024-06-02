"use client";
import Image from "next/image";
import portfolio from "@/public/images/portfolio.JPG";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const PortfolioImage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center snap-start">
      <Fade>
        <div className="flex justify-center items-center border-gray-300 border-solid border-2 p-5 rounded-md bg-slate-500  shadow-lg">
          <Image
            src={portfolio}
            className="rounded-full object-cover w-[200px] h-[200px] mr-10"
            alt="Picture of the author"
          />
          <div className="flex flex-col text-white">
            <p>
              Hey there! Thank you for finding me. <br></br> My name is Ken. I
              am a...
            </p>
            <span className="text-4xl">
              <Typewriter
                words={[
                  "Fullstack Engineer",
                  "AI Reseacher",
                  "Data Scientist",
                  "Founder of KOKKAI DOC",
                  "Academic",
                  "Football(soccer) Coach",
                  "Part-time Actor",
                ]}
                cursor
                cursorStyle="|"
                loop={Infinity}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
      </Fade>
      <div className="text-4xl absolute bottom-0">
        <MdKeyboardDoubleArrowDown className="animate-bounce" />
      </div>
    </div>
  );
};
