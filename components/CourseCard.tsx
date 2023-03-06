import React from "react";
import Image from "next/image";
type Course = {
  quarter: string;
  description: string;
  img: string;
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <>
      <div className="hover:scale-75 transition-transform cursor-pointer bg-slate-700 flex flex-col  w-[300px]  shadow-md my-10 rounded-lg  ">
        <div className="w-full ">
          <Image
            alt="typescript"
            style={{ objectFit: "cover" }}
            width={300}
            height={300}
            src={course.img}
          />
        </div>
        <div className=" p-5 w-full flex flex-col justify-center h-full text-white text-justify">
          <h1>{course.quarter}</h1>
          <p className="text-slate-50">{course.description}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
