import progresShape from "/images/progress-shape.png";
import me from "/images/me.png";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col h-[600px] p-4 items-center w-full max-w-[1650px] mb-20 sm:flex sm:flex-row"
      id="home"
    >
      {" "}
      {/* Added items-center and justify-center */}
      <div className="w-full sm:w-[30%]">
        <div className="w-[30rem]">
          <span className="text-[45px] font-[400] text-[hsla(0,0%,100%,.35)] tracking-wide ">
            Hello, I'm{" "}
          </span>
          <h1 className="flex flex-col text-[39px] text-white tracking-wide font-medium sm:text-5xl ">
            <b className="text-[#c9f31d] font-semibold text-[42px] tracking-wide leading-[5rem] sm:text-6xl sm:leading-[5rem]">
              Sheikh Umair
            </b>{" "}
            Full Stack Web Developer
          </h1>
          <p className="my-[2rem] font-medium w-[20rem] text-[hsla(0,0%,100%,.35)] sm:w-full">
            Crafting innovative web experiences that blend technical mastery
            with creative ingenuity.
          </p>
          <div className="flex gap-6">
            <a
              href="/contact"
              className="z-1 cursor-pointer overflow-hidden transition duration-500 font-semibold text-center px-10 py-2.5 items-center relative text-black bg-[#c9f31d] rounded-lg inline-flex justify-center uppercase"
            >
              Hire Me <i className="far fa-angle-right"></i>
            </a>
            <a
              href="/Resume.pdf"
              className="text-white text-[14px] inline-flex items-center capitalize "
              download={"Resume.pdf"}
            >
              Download Resume <i className="far fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-[560px] max-w-[575px] mx-auto text-center overflow-hidden rounded-full h-full">
        <div className="-z-10 w-[425px] h-[425px] absolute left-5 top-4 rounded-full bg-black"></div>
        <img
          src={me}
          alt="Author"
          className="left-16 absolute z-50 h-full object-contain"
        />
        <div>
          <img
            src={progresShape}
            alt="Progress"
            className="absolute top-10 left-1 "
          />
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="py-[30px] px-[50px] bg-[#070707] rounded-xl ">
          <div className="flex flex-col pb-[25px]">
            <span className="text-[#c9f31d] text-[40px] font-[500]">2+</span>
            <span className="text-[hsla(0,0%,100%,.35)]">
              Years Of Experience
            </span>
          </div>
          <hr className="mb-[25px] opacity-[0.2]" />
          <div className="flex flex-col pb-[25px] ">
            <span className="text-[#c9f31d] text-[40px] font-[500]">10+</span>
            <span className="text-[hsla(0,0%,100%,.35)]">Project Complete</span>
          </div>
          <hr className="mb-[25px] opacity-[0.2]" />
          <div className="flex flex-col pb-[25px]">
            <span className="text-[#c9f31d] text-[40px] font-[500]">5+</span>
            <span className="text-[hsla(0,0%,100%,.35)]">
              Client Satisfactions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
