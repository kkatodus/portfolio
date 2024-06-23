"use client";
import Image from "next/image";
import portfolio from "@/public/images/portfolio.JPG";
import kokkaidoc from "@/public/images/kokkaidoc.PNG";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";
import { env } from "process";
import { IoDocumentText } from "react-icons/io5";

export const PortfolioImage = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center snap-start">
      <Fade className="h-full w-full flex items-center justify-center">
        <div className="relative flex justify-center items-center border-solid border-2 p-5 rounded-md bg-slate-500 shadow-lg h-[60%] lg:h-auto">
          <Image
            src={portfolio}
            className="rounded-full object-cover w-[200px] h-[200px] mr-10"
            alt="Picture of the author"
          />
          <div className="flex flex-col h-[100%] items-center justify-center">
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
                    "Founder",
                    "Academic",
                    "Football Coach",
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
            <div className="flex w-full mt-2 border-2 border-white rounded-lg p-2 justify-around flex-wrap">
              <Link href={"https://github.com/kkatodus"}>
                <FaGithub className="text-4xl" />
              </Link>
              <Link href={"https://www.linkedin.com/in/kkatodus/"}>
                <FaLinkedin className="text-4xl" />
              </Link>
              <Link href={"./Resume.pdf"} target="_blank">
                <IoDocumentText className="text-4xl" />
              </Link>
              <Link href={"https://www.kokkaidoc.com"}>
                <Image alt="kokkaidoc" src={kokkaidoc} className="w-10 h-10" />
              </Link>
            </div>
          </div>
        </div>
      </Fade>
      <div className="text-4xl absolute bottom-0">
        <MdKeyboardDoubleArrowDown className="animate-bounce" />
      </div>
    </div>
  );
};
