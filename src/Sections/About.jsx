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

        <div className="grid grid-cols-1 lg:w-[400px] lg:h-[550px]  lg:justify-self-center  gap-4 lg:gap-0">
          <div>
            <p className="text-pink-500 animate-pulse lg:text-[60px] font-bold">
              ABOUT ME
            </p>
          </div>

          <p className=" md:text-center lg:text-[20px] md:justify-self-start font-bold lg:text-left ">
            A dedicated Front-end Developer based on Assam, India
            <img
              className="h-6 w-8  inline-block"
              src="location.png"
              alt="location"
            />
          </p>
          <p className="text-gray-500 md:text-start lg:text-[16px] md:mt-[10px] text-[12px] md:text-[18px] md:w-[700px] lg:w-[400px]">
            As a junior Front-End Developer.I possess on impressive arsenal of
            skills in HTML,CSS, javascrip, React,Tailwind and Redux. I excel in
            designing and maintaining responsive websites that after a smooth
            user experience. My expertise lies in crafting dynamic,engaging
            interfaces thriugh writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            prodice outstanding web applications
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
