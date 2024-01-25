import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutBold } from "react-icons/pi";
import Tilt from "react-parallax-tilt";

const LineA = styled.div`
  display: none; /* hide the line by default */

  @media (min-width: 768px) {
    display: block; /* show the line for screens greater than 768px */
    position: absolute;
    /* adjust the left position as needed */

    width: 2px;
    background-color: red;
    animation: lineAnimation 2s linear infinite alternate;
  }
`;
const LineB = styled.div`
  display: none; /* hide the line by default */

  @media (min-width: 768px) {
    display: block; /* show the line for screens greater than 768px */
    position: absolute;
    /* adjust the left position as needed */
    height: 60px;
    width: 2px;
    background-color: red;
    animation: lineAnimation 2s linear infinite alternate;
  }
`;
const LineC = styled.div`
  display: none; /* hide the line by default */

  @media (min-width: 768px) {
    display: block; /* show the line for screens greater than 768px */
    position: absolute;
    /* adjust the left position as needed */
    height: 60px;
    width: 2px;
    background-color: red;
    animation: lineAnimation 2s linear infinite alternate;
  }
`;
const LineD = styled.div`
  display: none; /* hide the line by default */

  @media (min-width: 768px) {
    display: block; /* show the line for screens greater than 768px */
    position: absolute;
    /* adjust the left position as needed */
    height: 60px;
    width: 2px;
    background-color: red;
    animation: lineAnimation 2s linear infinite alternate;
  }
`;

const Section = styled.div`
  scroll-snap-align: center;
  margin-top: 100px;
  padding-top: 100px;

  justify-content: center;
`;

const ProjectA = styled.div`
  box-shadow: none;

  @media (max-width: 425px) {
    box-shadow: 14px -13px 80px 1px rgba(0, 0, 0, 0.404);
  }
`;
const ProjectB = styled.div`
  box-shadow: none;

  @media (max-width: 425px) {
    box-shadow: 14px -13px 80px 1px rgba(0, 0, 0, 0.404);
  }
`;
const ProjectC = styled.div`
  box-shadow: none;

  @media (max-width: 425px) {
    box-shadow: 14px -13px 80px 1px rgba(0, 0, 0, 0.404);
  }
`;
const ProjectD = styled.div`
  box-shadow: none;

  @media (max-width: 425px) {
    box-shadow: 14px -13px 80px 1px rgba(0, 0, 0, 0.404);
  }
`;

const Projects = () => {
  return (
    <Section id="projects">
      <div className=" text-center mb-[30px]  ">
        <p className="text-[18px]  lg:text-[60px] text-pink-500  font-bold">
          PROJECTS
        </p>
        <p className="mt-2 animate-pulse leading-[20.8px] font-semibold">
          Each project is a unique piece of development
        </p>
      </div>

      <div className="mx-auto xl:w-[1200px]  relative md:w-[700px] p-10 grid gap-[50px] md:gap-[100px]">
        <ProjectA
          className="grid grid-cols-1 sm:row-1 sm:grid-cols-2 sm:gap-8"
          // style={{
          //   boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)",
          //   "@media (max-width: 400px)": {
          //     boxShadow: "none",
          //   },
          // }}
        >
          {/* 1 */}
          <Tilt>
            <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="table.avif"
                alt="Project Image"
              />
            </div>
          </Tilt>
          {/* 2 */}

          <LineA className="w-[20px] absolute md:left-[350px] md:h-[100px] xl:ml-[220px]">
            <div className="h-60 w-2 animate-line  bg-red-500"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  justify-items-center">
              <p className="font-semibold text-pink-500">PIZZA </p>
              <p className="text-[12px] xl:w-[500px] sm:text-[14px] p-2">
                This application enables users to order their desired pizza,
                customize the order according to their preferences, and have it
                delivered to their location. It has multiple features, one of
                which involves geolocation to fetch the current location of the
                user.
              </p>
            </div>
            <div className="flex p-6 xl:p-2 gap-8 justify-center xl:align-center font-bold">
              <p>React</p>
              <p>Css</p>
            </div>

            <div className="flex gap-8 justify-center p-4 items-center  sm:p-2 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <PiArrowSquareOutBold />
              </div>
            </div>
          </div>
        </ProjectA>

        <ProjectB className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 relative">
          {/* 1 */}
          <Tilt className="sm:order-2">
            <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="table.avif"
              ></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[520px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-60 w-2 animate-line bg-red-500"></div>
          </LineB>
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  justify-items-center">
              <p className="font-bold text-pink-500">BURGER </p>
              <p className="text-[12px] xl:w-[500px] sm:text-[14px] p-2">
                This application enables users to order their desired pizza,
                customize the order according to their preferences, and have it
                delivered to their location. It has multiple features, one of
                which involves geolocation to fetch the current location of the
                user.
              </p>
            </div>
            <div className="flex p-6 gap-8 justify-center font-bold">
              <p>React</p>
              <p>Css</p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 font-bold pb-2">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <PiArrowSquareOutBold />
              </div>
            </div>
          </div>
        </ProjectB>

        <ProjectC className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 relative">
          {/* 1 */}
          <Tilt>
            <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)" }}
            >
              <img
                className="mb-2 xl:w-[500px] rounded-2xl"
                src="table.avif"
              ></img>
            </div>
          </Tilt>
          {/* 2 */}
          <LineC className="w-[20px] absolute md:left-[310px] xl:ml-[240px]">
            <div className="h-60 w-2 animate-line bg-red-500"></div>
          </LineC>
          <div className="grid grid-cols-1 ">
            <div className="grid grid-cols-1  justify-items-center ">
              <p className="font-bold text-pink-500">RABRI </p>
              <p className="text-[12px] xl:w-[500px] sm:text-[14px ] p-2">
                This application enables users to order their desired pizza,
                customize the order according to their preferences, and have it
                delivered to their location. It has multiple features, one of
                which involves geolocation to fetch the current location of the
                user.
              </p>
            </div>
            <div className="flex p-6 gap-8 justify-center font-bold">
              <p>React</p>
              <p>Css</p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 p-4 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <PiArrowSquareOutBold />
              </div>
            </div>
          </div>
        </ProjectC>

        <ProjectD className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 mb-10">
          {/* 1 */}
          <Tilt className="sm:order-2">
            <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)" }}
            >
              <img
                className=" xl:w-[500px] mb-2 rounded-2xl"
                src="table.avif"
              ></img>
            </div>
          </Tilt>
          <LineD className="w-[20px] md:ml-[340px] xl:ml-[250px] absolute left-[330px]">
            <div className="h-60 w-2 animate-line bg-red-500"></div>
          </LineD>

          {/* 2 */}
          <div className="grid grid-cols-1 ">
            <div className="grid grid-cols-1  justify-items-center ">
              <p className="font-bold text-pink-500">ORANGE </p>
              <p className="text-[14px] xl:w-[500px] sm:text-[14px] p-2">
                This application enables users to order their desired pizza,
                customize the order according to their preferences, and have it
                delivered to their location. It has multiple features, one of
                which involves geolocation to fetch the current location of the
                user.
              </p>
            </div>
            <div className="flex p-6 gap-8 justify-center font-bold">
              <p>React</p>
              <p>Css</p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 p-4 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <PiArrowSquareOutBold />
              </div>
            </div>
          </div>
        </ProjectD>
      </div>
    </Section>
  );
};

export default Projects;
