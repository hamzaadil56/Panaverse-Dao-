import React from "react";
type Track = {
  title: string;
};

const SpecializedTrackItem = ({
  track,
  onClick,
}: {
  track: Track;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-slate-700 my-10 md:w-4/5  rounded text-gray-100 hover:bg-gray-900
    transition-all cursor-pointer p-10 mx-auto
    
    font-light"
    >
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3 className="text-cyan-green font-medium">Specialized Track</h3>
        <h1>{track.title}</h1>
      </div>
    </div>
  );
};

export default SpecializedTrackItem;
