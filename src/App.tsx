import Header from "./components/Header/Header";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  const lines = [...Array(15).keys()];
  return (
    <div>
      <div className="bg-[#131313] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background lines */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex gap-40 overflow-hidden"
            initial={{ x: "0%" }}
            animate={{ x: "10%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {lines.map((index) => (
              <motion.div
                key={index}
                className="flex-none w-[1px] h-full bg-[#6c757d] opacity-20"
              ></motion.div>
            ))}
          </motion.div>
        </div>
        {/* Content */}
        <div className="relative z-[99999] ">
          <section className="flex justify-center mb-36">
            <Header />
          </section>
          <section className="flex justify-center mb-72 sm:mb-0">
            <HeroSection />
          </section>
          <section className="flex justify-center pb-[100px]">
            <About />
          </section>
          <section className="flex justify-center pb-[100px]">
            <Experience />
          </section>
          <section className="flex justify-center pb-[100px]">
            <Skills />
          </section>
          <section className="flex justify-center pb-[100px]">
            <ProjectSection />
          </section>
          <section className="flex justify-center pb-[100px]">
            <ContactSection />
          </section>
          <section className="flex justify-center pb-[100px]">
            <Footer />
          </section>
          <section className="flex justify-center bg-black p-10 ">
            Copyright @2024,{" "}
            <span className="text-[#c9f31d] flex px-2">Sheikh Umair</span>All
            Rights Reserved
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
