import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="sm:my-20 my-10 w-full flex-col-reverse flex md:flex-row">
      <div className="sm:w-1/2 p-10 w-full sm:mx-10">
        <h1 className="text-white font-semibold text-5xl sm:text-left text-center my-5 leading-normal">
          Become Certified <br />{" "}
          <span className="text-cyan-green">
            {" "}
            Web 3.0 and Metaverse Developer
          </span>
        </h1>
        <h2 className="text-gray-200 text-center sm:text-justify text-2xl font-normal leading-normal">
          Launch your Developer Career with Web 3 and Metaverse Getting Ready
          for the Next Generation of the Internet{" "}
        </h2>
      </div>
      <div className="sm:w-1/2 p-10 w-full sm:mx-10">
        <Image src="/images/hero.png" width={700} height={700} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
