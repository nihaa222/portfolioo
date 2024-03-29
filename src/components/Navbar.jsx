// // import { useState } from "react";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
// import { setSetupFalse, setSetupTrue } from "../features/navslice";
// import { useDispatch, useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`flex p-6 a fixed w-full sm:bg-white z-50 font-bold items-center justify-between xl:p-8 lg:text-[20px] top-0 left-0 text-pink-500 ${
        isScrolled ? "bg-gray-400" : "bg-#e5b1b9;"
      }`}
    >
      <div className="fixed top-3 lg:top-3 pointer">
        <Link to="#home">Niharika Deb</Link>
      </div>

      <div className="block fixed right-4 top-3 sm:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenuSharp />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-green-50">
          <div className="sm:hidden p-6">
            <button className="fixed" onClick={closeMenu}>
              <IoClose />
            </button>
          </div>
          <div className="sm:flex fixed right-40">
            <ul className="flex gap-8  mr-[10px] pt-20 font-bold text-pink-500 flex-col items-center">
              <li onClick={closeMenu}>
                <Link to="#home">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="#about">About</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="#project">Projects</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="#contacts">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="hidden fixed right-10 top-3 sm:flex  z-50 xl:gap-10">
        <ul className="flex gap-4 xl:gap-10 text-pink-500">
          <li onClick={closeMenu}>
            <Link to="#home">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="#about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="#project">Projects</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="#contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default Navbar;
