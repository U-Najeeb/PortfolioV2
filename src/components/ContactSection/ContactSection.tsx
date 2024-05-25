import {
  Check,
  ChevronRight,
  Mail,
  Phone,
  Type,
  UserRound,
} from "lucide-react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const { name, email, subject, message, phone_number } = formData;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
        phone_number,
      };
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID as string,
        import.meta.env.VITE_APP_TEMPLATE_ID as string,
        templateParams,
        import.meta.env.VITE_APP_PUBLIC_KEY as string
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      id="contact"
      className="w-[1620px] max-w-[1620px] bg-[#070707] flex py-[100px] rounded-lg z-1 "
    >
      <div className="flex justify-center gap-12 items-center p-2">
        <div className="w-2/5 h-fit">
          <div className="flex flex-col gap-3">
            <span className="text-[hsla(0,0%,100%,.65)] block mb-4 font-medium">
              Get In Touch
            </span>
            <h2 className="text-[45px] text-white mb-6 capitalize font-medium">
              Let’s Connect for{" "}
              <span className="text-[#c9f31d] capitalize font-medium">
                Projects & Job Opportunities
              </span>
            </h2>
            <p className="text-[hsla(0,0%,100%,.65)] block mb-10">
              I'm eager to connect on exciting projects and job opportunities.
              Whether you need a new website, a mobile app, custom design
              support, or are looking to hire, I'm here to help. Let's bring
              your vision to life!
            </p>
          </div>
          <ul className="text-[hsla(0,0%,100%,.65)] text-[20px] flex flex-col gap-5">
            <li className="flex gap-3">
              {" "}
              <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out bg-[#c9f31d] p-2">
                <Check style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
              1+ Years Of Experience in Full Stack Development
            </li>
            <li className="flex gap-3">
              <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out bg-[#c9f31d] p-2">
                <Check style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
              Proficient in MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </li>
            <li className="flex gap-3">
              <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out bg-[#c9f31d] p-2">
                <Check style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
              Responsive Web & Mobile App Development
            </li>
            <li className="flex gap-3">
              <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out bg-[#c9f31d] p-2">
                <Check style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
              RESTful API & GraphQL Integration
            </li>
            <li className="flex gap-3">
              <div className="rounded-full h-fit w-fit transition-all duration-300 ease-in-out bg-[#c9f31d] p-2">
                <Check style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
              Custom Web Application Design & Development
            </li>
          </ul>
        </div>
        <div>
          <div>
            <form
              id="contactForm"
              name="contactForm"
              onSubmit={handleSubmit}
              className="flex flex-col gap-7"
            >
              <div className="flex gap-4">
                <div>
                  <div className="flex flex-col gap-5">
                    <label htmlFor="name" className="text-[18px]">
                      Full Name
                    </label>
                    <div className="bg-[#17191a] flex w-fit items-center justify-between rounded-lg gap-8 pr-4">
                      <input
                        id="name"
                        placeholder="Jhon Doe"
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        className="bg-transparent outline-none text-white w-full  pt-[19px] pr-[45px] pb-[19px] pl-[30px]"
                      />
                      <label htmlFor="name">
                        <UserRound
                          style={{
                            color: "rgba(232, 230, 227, 0.2)",
                            width: "20px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-5">
                    <label htmlFor="email" className="text-[18px]">
                      Email Address
                    </label>
                    <div className="bg-[#17191a] flex w-fit items-center justify-between rounded-lg gap-8 pr-4">
                      <input
                        id="email"
                        placeholder="jhondoe@email.com"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        className="bg-transparent outline-none text-white w-full  pt-[19px] pr-[45px] pb-[19px] pl-[30px]"
                      />
                      <label htmlFor="email">
                        <Mail
                          style={{
                            color: "rgba(232, 230, 227, 0.2)",
                            width: "20px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="flex flex-col gap-5">
                    <label htmlFor="phone_number" className="text-[18px]">
                      Phone Number
                    </label>
                    <div className="bg-[#17191a] flex w-fit items-center justify-between rounded-lg gap-8 pr-4">
                      <input
                        id="phone_number"
                        placeholder="+880 (123) 456 88"
                        type="text"
                        value={formData.phone_number}
                        name="phone_number"
                        onChange={handleChange}
                        className="bg-transparent outline-none text-white w-full  pt-[19px] pr-[45px] pb-[19px] pl-[30px]"
                      />
                      <label htmlFor="phone_number">
                        <Phone
                          style={{
                            color: "rgba(232, 230, 227, 0.2)",
                            width: "20px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-5">
                    <label htmlFor="subject" className="text-[18px]">
                      Subject
                    </label>
                    <div className="bg-[#17191a] flex w-fit items-center justify-between rounded-lg gap-8 pr-4">
                      <input
                        id="subject"
                        placeholder="Subject"
                        type="text"
                        value={formData.subject}
                        name="subject"
                        onChange={handleChange}
                        className="bg-transparent outline-none text-white w-full  pt-[19px] pr-[45px] pb-[19px] pl-[30px]"
                      />
                      <label htmlFor="subject">
                        <Type
                          style={{
                            color: "rgba(232, 230, 227, 0.2)",
                            width: "20px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="message" className="text-[18px]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ resize: "none" }}
                    className="bg-[#17191a]  outline-none text-white w-full rounded-lg  pt-[19px] pr-[45px] pb-[19px] pl-[30px]"
                  />
                </div>
              </div>
              <div>
                <div>
                  <button className="rounded-[15px] px-8 py-3 w-42 h-14 bg-[#c9f31d] flex justify-center items-center">
                    <a href="/about" className="font-bold flex gap-3 ">
                      Send A Message <ChevronRight style={{ width: "20px" }} />
                    </a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
