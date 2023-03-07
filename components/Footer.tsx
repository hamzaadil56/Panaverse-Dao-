import React from "react";
import facebook from "../public/images/facebook-f.svg";
import { specializedTracks } from "@/app/data";
import { media_icons } from "@/app/data";
import Link from "next/link";

import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer border-t-2 border-gray-700 w-full  bg-slate-800 p-10">
      <div className="md:flex">
        <div className="md:w-1/2 mx-auto">
          <div className="my-10 mx-auto">
            <Image
              src={"/images/panaverse-logo.png"}
              width={150}
              height={40}
              alt="logo"
              className="mx-auto"
            />
          </div>
          <div className="social-media-icons flex mx-auto justify-center items-center">
            {media_icons.map(
              (icon: { image: string; url: string }, index: number) => (
                <Link key={index} href={icon.url}>
                  <div
                    className="icon rounded-full bg-slate-900 p-2 flex items-center md:mr-4
                  m-4 text-white"
                  >
                    <img
                      src={icon.image}
                      className="w-6 h-6 text-white"
                      alt="facebook"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="md:w-1/2 my-10 text-white">
          <h1 className="text-2xl text-cyan-green text-center md:text-left my-4">
            Programs
          </h1>
          <div>
            {specializedTracks.map((track, index) => {
              return (
                <li
                  key={index}
                  className="list-none leading-10
                  md:leading-loose hover:text-cyan-green transition-all text-sm md:text-base text-center md:text-left
                  text-gray-50"
                >
                  <Link href={`/${track.title}`}>{track.title}</Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className="block flex justify-center items-center  text-center">
        <img className="w-6 h-6" src="/images/copyright-solid.svg" alt="" />
        <h2 className="mx-4 text-white">Copyright</h2>
        <h2 className="text-cyan-green">Panaverse</h2>
      </div>
      <div>
        <h2 className="text-center my-4 text-gray-50">
          Developed by{" "}
          <Link target={"_blank"} href={"https://hamzaadil.netlify.app/"}>
            <span className="underline underline-offset-4">Muhammad Hamza</span>
          </Link>
        </h2>
      </div>
    </footer>
  );
}
