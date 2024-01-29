import styled from "styled-components";
import ContactForm from "../components/form";

const Section = styled.div`
  height: 100vh;
  margin-top: 10px;
  padding-top: 10px;
  scroll-snap-align: center;
`;

const Contacts = () => {
  return (
    <Section id="contacts" className="xs:pt-[30px]">
      <p className="text-center text-bold text-pink-500 font-bold lg:text-[60px] animate-pixi xs:text-[50px] text-[35px] xs:mb-2 mb-[20px]">
        Get in touch ?
      </p>

      <div className="h-full mx-auto flex xs:pt-[30px] justify-center">
        <div className="xs:h-[600px] shadow-2xl lg:w-[800px] h-[550px] xs:w-[320px] w-[300px] z-1 rounded-3xl bg-opacity-20 bg-gradient-to-r from-463f3a via-#E9EB9E to-pink-600">
          <p className="text-center xs:text-[30px] text-[18px] mt-4 z-10 text-white">
            CONTACT ME!
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
