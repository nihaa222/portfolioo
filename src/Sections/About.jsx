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
      <div className="grid grid-cols-1  lg:grid-cols-2 xl: justify-items-center gap-4 h-full pt-[12%] md:grid-cols-1 md:w-[800px]  lg:w-[1000px]  xl:w-[1400px]  w-[300px] mx-auto">
        <div>
          <Abtem />
        </div>

        <div className="grid grid-cols-1 z-1 lg:w-[400px] lg:h-[550px]  lg:justify-self-center  gap-4 lg:gap-0">
          <div>
            <p className="text-pink-500  lg:text-[60px] font-bold">ABOUT ME</p>
          </div>

          <p className=" md:text-center whitespace-nowrap lg:text-[25px] md:justify-self-start font-bold lg:text-left ">
            A dedicated Front-end Developer
            <img
              className="h-6 w-8  inline-block"
              src="location.png"
              alt="location"
            />
          </p>
          <p className="text-gray-500 flex flex-col gap-4 md:text-start lg:text-[14px] md:mt-[10px] xl:text-[16px] xl:w-[500px] text-[12px] md:text-[18px] md:w-[700px] lg:w-[400px]">
            {/* As a junior Front-End Developer.I possess on impressive arsenal of
            skills in HTML,CSS, javascrip, React,Tailwind and Redux. I excel in
            designing and maintaining responsive websites that after a smooth
            user experience. My expertise lies in crafting dynamic,engaging
            interfaces thriugh writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            prodice outstanding web applications */}
            <p className="font-semibold">
              As a junior Front-End Developer.I possess on impressive arsenal of
              skills in HTML,CSS, javascript, React,Tailwind and Redux{" "}
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
        </div>
      </div>
    </Section>
  );
};

export default About;
