import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#c9f31d] text-4xl font-bold">Sheikh Umair</h1>
          <div className="flex gap-2">
            <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d] p-2">
              <a href="https://www.linkedin.com/in/umair-n-937986a0/">
                <Linkedin
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="text-white hover:text-black"
                />
              </a>
            </div>
            <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d] p-2">
              <a href="https://twitter.com/UmairNajeeb9">
                <Twitter
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="text-white hover:text-black"
                />
              </a>
            </div>
            <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d] p-2">
              <a href="https://www.facebook.com/umairna">
                <Facebook
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="text-white hover:text-black"
                />
              </a>
            </div>
            <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out hover:bg-[#c9f31d] p-2">
              <a href="https://www.instagram.com/ig__umair/">
                <Instagram
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="text-white hover:text-black"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h6 className="text-white text-[18px]">Quick Links</h6>
            <ul className="text-[hsla(0,0%,100%,.65)] mb-4 flex flex-col gap-2">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h6 className="text-white text-[18px]">Address</h6>
            <ul className="flex flex-col gap-2">
              <li className="text-[18px] text-[hsla(0,0%,100%,.65)]">
                <i className="far fa-map-marker-alt"></i> Srinagar, Jammu &
                Kashmir
              </li>
              <li className="text-[18px] text-[hsla(0,0%,100%,.65)]">
                <i className="far fa-envelope"></i>{" "}
                <a href="mailto:umairnajeeb95@gmail.com">
                  umairnajeeb95@gmail.com
                </a>
              </li>
              <li className="text-[18px] text-[hsla(0,0%,100%,.65)]">
                <i className="far fa-phone"></i>{" "}
                <a href="callto:+91-9682193404">+91-9682193404</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
