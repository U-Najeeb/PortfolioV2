import { ArrowUpRight, Asterisk } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Experience = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        controls.start({ opacity: 1, y: 10 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div
      className="w-[1620px] max-w-[1620px]  flex h-[700px] max-h-[788px] py-[130px] rounded-lg z-1 "
      id="experience"
    >
      <motion.div className="flex mx-auto gap-20 items-center">
        <div className="h-full">
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{
              rotate: "360deg",
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
            className="rounded-full border-2 border-[hsla(0,0%,100%,.1)] flex items-center justify-center bg-[#1f1f1f] w-[270px] h-[270px]"
          >
            <Asterisk className="w-[30rem] h-[20rem] text-[#c9f31d] " />
          </motion.div>
        </div>
        <div>
          <div>
            <div className="w-[40rem]">
              <span className="text-[hsla(0,0%,100%,.65)] font-medium block mb-4">
                My Experience
              </span>
              <h2 className="text-[45px] text-white mb-6 capitalize">
                Here is a quick summary of my most{" "}
                <span className="text-[#c9f31d] capitalize">
                  recent experiences:
                </span>
              </h2>
            </div>
          </div>
          <div className="overflow-hidden bg-[#1f1f1f] pt-20 pb-20 rounded-xl w-[60rem] grid grid-cols-2 gap-x-2 place-items-center">
            <motion.div
              animate={controls}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-4 h-full w-fit "
            >
              <div className="rounded-full bg-[#131313] h-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d]">
                <ArrowUpRight className="text-white w-[44px] h-[44px] rounded-full p-3" />
              </div>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)]">
                  August 2023 - February 2024
                </span>
                <h4 className="text-2xl text-white mb-2 mt-4">Internship</h4>
                <span className="text-[#ffffff59]">
                  IQuasar Software Solutions
                </span>
              </div>
            </motion.div>
            <motion.div
              animate={controls}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-4 h-full w-[26rem] "
            >
              <div className="rounded-full bg-[#131313] transition-all duration-300 ease-in-out h-fit hover:bg-[#c9f31d]">
                <ArrowUpRight className="text-white w-[44px] h-[44px] rounded-full p-3 hover:text-black" />
              </div>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)]">
                  February 2024 - Present
                </span>
                <h4 className="text-2xl text-white mb-2 mt-4">
                  Junior Full Stack Web Developer
                </h4>
                <span className="text-[#ffffff59]">
                  IQuasar Software Solutions
                </span>
              </div>
            </motion.div>
            {/* <motion.div
              animate={controls}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-4 h-40 "
            >
              <div className="rounded-full bg-[#131313] transition-all duration-300 ease-in-out h-fit hover:bg-[#c9f31d]">
                <ArrowUpRight className="text-white w-full h-full rounded-full p-3 hover:text-black " />
              </div>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)]">
                  2021 - Present
                </span>
                <h4 className="text-2xl text-white mb-2 mt-4">
                  Lead Product Designer
                </h4>
                <span className="text-[#ffffff59]">Google</span>
              </div>
            </motion.div>
            <motion.div
              animate={controls}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-4 h-40 "
            >
              <div className="rounded-full bg-[#131313] transition-all duration-300 ease-in-out h-fit hover:bg-[#c9f31d]">
                <ArrowUpRight className="text-white w-full h-full rounded-full p-3 hover:text-black" />
              </div>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)]">
                  2021 - Present
                </span>
                <h4 className="text-2xl text-white mb-2 mt-4">
                  Lead Product Designer
                </h4>
                <span className="text-[#ffffff59]">Google</span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
