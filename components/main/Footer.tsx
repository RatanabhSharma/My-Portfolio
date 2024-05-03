import React from "react";
// import resume from "publicRatanabh Sharma.pdf";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] absolute-fixed bottom-0 left-0 z-[10]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col items-center justify-around flex-wrap">
          <div className="w-full h-auto flex flex-row  justify-around">
            <a
              href="https://www.youtube.com/@ratanabhsharmavlogs/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>

            <a
              href="https://github.com/yourusername"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            {/* <a
              href="public\Ratanabh Sharma.pdf"
              download={"Ratanabh Sharma.pdf"}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              Download Resume
            </a> */}
            <a
              href="https://www.linkedin.com/in/ratanabh-sharma"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/ratanabh.sharma/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
          </div>

          <div className="mb-[20px] mt-[50px] text-[15px] text-center">
            © Ratanabh Sharma
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
