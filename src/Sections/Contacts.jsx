import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Section = styled.div`
  height: 100vh;
  margin-top: 10px;
  padding-top: 10px;
  scroll-snap-align: center;
`;

const Contacts = () => {
  return (
    <Section id="contact" className="xs:pt-[30px]">
      <p className="text-center text-bold text-pink-500 font-bold lg:text-[60px] animate-pixi xs:text-[50px] text-[35px] xs:mb-2 mb-[20px]">
        Hello!
      </p>
      <Tilt>
        <div className="h-full mx-auto flex xs:pt-[30px] justify-center">
          <div className="xs:h-[600px] shadow-2xl lg:w-[800px] h-[550px] xs:w-[320px] w-[300px] z-1 rounded-3xl bg-opacity-20 bg-gradient-to-r from-463f3a via-#E9EB9E to-pink-600">
            <p className="text-center xs:text-[30px] text-[18px] mt-4 z-10 text-white">
              CONTACT ME!
            </p>
            <form
              name="contact"
              action="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <div className="xs:gap-5 gap-6 lg:grid-cols-2 grid grid-cols-1 mx-[40px] xs:mx-[30px] mt-5 xs:mt-9 text-white">
                <div className="lg:gap-4">
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="lg:p-2 text-black focus:outline-none focus:outline-blue-50 rounded-md w-68 input-field w-full"
                  />
                </div>
                <div>
                  <label htmlFor="last" className="block">
                    Last Name
                  </label>
                  <input
                    id="last"
                    name="last"
                    required
                    type="text"
                    className="lg:p-2 text-black focus:outline-none focus:outline-blue-50 rounded-md input-field w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="lg:p-2 text-black focus:outline-none focus:outline-blue-50 rounded-md input-field w-full"
                  />
                </div>
                <div>
                  <label className="block">Mobile</label>
                  <input
                    type="number"
                    name="number"
                    required
                    className="lg:p-2 rounded-md text-black focus:outline-blue-50 input-field w-full"
                  />
                </div>
              </div>
              <div className="xs:mx-[30px] mx-[40px] grid grid-cols-1 mt-6 xs:mt-9 text-white gap-4">
                <div>
                  <p>Type your text here...</p>
                  <textarea
                    name="text"
                    id="yourTextareaId"
                    className="w-full focus:outline-none text-black focus:outline-blue-50 rounded-md h-[100px]"
                    required
                  ></textarea>
                </div>
                <div className="justify-self-center">
                  <button className="bg-white hover:bg-white text-black px-8 bg-opacity-50 rounded-3xl py-2">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Tilt>
    </Section>
  );
};

export default Contacts;
