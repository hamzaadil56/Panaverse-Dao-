"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./components.module.css";
import "../app/globals.css";
import Link from "next/link";
import { useRef } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  return (
    <nav className="sticky top-0 w-full bg-gray-700 md:container-xl md:flex items-center justify-between px-20 py-6  backdrop-blur-sm bg-white/10 shadow-md   ">
      <div className="flex  justify-between items-center md:w-1/5 ">
        <div className="logo ">
          <Image
            src="/images/panaverse-logo-green.png"
            width={150}
            height={40}
            alt="logo"
          />
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`${styles.menu_btn} md:hidden`}
        >
          <div
            className={`${styles.menu_btn__burger} ${
              isOpen ? styles.open : ""
            } md:hidden`}
          ></div>
        </div>
      </div>
      <div
        ref={linksRef}
        className={`${styles.link_items} ${
          isOpen ? styles.link_items_show : ""
        }  transition-all md:flex  md:place-content-evenly md:w-4/5`}
      >
        <ul className="md:flex   items-center">
          <li
            className="py-3 cursor-pointer
           text-white  text-center md:mx-5"
          >
            <Link href={"#home"}>Home</Link>
          </li>
          <li
            className="py-3 cursor-pointer
           text-white  text-center md:mx-5"
          >
            <Link href={"./Home"}> Courses</Link>
          </li>
          <li
            className="py-3 cursor-pointer
           text-white  text-center md:mx-5"
          >
            <Link href={"./Home"}> About Us</Link>
          </li>
          <li
            className="py-3 cursor-pointer
           text-white text-center md:mx-5"
          >
            <Link href={"./Home"}> Contact</Link>
          </li>
        </ul>
        <div className="apply-now-btn  flex justify-center">
          <button></button>
          <button></button>

          <Button>Apply Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
