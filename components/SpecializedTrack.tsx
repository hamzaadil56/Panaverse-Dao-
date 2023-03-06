"use client";
import React from "react";
import Button from "./Button";
import CourseCard from "./CourseCard";
type Track = {
  title: string;
  description: string;
  quarters: { quarter: string; description: string; img: string }[];
};

const SpecializedTrack = ({ track }: { track: Track }) => {
  return (
    <div className="text-gray-50 my-10 p-10 font-light border-[1px] rounded border-slate-500">
      <div>
        <h3 className="text-cyan-green font-medium">Specialized Track</h3>
        <h1 className="text-3xl font-medium my-5 text-justify">
          {track.title}
        </h1>
        <p>{track.description}</p>
      </div>
      <div className="my-5">
        <Button>Learn More</Button>
      </div>
      <div className="flex justify-between">
        {track.quarters.map((quarter, index) => (
          <CourseCard key={index} course={quarter} />
        ))}
      </div>
    </div>
  );
};

export default SpecializedTrack;
