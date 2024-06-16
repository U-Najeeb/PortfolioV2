import { ArrowUpRight } from "lucide-react";
import iqpilot from "/images/iqpilot.png";

const ProjectSection = () => {
  return (
    <div
      className="w-[1620px]  max-w-[1620px] flex h-fit py-[130px] rounded-lg z-1 "
      id="projects"
    >
      <div className="w-full flex justify-center flex-col items-center">
        <div className="w-full text-center ">
          <div>
            <div style={{ visibility: "visible" }}>
              <span className="text-[hsla(0,0%,100%,.65)] block mb-4 font-medium">
                My Projects
              </span>
              <h2 className="text-[45px] text-white mb-6 capitalize font-medium">
                Explore My{" "}
                <span className="text-[#c9f31d] capitalize font-medium">
                  Projects
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] h-fit p-5 gap-14 mb-[50px]">
          <div>
            <div style={{ visibility: "visible" }}>
              <img
                src={iqpilot}
                alt="Project"
                className="w-[53rem] h-full rounded-lg scale-105"
              />
            </div>
          </div>
          <div className="w-[28rem]">
            <div>
              <h2 className="text-white transition-all ease-in-out duration-300 hover:text-[#c9f31d] mb-[30px]">
                <a
                  href="https://ipvt.vercel.app"
                  className="text-[2.7rem] font-medium"
                >
                  Rostering And Advanced Cab Management(IQPilot)
                </a>
              </h2>
              <p className="text-[#e8e6e3a6] mb-[16px]">
                IQ-Pilot is an (AARS) Advanced Automated Rostering System for
                efficient cab management, providing seamless team management,
                cost optimization, real-time updates, and comprehensive
                monitoring for administrators.
              </p>
              <div className="rounded-full bg-[#131313] h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d]">
                <a href="https://ipvt.vercel.app">
                  <ArrowUpRight className="text-white hover:text-black w-12 h-full rounded-full p-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] h-fit p-5 gap-14 mb-[50px]">
          <div className="w-[28rem]">
            <div>
              <h2 className="text-white transition-all ease-in-out duration-300 hover:text-[#c9f31d] mb-[30px]">
                <a
                  href="https://ipvt.vercel.app"
                  className="text-[2.7rem] font-medium"
                >
                  eCommerce Website (GoCART)
                </a>
              </h2>
              <p className="text-[#e8e6e3a6] mb-[16px]">
                An innovative MERN stack eCommerce platform that offers a
                seamless shopping experience. Featuring user authentication,
                secure payment integration with Stripe, and a responsive design,
                our platform simplifies online shopping for customers while
                providing robust features for sellers.
              </p>
              <div className="rounded-full bg-[#131313] h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d]">
                <a href="https://ipvt.vercel.app">
                  <ArrowUpRight className="text-white hover:text-black w-12 h-full rounded-full p-3" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div style={{ visibility: "visible" }}>
              <img
                src={iqpilot}
                alt="Project"
                className="w-[53rem] h-full rounded-lg scale-105"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[90%] h-fit p-5 gap-14">
          <div>
            <div style={{ visibility: "visible" }}>
              <img
                src={iqpilot}
                alt="Project"
                className="w-[53rem] h-full rounded-lg scale-105"
              />
            </div>
          </div>
          <div className="w-[28rem]">
            <div>
              <h2 className="text-white transition-all ease-in-out duration-300 hover:text-[#c9f31d] mb-[30px]">
                <a
                  href="https://ipvt.vercel.app"
                  className="text-[2.7rem] font-medium"
                >
                  Rostering And Advanced Cab Management(IQPilot)
                </a>
              </h2>
              <p className="text-[#e8e6e3a6] mb-[16px]">
                IQ-Pilot is an (AARS) Advanced Automated Rostering System for
                efficient cab management, providing seamless team management,
                cost optimization, real-time updates, and comprehensive
                monitoring for administrators.
              </p>
              <div className="rounded-full bg-[#131313] h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d]">
                <a href="https://ipvt.vercel.app">
                  <ArrowUpRight className="text-white hover:text-black w-12 h-full rounded-full p-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
