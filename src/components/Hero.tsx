"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
  return (
    <div
      className="bg-black text-white 
      bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] 
      py-[72px]
      sm:py-24
      relative overflow-clip

      "
    >
      <div
        className="absolute 
        h-[375px] w-[750px] 
        sm:w-[1536px] sm:h-[768px]
        lg:w-[2400px] lg:h-[1200px]
        rounded-[100%] 
        bg-black left-1/2 -translate-x-1/2 
        border border-[#b48cde]
        bg-[radial-gradient(closest-side,#000_82%,#9560eb)] 
        top-[calc(100%-96px)]
        sm:top-[calc(100%-120px)]
        "
      />

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                height={200}
                width={200}
                alt="cursorImage"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                height={200}
                width={200}
                alt="messageImage"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app desegined to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
