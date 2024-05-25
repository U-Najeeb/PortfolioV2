import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import javaScript from "/images/icon-javscript.svg";
import typeScript from "/images/icon-typescript.svg";
import reactIcon from "/images/icon-react.svg";
import nextIcon from "/images/icon-nextjs.svg";
import nodejs from "/images/icon-nodejs.svg";
import express from "/images/icon-express.svg";
import nestjs from "/images/icon-nest.svg";
import socketio from "/images/icon-socket.svg";
import postgres from "/images/icon-postgresql.svg";
import mongo from "/images/icon-mongodb.svg";
import sass from "/images/icon-sass.svg";
import tailwind from "/images/icon-tailwindcss.svg";
import figma from "/images/icon-figma.svg";
import cypress from "/images/icon-cypress.svg";
import storybook from "/images/icon-storybook.svg";
import git from "/images/icon-git.svg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-[1620px] max-w-[1620px] bg-[#070707] flex h-[700px] max-h-[788px] py-[130px] rounded-lg z-1"
    >
      <motion.div
        className="flex mx-auto gap-20 items-center"
        // animate={controls}
        // initial={{ y: 200, opacity: 0 }}
        // transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="mx-auto w-[29rem] px-[30px]">
          <div>
            <span className="text-[hsla(0,0%,100%,.65)] block mb-4 font-medium">
              My Skills
            </span>
            <h2 className="text-[45px] text-white mb-6 capitalize">
              My{" "}
              <span className="text-[#c9f31d] capitalize">
                skills , tools & technologies
              </span>{" "}
              I use
            </h2>
            <p className="text-[hsla(0,0%,100%,.65)] mb-8">
              Proficient in a variety of skills, including expertise in
              front-end technologies like React.js, back-end technologies like
              Node.js and Express.js, database management with MongoDB &
              PostgreSQL, and ensuring smooth integration across the stack.
            </p>
            <button className="rounded-[15px] px-8 py-3 w-42 h-14 bg-[#c9f31d] flex justify-center items-center">
              <a href="/about" className="font-bold flex gap-3 ">
                Learn More <ChevronRight style={{ width: "20px" }} />
              </a>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto w-[45rem] skills-container ">
          <motion.div
            className="grid grid-cols-8 gap-y-10 gap-x-44 border-red-500 place-content-start place-items-center-center p-2"
            initial={{ x: "100%" }} // Start position from the right side
            animate={{ x: "-200%" }} // End position to the left side
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              // repeatType: "reverse",
            }}
          >
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={javaScript} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Javascript</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                95%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={typeScript} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">TypeScript</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                80%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3  hover:border-[#c9f31d] ">
              <img src={reactIcon} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">React</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50   hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3  hover:border-[#c9f31d]">
              <img src={nextIcon} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">NextJS</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50  hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3  hover:border-[#c9f31d]">
              <img src={nodejs} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">NodeJS</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50  hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3  hover:border-[#c9f31d]">
              <img src={express} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">ExpressJS</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50  hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3  hover:border-[#c9f31d]">
              <img src={nestjs} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">NestJS</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50  hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={socketio} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Socket Io</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>

            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={postgres} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">PostgreSQL</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={mongo} alt="Skill" className="w-[1.9rem]" />
              <h5 className="text-white text-lg">MongoDB</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={sass} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Sass/Scss</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={tailwind} alt="Skill" className="w-[7rem]" />
              <h5 className="text-white text-lg">TailwindCSS</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={figma} alt="Skill" className="w-[3rem]" />
              <h5 className="text-white text-lg">Figma</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={cypress} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Cypress</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d]">
              <img src={storybook} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Storybook</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
            <div className="transition duration-500 ease-in-out text-center w-[155px] h-48  rounded-lg py-[6.5rem] px-2 bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] flex flex-col justify-center items-center gap-3 hover:border-[#c9f31d] ">
              <img src={git} alt="Skill" className="w-[4rem]" />
              <h5 className="text-white text-lg">Git</h5>
              <span className="p-2 flex justify-center text-xl w-full font-semibold duration-500 leading-6 rounded-lg bg-black font-dm_sans text-[#6c757d] bg-opacity-50 hover:bg-[#c9f31d] hover:text-black">
                85%
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
