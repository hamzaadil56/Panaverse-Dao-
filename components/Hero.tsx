import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:my-20 my-10 w-full flex-col-reverse flex md:flex-row">
      <div className="md:w-1/2 p-10 w-full md:mx-10">
        <h1 className="text-white font-semibold md:text-5xl md:text-left text-center my-5 leading-normal  text-3xl">
          Become Certified <br />{" "}
          <span className="text-cyan-green">
            {" "}
            Web 3.0 and Metaverse Developer
          </span>
        </h1>
        <h2 className="text-gray-200 text-center md:text-justify md:text-2xl font-normal leading-normal">
          Launch your Developer Career with Web 3 and Metaverse Getting Ready
          for the Next Generation of the Internet{" "}
        </h2>
      </div>
      <div className="md:w-1/2 p-10 w-full md:mx-10">
        <Image
          className="animate-spin-slow -z-50"
          src="/images/hero.png"
          width={700}
          height={700}
          alt="Hero"
          style={{ position: "relative", zIndex: -10 }}
        />
      </div>
    </div>
  );
};

export default Hero;
