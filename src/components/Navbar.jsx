// import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { setSetupFalse, setSetupTrue } from "../features/navslice";
import { useDispatch, useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const dispatch = useDispatch();
  const setup = useSelector((state) => state.setup.value);

  console.log("Current setup state:", setup);

  // const [setup, onSetup] = useState("true");

  // const change = () => {
  //   onSetup(false);
  // };
  // const change1 = () => {
  //   onSetup(true);
  // };
  return (
    <div className=" flex items-center   justify-between  w-[92%]  mx-auto pt-4">
      <div>
        <h1 className="font-bold sm:bg-gray-200 text-pink-500 sm:p-4">
          Niharika.dev
        </h1>
      </div>
      <div
        className="sm:static absolute p-4  bg-white sm:bg-gray-200 sm:min-h-fit min-h-[100vh] left-0 flex px-5 w-full justify-center sm:justify-end"
        style={{ top: setup ? "10%" : "-100%" }}
      >
        <ul className=" flex  text-pink-500  sm:justify-end sm:flex-row flex-col font-semibold sm:items-center sm:gap-[3vw] gap-8">
          <li>
            <h2>
              <Link to="#home" className="hover:text-gray-500 " href="#">
                <button onClick={() => dispatch(setSetupFalse())}>Home</button>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="#about" className="hover:text-gray-500">
                <button onClick={() => dispatch(setSetupFalse())}>About</button>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="#projects" className="hover:text-gray-500" href="#">
                <button onClick={() => dispatch(setSetupFalse())}>
                  Projects
                </button>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="#contact" className="hover:text-gray-500" href="#">
                <button onClick={() => dispatch(setSetupFalse())}>
                  Contacts
                </button>
              </Link>
            </h2>
          </li>
        </ul>
      </div>
      <div>
        <div className="sm:hidden">
          <IoMenuSharp
            className="sm:hidden"
            onClick={() => {
              console.log("Menu clicked");
              dispatch(setSetupTrue());
            }}
            style={{ display: setup ? "none" : "block" }}
          />
          <IoClose
            className="sm:hidden"
            // onClick={() =>console.log("Menu unclocked") dispatch(setSetupFalse())}
            // style={{ display: setup ? "none" : "block" }}
            onClick={() => {
              console.log("Menu not");
              dispatch(setSetupFalse());
            }}
            style={{
              display: setup === true ? "block" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
