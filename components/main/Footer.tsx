<<<<<<< HEAD
"Use Client";
import React from "react";
=======
"User client"

import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
>>>>>>> 235d56c7dad282fa1aaebcea33343bc897244177

import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] sticky bottom-0 left-0 z-[10]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
<<<<<<< HEAD
            <div className="font-bold text-[16px]">Contact-ME</div>
            <a
              href="https://www.youtube.com/@ratanabhsharmavlogs/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://www.github.com/ratanabhsharma/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ratanabh-sharma"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
=======
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Developer Profile</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">Learning about me</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              ratanabhsharma@outlook.com
            </span>
          </p>
        </div>
>>>>>>> 235d56c7dad282fa1aaebcea33343bc897244177

          <div className="mb-[20px] text-[15px] text-center">
            © Ratanabh Sharma
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
