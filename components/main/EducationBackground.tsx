"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const EducationBackground = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <motion.div
        variants={slideInFromTop}
        className="text-4xl md:text-6xl font-medium text-center text-gray-200 mt-8 md:mt-16"
      >
        Education
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Background
        </span>
      </motion.div>

      <div className="flex flex-col items-center justify-center my-8 md:my-16">
        <div className="education-box p-1 md:p-5 border my-3 md:my-4 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="education-text text-lg md:text-xl font-bold text-purple-600">
            Chitkara University,Rajpura, dist-Patiala(Pb)
          </h1>
          <p className="text-sm md:text-base text-white">
            B.E Electronics and Communication Engineering
            <br />
            Graduation Date:Augest 2024
          </p>
          <p className="text-sm md:text-base text-white">CGPA:7.13</p>
        </div>

        <div className="education-box p-1 md:p-5 border my-3 md:my-4 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="education-text text-lg md:text-xl font-bold text-purple-600">
            Play Ways Senior Secondary School, Patiala(Pb)
          </h1>
          <p className="text-sm md:text-base text-white">
            12th Standard
            <br /> Passing Year: March 2020
          </p>
          <p className="text-sm md:text-base text-white">Percentage:60.6%</p>
        </div>

        <div className="education-box p-1 md:p-5 border my-3 md:my-4 border-purple-500 opacity-90 bg-transparent rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="education-text text-lg md:text-xl font-bold text-purple-600">
            Shri Aurobindo International School, Patiala(Pb)
          </h1>
          <p className="text-sm md:text-base text-white">
            10th Standard
            <br />
            Passing Year: March 2017
          </p>
          <p className="text-sm md:text-base text-white">CGPA:5.8</p>
        </div>
      </div>

      <div className="cursive text-sm md:text-lg font-medium text-center text-gray-300 mb-8 md:mb-16">
        &quot; The only limit to our realization of tomorrow is our doubts of
        today. &ndash; Franklin D. Roosevelt&quot;
      </div>
    </div>
  );
};

export default EducationBackground;
