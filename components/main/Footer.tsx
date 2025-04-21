"use client";
import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full bg-transparent text-gray-200 shadow-lg p-4 absolute-fixed bottom-0 left-0 z-10"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <h1 className="mb-4 text-center">Contact Me</h1>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center my-2 mx-2">
            <a
              href="https://www.youtube.com/@ratanabhsharmavlogs/"
              className="flex items-center cursor-pointer"
            >
              <FaYoutube />
              <span className="text-sm ml-2">YouTube</span>
            </a>
          </div>
          <div className="flex flex-col items-center my-2 mx-2">
            <a
              href="https://github.com/RatanabhSharma"
              className="flex items-center cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-sm ml-2">Github</span>
            </a>
          </div>
          <div className="flex flex-col items-center my-2 mx-2">
            <a
              href="https://www.linkedin.com/in/ratanabh-sharma"
              className="flex items-center cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-sm ml-2">LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-col items-center my-2 mx-2">
            <a
              href="https://www.instagram.com/ratanabh.sharma/"
              className="flex items-center cursor-pointer"
            >
              <FaInstagram />
              <span className="text-sm ml-2">Instagram</span>
            </a>
          </div>
          <div className="flex flex-col items-center my-2 mx-2">
            <a
              href="/Ratanabh Sharma.pdf"
              download="Ratanabh Sharma.pdf"
              className="flex items-center cursor-pointer"
            >
              <span className="text-sm ml-2">Download Resume</span>
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">0 RatanabhSharma</div>
      </div>
    </div>
  );
};

export default Footer;
