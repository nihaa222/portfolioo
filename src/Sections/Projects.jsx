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
    /* animation: lineAnimation 2s linear infinite alternate; */
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
  const food = "https://github.com/nihaa222/Food-Blogger";
  const fooddemo = "https://fooddy1.netlify.app/";
  return (
    <Section id="project">
      <div className=" text-center mb-[30px]  ">
        <p className="text-[18px]  lg:text-[60px] text-pink-500  font-bold">
          PROJECTS
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
                src="New Tab - Google Chrome 30-01-2024 00_02_42.png"
                alt="Project Image"
              />
            </div>
          </Tilt>
          {/* 2 */}

          <LineA className="w-[40px] absolute md:left-[350px] xl:ml-[240px]">
            <div className="h-[280px] w-2   bg-pink-700"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  ">
              <p className="font-semibold justify-self-left lg:text-[25px] text-pink-700">
                FAST PIZZA{" "}
              </p>
              <p className="text-[12px] lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                This application enables users to order their desired pizza,
                customize the order according to their preferences, and have it
                delivered to their location. It has multiple features, one of
                which involves geolocation to fetch the current location of the
                user.
              </p>
            </div>
            <div className="flex p-6 xl:p-2 gap-8 justify-center xl:align-center font-bold">
              <p>
                <img className="h-8 w-15" src="reactnew.png"></img>
              </p>
              <p>
                <img className="h-8 w-15" src="th-removebg-preview.png"></img>
              </p>
            </div>

            <div className="flex gap-8 justify-center p-4 items-center  sm:p-2 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <a className="cursor" href={food}>
                  <FaGithub />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cursor"
                  href={fooddemo}
                >
                  <PiArrowSquareOutBold />
                </a>
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
                className=" rounded-2xl xl:w-[500px]"
                src="reactapp.png"
              ></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[512px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineB>
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  justify-items-center">
              <p className="font-bold mr-0 lg:mr-12 lg:text-[25px] text-pink-700 justify-self-end">
                GROW{" "}
              </p>
              <p className="text-[12px] text-end mr-10 lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                This represents a fully responsive landing page for a finance
                enterprise, meticulously crafted with an aesthetically pleasing
                user interface that seamlessly adapts to various screen sizes
                and devices, ensuring visually compelling experience for all yhe
                visitors.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center font-bold">
              <p>
                <img className="h-8 w-15" src="reactnew.png"></img>
              </p>
              <p>
                <img className="h-8 w-15" src="th-removebg-preview.png"></img>
              </p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 font-bold pb-2">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://demoyd.netlify.app/"
                >
                  <PiArrowSquareOutBold />
                </a>
              </div>
            </div>
          </div>
        </ProjectB>

        <ProjectC className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 relative">
          {/* 1 */}
          <Tilt>
            <div
              className="xl:w-[500px]"
              style={{
                boxShadow:
                  " rounded-2xl 14px -13px 80px 1px rgba(0, 0, 0, 0.404)",
              }}
            >
              <img
                className="mb-2 xl:w-[500px] rounded-2xl"
                src="ecommerce.png"
              ></img>
            </div>
          </Tilt>
          {/* 2 */}
          <LineC className="w-[20px] absolute md:left-[310px] xl:ml-[240px]">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineC>
          <div className="grid grid-cols-1 ">
            <div className="grid grid-cols-1   ">
              <p className="font-bold lg:text-[25px] justify-self-start text-pink-700">
                OREBI
              </p>
              <p className="text-[12px] xl:w-[510px] lg:text-[20px] sm:text-[14px ] p-2">
                This is a meticulously designed, fully responsive ecommerce
                website that is tailored to enhance the shopping experience, the
                platform provides customers with the flexibility to customize
                their purchases according to individual preferences.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center font-bold">
              <p>
                {" "}
                <img className="h-8 w-15" src="reduxnew.png"></img>
              </p>
              <p>
                {" "}
                <img className="h-8 w-15" src="th-removebg-preview.png" />
              </p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 p-4 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  href="https://ecommerceforu.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PiArrowSquareOutBold />
                </a>
              </div>
            </div>
          </div>
        </ProjectC>

        <ProjectB className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 relative">
          {/* 1 */}
          <Tilt className="sm:order-2">
            <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.404)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="appframer.png"
              ></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[512px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineB>
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  ">
              <p className="font-bold mr-0 lg:mr-12 lg:text-[25px] justify-self-end text-pink-700">
                GIGAPLAY{" "}
              </p>
              <p className="text-[12px] text-end xl:w-[500px] lg:text-[20px] sm:text-[14px] p-2">
                Experience a captivating online journey with our fully animated
                website, enriched with the dynamic and engaging power of Framer
                Motion. Immerse yourself in a visually stunning attractions
                where every page comes to life with eye-catching animations.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center font-bold">
              <p>
                {" "}
                <img className="h-8 w-15" src="frame.png"></img>
              </p>
              <p>
                {" "}
                <img className="h-8 w-15" src="th-removebg-preview.png" />
              </p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 font-bold pb-2">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <FaGithub />
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="pointer"
                  href="https://framerio.netlify.app/"
                >
                  <PiArrowSquareOutBold />
                </a>
              </div>
            </div>
          </div>
        </ProjectB>
      </div>
    </Section>
  );
};

export default Projects;
