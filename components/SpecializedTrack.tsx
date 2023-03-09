"use client";
import React from "react";
import Button from "./Button";
import CourseCard from "./CourseCard";
import Link from "next/link";
type Track = {
  title: string;
  description: string;
  quarters: {
    quarter: string;
    description: string;
    img: string;
    category: string;
  }[];
};

const SpecializedTrack = ({ track }: { track: Track }) => {
  return (
    <div className="sticky top-36 text-gray-50 my-10 md:p-10 font-light border-[1px] rounded border-slate-500">
      <div className="p-10 md:p-0">
        <h3 className="text-cyan-green font-medium">Specialized Track</h3>
        <h1 className="text-3xl font-medium my-5 text-justify">
          {track.title}
        </h1>
        <p>{track.description}</p>
      </div>
      <div className="my-5 p-10 md:p-0">
        <Button>Learn More</Button>
      </div>
      <div className="flex flex-wrap w-4/5 mx-auto md:mx-0 md:w-full  md:justify-between">
        {track.quarters.map((quarter, index) => (
          <Link key={index} href={`/${quarter.category}/q${index + 4}`}>
            <CourseCard key={index} course={quarter} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecializedTrack;
