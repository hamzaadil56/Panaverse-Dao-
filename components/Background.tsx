import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed w-full h-full -z-10   top-0 left-0">
      <Image
        style={{ objectFit: "cover" }}
        className="absolute top-0 z-10 left-0  "
        src="/images/background.jpg"
        fill
        alt="logo"
      />
    </div>
  );
};

export default Background;
