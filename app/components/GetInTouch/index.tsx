"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center snap-start flex-col md:flex-row lg:flex-row">
      <Fade className="h-full w-full flex justify-center items-center">
        <h1 className="text-5xl font-bold">Get In Touch!</h1>
        <div>
          <Link href={"https://www.linkedin.com/in/kkatodus/"}>
            <FaLinkedin className="text-5xl" />
          </Link>
          <p className="text-2xl md:text-4xl lg:text-4xl">
            ken.kato[at]mail.utoronto.ca
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default GetInTouch;
