import React from "react";
import check from "../public/images/check-solid.svg";
import Image from "next/image";

const Outcome = () => {
  return (
    <div className="flex flex-wrap-reverse bg-slate-800 p-10">
      <div className="md:flex-1 p-5">
        <Image
          width={500}
          height={800}
          alt="outcome-man"
          src={"/images/Outcome.png"}
        />
      </div>
      <div className="flex-1 text-gray-50 -8">
        <h3 className="text-cyan-green text-4xl my-4 md:text-left leading text-center  font-medium">
          The Outcome for Participants of the Program
        </h3>
        <p className="text-gray-50">
          As a graduate of this program, you will own valuable products such as
          Full-Stack App Templates, AR and VR Experiences, and APIs that are
          marketed globally by the Panaverse DAO. You will also have the
          opportunity to offer your services at a rate of $50 per hour,
          providing a path to financial stability while contributing to the
          growth of Pakistan&apos;s software exports.
        </p>
        <div className="md:grid gap-4 grid-cols-2 grid-rows-2 text-center md:text-left">
          <div
            className="flex items-center my-4 
          md:w-full
          w-3/5 mx-auto"
          >
            <div className="list-circle flex rounded-full bg-cyan-green w-50px p-4 ">
              <Image src={check} alt="bullet" width={30} height={30} />
            </div>

            <h2 className="px-4">Product Ownership</h2>
          </div>
          <div className="flex md:w-full items-center  my-4 w-3/5 mx-auto">
            <div className="list-circle flex rounded-full bg-cyan-green w-50px p-4 ">
              <Image src={check} alt="bullet" width={30} height={30} />
            </div>

            <h2 className="px-4">Freelancing</h2>
          </div>
          <div className="flex md:w-full items-center my-4 w-3/5 mx-auto">
            <div className="list-circle flex rounded-full bg-cyan-green w-50px p-4 ">
              <Image src={check} alt="bullet" width={30} height={30} />
            </div>

            <h2 className="px-4">Global Marketing by Panaverse DAO</h2>
          </div>
          <div className="flex md:w-full items-center my-4 w-3/5 mx-auto">
            <div className="list-circle flex rounded-full bg-cyan-green w-50px p-4 ">
              <Image src={check} alt="bullet" width={30} height={30} />
            </div>

            <h2 className="px-4">Boosting Economy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
