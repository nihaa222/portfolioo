import styled from "styled-components";
import Navbar from "../components/Navbar";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
// import { useTypewriter } from "react-simple-typewriter";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTypingEffect } from "../components/typing-effect";

const Section = styled.div`
  height: 100vh;
  background-color: #d6cbbc;
  margin: auto;

  scroll-snap-align: center;

  z-index: -1;
`;

// const Home = () => {
//   return (
//     <Section>
//       <Navbar />
//     </Section>
//   );
// };

// export default Home;

const Home = () => {
  const text = useTypingEffect("Front-End Developer", 200);
  const linkedinProfileUrl = "https://www.linkedin.com/in/niharika-deb/";
  const gitProfileUrl = "https://github.com/nihaa222";
  const [showText, setShowText] = useState(false);
  const setup = useSelector((state) => state.setup.value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Section id="home" className="h-[100vh] background">
        <Navbar />

        <div className="h-70% m-6 flex flex-col gap-12 items-center">
          <div className="flex  gap-4 flex-col">
            <div
              className="text-[20px]  flex font-bold"
              style={{ display: "inline" }}
            >
              <p style={{ display: "inline" }}>Hi</p>
              <p style={{ display: "inline" }}>
                <img
                  style={{ display: "inline" }}
                  className="h-6 w-6 mb-3"
                  src="hand.png"
                ></img>
              </p>

              <p className="text-[25px] font-semibold">I'm NIHARIKA DEB</p>
              <p className="text-[25px] font-semibold ">{text}</p>
            </div>
            <div>
              <p className=" leading-tight  text-gray-600 ">
                A skilled and passionate developer with experience in creationg
                visulally appealing and user-friendly websites
              </p>
            </div>
            <div className="flex gap-3 text-pink-700 ">
              <a href={linkedinProfileUrl}>
                <IoLogoLinkedin />
              </a>
              <a href={gitProfileUrl}>
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <div>
              <img
                style={{
                  boxShadow: "-3px -6px 29px -1px rgba(219, 39, 119, 0.75)", // Tailwind pink-500 color
                  display: setup === true ? "none" : "block",
                }}
                className="h-40 w-40 rounded-full "
                src="face.png"
              ></img>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <img className="h-8  w-8" src="html-5.png"></img>
              <img className="h-8  w-8" src="css-3.png"></img>
              <img className="h-8  w-8" src="js.png"></img>
              <img className="h-8  w-8" src="react.png"></img>
              <img className="h-8  w-8" src="redux.png"></img>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

// <div className=" h-full w-auto flex   justify-center mt-[10%] md:mt-[12%] xl:mt-[8%] sm:mt-[10%] lg:mt-[5%] 2xl:mt-[5%] ">
// <div className="grid md:ml-[0px] lg:w-[800px] gap-10 md:w-[650px] xl:w-[1100px] xl:mx-[0px]  2xl:w-[1100px] w-[350px] xs:w-[300px] sm:w-[500px]   place-items-center  lg:gap-y-28  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 items-center  ">
//   <div className="w-[400px] xs:mr-[-30px] sm:mr-[0px]  inline-block justify-self-center md:justify-self-start sm:ml-[50px] md:ml-[0px] ">
//     <p className="text-[40px] ">
//       <div className="flex items-center ">
//         <div className="text-[18px] mb-[-30px] sm:text-[30px] text-gray-500 font-bold">
//           {" "}
//           Hi!
//         </div>
//         <div>
//           <img
//             className=" inline-block  h-7 w-7  2xl:h-[30px] 2xl:w-[30px]"
//             src="hand.png"
//           ></img>
//         </div>
//       </div>
//     </p>

//     <p className="md:text-[40px]  whitespace-nowrap lg:mb-[10px] lg:text-[30px] xl:text-[65px] 2xl:text-[70px]  text-[25px] font-bold w-[600px]  mb-4 md:mb-0 ">
//       <div style={{ color: "#e91e63" }}>I'm Niharika Deb</div>
//       <div className="mt-[-10px] ">
//         {showText && (
//           <div>
//             <span style={{ color: "#e91e63" }}>{text}</span>
//           </div>
//         )}
//       </div>
//     </p>
//     <p className=" w-[320px] xs:leading-[17px] sm:leading-tight xs:w-[300px]  xs:text-[15px] text-[18px]  sm:text-[20px] lg:w-[450px] xl:w-[600px] lg font xl:text-[20px] md:text-[22px] text-gray-500 ">
//       A skilled and passionate developer with experience in creationg
//       visulally appealing and user-friendly websites
//     </p>

//     <div className="flex gap-2 mt-4">
//       <a href={linkedinProfileUrl}>
//         <IoLogoLinkedin />
//       </a>
//       <a href={gitProfileUrl}>
//         <FaGithub />
//       </a>
//     </div>
//   </div>
//   <div
//     className={` md:justify-self-end animate-pixi mr-[50px] sm:mr-[0px] translate-x-1`}
//   >
//     <img
//       className=" h-48 w-48 md:h-40 md:w-40 ] lg:w-[300px] lg:h-[300px]     rounded-full "
//       src="face.png"
//       style={{
//         boxShadow: "-3px -6px 29px -1px rgba(219, 39, 119, 0.75)", // Tailwind pink-500 color
//         display: setup === true ? "none" : "block",
//       }}
//     ></img>
//     {/* #animation */}
//   </div>
//   <div
//     style={{ display: setup ? "none" : "block" }}
//     className="  md:w-[600px] md:justify-self-start  animate-pulse sm:mr-[100px] xl:mt-[-150px] md:mr-[0px] justify-self-start sm:justify-self-center  md:mt-[0px]  flex md:flex-row flex-col md:gap-5 gap-3  md:items-center"
//   >
//     <p className="whitespace-nowrap">Tech Stack</p>
//     <div className="h-5 w-[0.8px] hidden md:block bg-black"></div>
//     <div className=" flex place-items-start md:gap-16 gap-8">
//       <img className="h-8 w-8" src="html-5.png"></img>
//       <img className="h-8 w-8" src="css-3.png"></img>
//       <img className="h-8 w-8" src="js.png"></img>
//       <img className="h-8 w-8" src="react.png"></img>
//       <img className="h-8 w-8" src="redux.png"></img>
//     </div>
//   </div>
//   <div></div>
// </div>
// </div>
