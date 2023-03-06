"use client";
import React, { useState } from "react";
import { specializedTracks } from "@/app/data";
import SpecializedTrack from "./SpecializedTrack";
import SpecializedTrackItem from "./SpecializedTrackItem";

const TracksContainer = () => {
  const [trackId, setTrackId] = useState(0);
  const handleTrackId = (index: number) => {
    setTrackId(index);
  };
  return (
    <div>
      <div className="bg-slate-800 p-20">
        <h1 className="text-cyan-green text-3xl">Specialization Tracks</h1>
        <div className=" md:flex justify-between ">
          <div className="md:w-3/5 ">
            {specializedTracks.map((track, index) => {
              if (index === trackId) {
                return <SpecializedTrack key={index} track={track} />;
              }
            })}
          </div>
          <div className="md:w-2/5">
            {specializedTracks.map((track, index) => (
              <SpecializedTrackItem
                onClick={() => handleTrackId(index)}
                key={index}
                track={track}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksContainer;
