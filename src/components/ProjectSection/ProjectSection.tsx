import { ArrowUpRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <div
      className="w-[1620px] max-w-[1620px] flex h-fit py-[130px] rounded-lg z-1 "
      id="projects"
    >
      <div className="w-full">
        <div className="w-full text-center">
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
        <div className="border-2 flex w-[32.5rem] h-fit p-5 gap-8">
          <div>
            <div style={{ visibility: "visible" }}>
              <img src="assets/images/projects/project1.jpg" alt="Project" />
            </div>
          </div>
          <div>
            <div style={{ visibility: "visible" }}>
              <h2 className="transition-all ease-in-out duration-300 hover:text-[#c9f31d] mb-[30px]">
                <a href="project-details" className="text-[2.3rem] font-medium">
                  Social Media Platform (DevConn)
                </a>
              </h2>
              <p className="text-[#e8e6e3a6] mb-[16px]">
                A social media platform that connects developers let them share
                code chat post blogs and connect to communities.
              </p>
              <div className="rounded-full bg-[#131313] h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d]">
                <ArrowUpRight className="text-white hover:text-black w-12 h-full rounded-full p-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 flex w-[32.5rem] h-fit p-5 gap-8">
          <div>
            <div style={{ visibility: "visible" }}>
              <img src="assets/images/projects/project1.jpg" alt="Project" />
            </div>
          </div>
          <div>
            <div style={{ visibility: "visible" }}>
              <h2 className="transition-all ease-in-out duration-300 hover:text-[#c9f31d] mb-[30px]">
                <a href="project-details" className="text-[2.3rem] font-medium">
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
                <ArrowUpRight className="text-white hover:text-black w-12 h-full rounded-full p-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
