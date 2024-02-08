import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;

  padding-top: 80px;
  scroll-snap-align: center;
`;

const Contacts = () => {
  return (
    <Section id="contacts" className="xs:pt-[10px]">
      <p className="text-center text-bold text-pink-500 font-bold lg:text-[60px]  xs:text-[50px] text-[35px] xs:mb-2 mb-[20px]">
        Get in touch ?
      </p>

      <div className="h-full mx-auto md:mx-20 flex xs:pt-[30px]  lg:pt-[50px] justify-center">
        <div className="xs:h-[550px] text-gray-700 shadow-2xl md:w-[800px] h-[500px] xs:w-[300px] w-[300px] z-1 rounded-3xl bg-opacity-20 bg-gradient-to-r from-463f3a via-#E9EB9E to-pink-600">
          {/* <p className="text-center xs:text-[30px] text-[18px] mt-4 z-10 text-white">
            CONTACT ME!
          </p> */}
          <form
            className="p-4 lg:pl-10 lg:pr-10 pt-24 lg:pt-10 "
            name="contact "
            method="post"
            data-netlify="true"
            onSubmit="submit"
          >
            <input required type="hidden" name="form-name" value="contact-v1" />
            <div className="grid grid-cols-1 gap-4 lg:gap-7 md:grid-cols-2 ">
              <div>
                <label className="pb-3 font-semibold  text-pink-400">
                  First Name
                  <br />
                  <input
                    required
                    className="rounded-md mt-2 w-full h-8 lg:h-10 p-2 focus:outline-none focus:border-gray-200"
                    type="text"
                    name="first-name"
                  />
                </label>
              </div>
              <div>
                <label className="font-semibold  text-pink-400">
                  Last Name
                  <br />
                  <input
                    required
                    className="rounded-md focus:outline-none lg:h-10  w-full h-8 p-2"
                    type="text"
                    name="last-name"
                  />
                </label>
              </div>
              <div>
                <label className="font-semibold  text-pink-400">
                  Phone Number
                  <br />
                  <input
                    required
                    className="rounded-md  mt-2 focus:outline-none lg:h-10 w-full h-8 p-2"
                    type="number"
                    name="phone"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="email" className="font-semibold  text-pink-400">
                  Email
                  <br />
                  <input
                    required
                    className="rounded-md  mt-2 focus:outline-none lg:h-10 w-full h-8 p-2"
                    id="email"
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <div className="lg:col-span-2">
                <label className="font-semibold text-pink-400">
                  Any Comments?
                  <br />
                  <textArea
                    className="required  mt-2 rounded-m focus:outline-none lg:h-36  w-full h-20 p-2"
                    name="comments"
                  ></textArea>
                </label>
              </div>
              <button
                className="h-10 w-20 text-pink-500 px-4 py-2 font-semibold mr-[0px] lg:mr-[-50px] mt-10 lg:mt-4 rounded-xl justify-self-center lg:justify-self-end bg-white hover:bg-gray-100"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-1 mt-[80px] w-full bg-pink-500"></div>
    </Section>
  );
};

export default Contacts;
