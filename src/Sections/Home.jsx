import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../Sections/animation.css";
import "animate.css/animate.css";

const Section = styled.div`
  height: 100vh;
  background-color: #f9f1e5;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Home = () => {
  const linkedinProfileUrl = "https://www.linkedin.com/in/niharika-deb/";
  const gitProfileUrl = "https://github.com/nihaa222";
  return (
    <>
      <Section>
        <Navbar />
        {/* <div
        className="h-90vh w-[80%] md:w-[70%] mt-[25%]    sm:mt-[10%]  flex flex-col sm:flex-row sm:justify-between
        items-center "
      >
        <div>
          <div className="flex sm:flex-row justify-center font-bold sm:text-[50px]  ">
            <h1>
              Front-End React Developer{" "}
              <img className="h-10 w-10" src="hand.png" />
            </h1>
          </div>
          <p className="flex ">
            Hi, I'm Niharika Deb. A passionate Front-end React Developer based
            in Guwahati, India
            <img className="h-8 w-15" src="location.png"></img>
          </p>
          <div className="flex gap-2">
            <a
              href={linkedinProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a href={gitProfileUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <div className=" sm:flex-3">
          <img src="face.png" className="h-40 w-40 sm:h-60 sm:w-60" />
        </div>
  </div> */}

        <div className="mt-[25%] sm:mt-[20%] md:mt-[25%] lg:mt-[12%]  gap-10 justify-between items-center flex flex-col sm:flex-row m-8 sm:ml-20 sm:mr-20">
          <div className="flex flex-2 flex-col w-[70%] sm:w-[70%] lg:w-[60%] xl:w-[50%]">
            <div className="flex items-center font-bold text-[35px] sm:text-[35px] md:text-[45px] lg:text-[50px] ">
              <h1 className="leading-2">Front-End React Developer</h1>
              <img className="h-10 w-10" src="hand.png" />
            </div>
            <div className="flex">
              <p className="mr-2 flex-wrap mt-4">
                Hi, I'm Niharika Deb. A passionate Front-end React Developer
                based in Guwahati, India
              </p>
              <img className="h-8 w-15" src="location.png"></img>
            </div>
            <div className="flex gap-2 mt-4">
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a href={gitProfileUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <div className="flex-3 w-[30%] mb-2 ">
            <img
              src="face.png"
              className="h-40 rounded-full w-40 sm:h-80 sm:w-70 animate-duration-10000 animate-bounce animate-infinite animate-alternate animate-bounceUpDown ease "
            />
          </div>
        </div>
        <div className=" hover:-translate-y-6 flex flex-col sm:flex-row gap-10 self-start  ml-[12%] sm:ml-[10%] lg:ml-[8%] xl:ml-[14%] 2xl:ml-[24%] mt-[12%] md:mt-[10%] lg:mt-[13%] 2xl:mt-[6%] xl:mt-[10%]  sm:mt-[16%] mr-[15%]">
          <p className="white-space-nowrap">Tech Stack</p>
          <div className="flex gap-9 flex-row">
            <img className="h-7 w-7" src="html-5.png" />
            <img className="h-8 w-8" src="css-3.png" />
            <img className="h-8 w-8" src="js.png" />
            <img className="h-8 w-8" src="react.png" />
            <img className="h-8 w-8" src="th-removebg-preview.png" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
