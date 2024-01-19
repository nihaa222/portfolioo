import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [setup, onSetup] = useState("");

  const change = () => {
    onSetup(false);
  };
  const change1 = () => {
    onSetup(true);
  };
  return (
    <div className="flex items-center  justify-between  w-[92%]  mx-auto pt-4">
      <div>
        <h1 className="font-bold">Niharika.dev</h1>
      </div>
      <div
        className="sm:static absolute bg-#fbf7f0 #f9f1e5  sm:min-h-fit min-h-[[60vh] left-0  flex  px-5  w-full  justify-center sm:justify-end"
        style={{ top: setup ? "-100%" : "20%" }}
      >
        <ul className=" flex   sm:justify-end sm:flex-row flex-col font-semibold sm:items-center sm:gap-[3vw] gap-8">
          <li>
            <h2>
              <a className="hover:text-gray-500" href="#">
                Home
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a className="hover:text-gray-500" href="#">
                About
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a className="hover:text-gray-500" href="#">
                Projects
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a className="hover:text-gray-500" href="#">
                Contact
              </a>
            </h2>
          </li>
        </ul>
      </div>
      <div>
        <div className="sm:hidden">
          <IoMenuSharp
            className="sm:hidden"
            onClick={() => change()}
            style={{ display: !setup ? "none" : "block" }}
          />
          <IoClose
            className="sm:hidden"
            onClick={() => change1()}
            style={{ display: setup ? "none" : "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
