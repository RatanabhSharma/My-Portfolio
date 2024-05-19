"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const EducationBackground = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Education
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Background
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto">
        <div className="Education-box p-4 z-20 border my-5 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="Education-text text-lg font-bold text-purple-600">
            B.E Electronics and Communication Engineering
          </h1>
          <p className="text-sm text-white">
            Chitkara University, Graduation Date: July 2024
          </p>
          <p className="text-sm text-white  ">CGPA: 7.14 </p>
        </div>

        <div className="Education-box p-4 z-20 border my-5 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="Education-text text-lg font-bold text-purple-600">
            12th Standard
          </h1>
          <p className="text-sm text-white">
            Play Ways Senior Secondary School, Passing Year: March 2020
          </p>
          <p className="text-sm text-white">Percentage: 60.6%</p>
        </div>

        <div className="Education-box p-4 z-20 border my-5 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="Education-text text-lg font-bold text-purple-600">
            10th Standard
          </h1>
          <p className="text-sm text-white">
            Shri Aurobindo International School, Passing Year: March 2017
          </p>
          <p className="text-sm text-white">CGPA: 5.8</p>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[100px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          "The only limit to our realization of tomorrow is our doubts of
          today." – Franklin D. Roosevelt
        </div>
      </div>
    </div>
  );
};

export default EducationBackground;
