import React from "react";
import Image from "next/image";
import { coreCourses } from "../app/data";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="text-cyan-green bg-slate-800 md:p-10">
      <div>
        <h1 className="text-center text-4xl font-medium">
          Web 3.0 and Metaverse Program
        </h1>
      </div>
      <div className="p-10">
        <h2 className="text-3xl my-5 text-center md:text-left">Core Courses</h2>
        <p className="text-gray-50">
          Every participant of the program will start by completing the
          following three core courses.
        </p>
      </div>
      <div className="flex justify-between w-full flex-wrap  md:p-10">
        {coreCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
