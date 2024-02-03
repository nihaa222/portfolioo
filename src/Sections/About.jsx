import styled from "styled-components";
import Abtem from "../components/Abtem";

const Section = styled.div`
  height: 100vh;
  /* background-color: #f2e4e6; */
  scroll-snap-align: center;
`;

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 h-full pt-[12%] md:grid-cols-1 md:w-[800px] lg:w-[1000px] xl:w-[1400px] w-[300px] mx-auto">
        <div>
          <Abtem />
        </div>

        <div className="flex flex-col gap-6 justify-self-center">
          <div className="">
            <p className="text-pink-500 font-bold xl:text-[60px]">ABOUT ME</p>
          </div>
          <div>
            <p className="md:text-center whitespace-nowrap lg:text-[25px] text-justify md:justify-self-start font-bold lg:text-left">
              A dedicated Front-end Developer
              <img
                className="h-8 w-8 inline-block"
                src="location.png"
                alt="location"
              />
            </p>
          </div>
          <div className="mt-5">
            <p className="text-gray-500 flex flex-col  gap-4  lg:text-[14px] md:mt-[10px] xl:leading-7  xl:text-[20px] text-[12px] md:text-[18px] md:w-[700px] lg:w-[400px]">
              <p className="font-semibold">
                As a junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and Redux
              </p>
              <p className="font-semibold">
                Experienced in designing and maintaining responsive websites,
                ensuring a smooth user experience.
              </p>
              <p className="font-semibold">
                Expertise in crafting dynamic and engaging interfaces through
                clean and optimized code, utilizing cutting-edge development
                tools and techniques.
              </p>
            </p>
          </div>
        </div>
        {/* <StyledParagraphs className="grid grid-cols-1 z-1 lg:w-[400px] lg:h-[550px] lg:justify-self-center gap-4 lg:gap-0">
          <div>
            <p className="text-pink-500 lg:text-[60px] font-bold">ABOUT ME</p>
          </div>

          <p className="md:text-center whitespace-nowrap lg:text-[25px] text-justify md:justify-self-start font-bold lg:text-left">
            A dedicated Front-end Developer
            <img
              className="h-6 w-8 inline-block"
              src="location.png"
              alt="location"
            />
          </p>
          <p className="text-gray-500 flex flex-col text-wrap gap-4 md:text-center lg:text-[14px] md:mt-[10px] xl:text-[20px] xl:w-[500px] text-[12px] md:text-[18px] md:w-[700px] lg:w-[400px]">
            <p className="font-semibold">
              As a junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and Redux
            </p>
            <p className="font-semibold">
              Experienced in designing and maintaining responsive websites,
              ensuring a smooth user experience.
            </p>
            <p className="font-semibold">
              Expertise in crafting dynamic and engaging interfaces through
              clean and optimized code, utilizing cutting-edge development tools
              and techniques.
            </p>
          </p>
        </StyledParagraphs> */}
      </div>
    </Section>
  );
};

export default About;
