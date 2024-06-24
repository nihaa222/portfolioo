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
  const blog = "https://github.com/nihaa222/mern-blog";
  const blogdemo = "https://mern-blog-tewy.onrender.com/";
  const ecohub = "https://environment-pcxg.onrender.com/";
  const ecohubgithub = "https://github.com/nihaa222/environment";
  return (
    <Section id="project">
      <div className=" text-center mb-[30px]  ">
        <p className="text-[18px] md:text-[40px]  lg:text-[60px] text-pink-500  font-bold">
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
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="ecohub.png"
                alt="Project Image"
              />
            </div>
          </Tilt>
          {/* 2 */}

          <LineA className="w-[40px] absolute md:left-[350px] xl:ml-[250px]">
            <div className="h-[280px] w-2   bg-pink-700"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  ">
              <p className="font-semibold lg:justify-self-left justify-self-center ml-2 lg:justify-self-start  lg:text-[25px] text-pink-700">
                ECO HUB
              </p>
              <p className="text-[12px] lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                EcoHub serves as a dedicated platform for environmentalists to
                create and join initiatives effortlessly. Through its integrated
                map feature, users can pinpoint locations with a simple click.
                They can also upload images, propose new initiatives, and
                actively engage in existing ones. This seamless functionality
                fosters collaboration and empowers users to make a meaningful
                impact on environmental causes.
              </p>
            </div>
            <div className="flex  gap-8 justify-center xl:align-center font-bold">
              <img className="h-20 w-24" src="\mernphoto.png"></img>
            </div>

            <div className="flex gap-8 justify-center p-4 items-center  sm:p-2 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <a className="cursor" href={ecohubgithub}>
                  <FaGithub />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cursor"
                  href={ecohub}
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
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img className=" rounded-2xl xl:w-[500px]" src="/Blog.png"></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[511.5px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineB>
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  justify-items-center">
              <p className="font-bold mr-0 mt-2 lg:mr-12 lg:text-[25px] text-pink-700 justify-self-center lg:justify-self-end">
                BUSH BLOG
              </p>
              <p className="text-[12px] ml-3 text-start lg:text-end mr-10 lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                Engage with our tech community, sharing insights on Next.js,
                React.js, and JavaScript. Join discussions, create personalized
                profiles, and enjoy a seamless reading experience across
                devices. Powered by the MERN stack, our platform offers
                category-based blogging and leverages Next.js for server-side
                rendering and React.js for dynamic interfaces.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center mt-2 font-bold">
              <img className="h-20 w-24" src="\mernphoto.png"></img>
            </div>

            <div className="flex gap-8 justify-center mt-4 p-4 items-center  sm:p-2 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <a target="_blank" rel="noreferrer" href={blog}>
                  <FaGithub />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a target="_blank" rel="noreferrer" href={blogdemo}>
                  <PiArrowSquareOutBold />
                </a>
              </div>
            </div>
          </div>
        </ProjectB>
        {/* <ProjectA className="grid grid-cols-1 sm:row-1 sm:grid-cols-2 sm:gap-8">
          {/* 0 */}
        {/* <Tilt> */}
        {/* <div
              className="xl:w-[500px]"
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="/Blog.png"
                alt="Project Image"
              />
            </div>
          </Tilt>
          {/* 2 */}
        {/* <LineA className="w-[40px] absolute md:left-[350px] xl:ml-[250px]">
            <div className="h-[280px] w-2   bg-pink-700"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  ">
              <p className="font-semibold lg:justify-self-left justify-self-center ml-2 lg:justify-self-start  lg:text-[25px] text-pink-700">
                FAST PIZZA{" "}
              </p>
              <p className="text-[12px] lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                Engage with our tech community, sharing insights on Next.js,
                React.js, and JavaScript. Join discussions, create personalized
                profiles, and enjoy a seamless reading experience across
                devices. Powered by the MERN stack, our platform offers
                category-based blogging and leverages Next.js for server-side
                rendering and React.js for dynamic interfaces.
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
                <a className="cursor" href={blog}>
                  <FaGithub />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p>Live Demo</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cursor"
                  href={blogdemo}
                >
                  <PiArrowSquareOutBold />
                </a>
              </div>
            </div>
          </div> */}
        {/* </ProjectA> */}
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
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img
                className="mb-2 rounded-2xl xl:w-[500px]"
                src="New Tab - Google Chrome 30-01-2024 00_02_42.png"
                alt="Project Image"
              />
            </div>
          </Tilt>
          {/* 2 */}

          <LineA className="w-[40px] absolute md:left-[350px] xl:ml-[250px]">
            <div className="h-[280px] w-2   bg-pink-700"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  ">
              <p className="font-semibold lg:justify-self-left justify-self-center ml-2 lg:justify-self-start  lg:text-[25px] text-pink-700">
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
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img
                className=" rounded-2xl xl:w-[500px]"
                src="reactapp.png"
              ></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[511.5px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineB>
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  justify-items-center">
              <p className="font-bold mr-0 mt-2 lg:mr-12 lg:text-[25px] text-pink-700 justify-self-center lg:justify-self-end">
                GROW{" "}
              </p>
              <p className="text-[12px] ml-3 text-start lg:text-end mr-10 lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                This represents a fully responsive landing page for a finance
                enterprise, meticulously crafted with an aesthetically pleasing
                user interface that seamlessly adapts to various screen sizes
                and devices, ensuring visually compelling experience for all yhe
                visitors.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center mt-2 font-bold">
              <p>
                <img className="h-8 w-15" src="reactnew.png"></img>
              </p>
              <p>
                <img className="h-8 w-15" src="th-removebg-preview.png"></img>
              </p>
            </div>

            <div className="flex gap-8 justify-center mt-4 p-4 items-center  sm:p-2 font-bold">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nihaa222/finance"
                >
                  <FaGithub />
                </a>
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
              style={{ boxShadow: "14px -13px 80px 1px rgba(0, 0, 0, 0.188)" }}
            >
              <img
                className="mb-2 xl:w-[500px] rounded-2xl"
                src="ecommerce.png"
              ></img>
            </div>
          </Tilt>
          {/* 2 */}

          <LineA className="w-[40px] absolute md:left-[350px] xl:ml-[250px]">
            <div className="h-[280px] w-2   bg-pink-700"></div>
          </LineA>

          <div className="grid grid-cols-1 xl:w-[500px]">
            <div className="grid grid-cols-1  ">
              <p className="font-semibold lg:justify-self-left justify-self-center ml-2 lg:justify-self-start  lg:text-[25px] text-pink-700">
                OBERI
              </p>
              <p className="text-[12px] lg:text-[20px] xl:w-[500px] sm:text-[14px] p-2">
                This is a meticulously designed, fully responsive ecommerce
                website that is tailored to enhance the shopping experience, the
                platform provides customers with the flexibility to customize
                their purchases according to individual preferences.
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
                <a
                  href="https://github.com/nihaa222/ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
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
                src="appframer.png"
              ></img>
            </div>
          </Tilt>
          <LineB className="w-[20px] md:ml-[310px] xl:ml-[510px] absolute md:ml-[300px xl:ml-[530px] ">
            <div className="h-[280px] w-2  bg-pink-700"></div>
          </LineB>{" "}
          {/* 2 */}
          <div className="grid grid-cols-1 sm:order-1 ">
            <div className="grid grid-cols-1  ">
              <p className="font-bold mr-0 lg:mr-12 lg:text-[25px] justify-self-center lg:justify-self-end text-pink-700">
                GIGAPLAY{" "}
              </p>
              <p className="text-[12px] text-start lg:text-end xl:w-[500px] lg:text-[20px] sm:text-[14px] p-2">
                Experience a captivating online journey with our fully animated
                website, enriched with the dynamic and engaging power of Framer
                Motion. Immerse yourself in a visually stunning attractions
                where every page comes to life with eye-catching animations.
              </p>
            </div>
            <div className="flex p-2 gap-8 justify-center font-bold mt-5">
              <p>
                {" "}
                <img className="h-8 w-15" src="frame.png"></img>
              </p>
              <p>
                {" "}
                <img className="h-8 w-15" src="th-removebg-preview.png" />
              </p>
            </div>

            <div className="flex gap-8 justify-center sm:p-2 mt-6 font-bold pb-2">
              <div className="flex items-center gap-2">
                <p>Code</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="pointer"
                  href="https://github.com/nihaa222/gigiplay"
                >
                  <FaGithub />
                </a>
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
