import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME!!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Aastha Naik</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Third-Year CSE Undergraduate Student At Bajaj Institute of Technology, Wardha.
          I love to make New Projects and I am passionate about my career in Engineering Sector.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://instagram.com/_.aasxthaa._?igshid=ZDdkNTZiNTM='>
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/AasthaNaik5'>
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/aastha-naik-091161206/'>
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/Aastha-05'>
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://discord.com/channels/@Aastha#6936'>
                <FaDiscord />
              </a>
            </span>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>

    
  );
}

export default LeftBanner