import { Check, Mail, Phone } from "lucide-react";
// import btn1Image from "/images/btn-image1.png";
import aboutPic from "/images/about.jpg";
import aboutDot from "/images/about-dot.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
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
      id="about"
      className="w-[1620px] max-w-[1620px] bg-[#070707] flex h-[788px] max-h-[788px] py-[130px] rounded-lg overflow-hidden"
    >
      <motion.div
        className="flex mx-auto gap-20 items-center"
        animate={controls}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="mx-auto w-[46.8rem] px-[30px]">
          <div>
            <span className="text-[hsla(0,0%,100%,.65)] block mb-4">
              About Me
            </span>
            <h2 className="text-[45px] text-white mb-6">
              Curious
              <span className="text-[#c9f31d] "> About Me? </span>
              Here you have it:
            </h2>
            <p className="text-[hsla(0,0%,100%,.65)] mb-8">
              I'm an enthusiastic and versatile full-stack web developer
              proficient in React, Express JS, Node JS, MongoDB, PostgreSQL, and
              a range of other technologies. Committed to excellence, I thrive
              on continuous learning and problem-solving, emphasizing
              adaptability and crafting exceptional digital experiences with
              speed, accessibility, and visual appeal. Eager to join teams and
              contribute innovative solutions in web development.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-40 text-white text-[20px]">
            <li className="mb-5 flex gap-2 items-center w-[27rem]">
              <Check style={{ color: "#c9f31d" }} />
              B.E. in Computer Sceince Engineering
            </li>
            <li className="mb-5 flex gap-2 items-center">
              {" "}
              <Check style={{ color: "#c9f31d" }} />
              Problem Solver
            </li>
            <li className="mb-5 flex gap-2 items-center">
              {" "}
              <Check style={{ color: "#c9f31d" }} />
              Web Development
            </li>
            <li className="mb-5 flex gap-2 items-center">
              {" "}
              <Check style={{ color: "#c9f31d" }} />
              Avid Learner
            </li>
          </ul>
          <div
            className=" mt-7  flex flex-wrap max-w-[600px] rounded-[20px] px-4
           pt-[16px] pb-[2px] justify-center bg-[#1f1f1f] border border-[hsla(0,0%,100%,.1)] gap-7 "
          >
            <label
              className="mb-4 w-full md:w-auto flex gap-5 items-center"
              htmlFor="email"
            >
              <button className="rounded-full w-10 h-10 bg-[#c9f31d] flex justify-center items-center">
                <Mail style={{ width: "16px" }} />
              </button>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)] text-[14px]">
                  Email Me
                </span>
                <br />
                <a
                  href="mailto:umairnajeeb95@gmail.com"
                  className="text-[18px] text-white"
                  id="email"
                >
                  umairnajeeb95@gmail.com
                </a>
              </div>
            </label>
            <div className="mb-4 w-full md:w-auto flex gap-5 items-center">
              <button className="rounded-full w-10 h-10 bg-[#c9f31d] flex justify-center items-center">
                <Phone style={{ width: "16px" }} />
              </button>
              <div>
                <span className="text-[hsla(0,0%,100%,.65)] text-[14px] ">
                  Gimme A Call
                </span>
                <br />
                <a
                  href="callto:+91-9682193404"
                  className="text-[18px] text-white"
                >
                  +91-9682193404
                </a>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
        >
          <img src={aboutDot} alt="Shape" />
        </motion.div>
        <div>
          <img src={aboutPic} alt="About Me" />
          {/* <div>
            <img src={btn1Image} alt="Image" />
            <h6>Experience Designer</h6>
            <i></i>
          </div>
          <div>
            <img src="assets/images/about/btn-image2.png" alt="Image" />
            <h6>Mark J. Collins</h6>
            <i></i>
          </div>
          <div>
            <img src="assets/images/shape/about-dot.png" alt="Shape" />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
