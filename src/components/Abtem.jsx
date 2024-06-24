import { useEffect, useState } from "react";

const Abtem = () => {
  const [formattedText, setFormattedText] = useState("");

  useEffect(() => {
    const text = "FUllSTACK WEB DEVELOPER";
    setFormattedText(
      text.split("").map((char, i) => (
        <span
          style={{
            position: "absolute",
            display: "inline-block",
            transform: `rotate(${i * 15}deg)`,
            transformOrigin: "0 60px",
          }}
          key={i}
        >
          {char}
        </span>
      ))
    );
  }, []);

  return (
    <>
      <div className="v place-end h-50 place-self-center w-50 border relative">
        <div className="">
          <img
            src="table.avif"
            className=" md:w-[750px] sm:w-[700px] lg:w-[400px] lg:h-[500px] rounded-md h-[250px] w-[350px]"
            alt="Table"
            style={{
              boxShadow: "-3px -6px 29px -1px rgba(219, 39, 119, 0.50)", // Tailwind pink-500 color
            }}
          />
        </div>

        <div className="  absolute top-[150px] md:top-[180px] lg:left-[320px] left-[210px] md:left-[300px] h-40 w-40 rounded-full">
          <div className="relative rounded-full justify-center  flex bg-pink-700 items-center w-[120px] h-[120px]">
            <div
              style={{ objectFit: "cover" }}
              className="absolute w-[80px] h-[80px] bg-white rounded-full"
            >
              <img src="gif.png" alt="GIF" />
            </div>
            <div className="paper animate-rotate absolute w-[100%] h-[100%]">
              <p className="absolute left-[50%] text-sm">{formattedText}</p>
            </div>
          </div>
          {/* <div className="animate-pulse  xl:block hidden h-10 w-10 bg-pink-700 rounded-full absolute  lg:top-[-160px] lg:left-[200px]  xl:left-[300px"></div>
          <div className="animate-pulse  xl:block hidden h-10 w-10 bg-pink-700 rounded-full absolute  lg:top-[-70px] lg:left-[200px]"></div>
          <div className="animate-pulse  xl:block hidden h-10 w-10 bg-pink-700 rounded-full absolute  lg:top-[40px] lg:left-[200px]"></div>
          <div className="animate-pulse  xl:block hidden h-10 w-10 bg-pink-700 rounded-full absolute  lg:top-[150px] lg:left-[200px]"></div>
          <div className="animate-pulse  xl:block hidden h-10 w-10 bg-pink-700 rounded-full absolute  lg:top-[260px] lg:left-[200px]"></div> */}
          <div className="  xl:block hidden h-[500px] w-2 bg-pink-500 rounded-full absolute  lg:top-[-160px] lg:left-[225px]  xl:left-[230px]"></div>
        </div>
      </div>
    </>
  );
};

export default Abtem;
