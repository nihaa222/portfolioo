// // import { useState } from "react";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
// import { setSetupFalse, setSetupTrue } from "../features/navslice";
// import { useDispatch, useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const setup = useSelector((state) => state.setup.value);

//   console.log("Current setup state:", setup);

//   // const [setup, onSetup] = useState("true");

//   // const change = () => {
//   //   onSetup(false);
//   // };
//   // const change1 = () => {
//   //   onSetup(true);
//   // };
//   return (
//     <div className=" flex items-center   justify-between  w-[92%]  mx-auto pt-4">
//       <div>
//         <h1 className="font-bold sm:bg-gray-200 text-pink-500 sm:p-4">
//           Niharika.dev
//         </h1>
//       </div>
//       <div
//         className="sm:static absolute p-4  bg-white sm:bg-gray-200 sm:min-h-fit min-h-[100vh] left-0 flex px-5 w-full justify-center sm:justify-end"
//         style={{ top: setup ? "10%" : "-100%" }}
//       >
//         <ul className=" flex  text-pink-500  sm:justify-end sm:flex-row flex-col font-semibold sm:items-center sm:gap-[3vw] gap-8">
//           <li>
//             <h2>
//               <Link to="#home" className="hover:text-gray-500 " href="#">
//                 <button onClick={() => dispatch(setSetupFalse())}>Home</button>
//               </Link>
//             </h2>
//           </li>
//           <li>
//             <h2>
//               <Link to="#about" className="hover:text-gray-500">
//                 <button onClick={() => dispatch(setSetupFalse())}>About</button>
//               </Link>
//             </h2>
//           </li>
//           <li>
//             <h2>
//               <Link to="#projects" className="hover:text-gray-500" href="#">
//                 <button onClick={() => dispatch(setSetupFalse())}>
//                   Projects
//                 </button>
//               </Link>
//             </h2>
//           </li>
//           <li>
//             <h2>
//               <Link to="#contact" className="hover:text-gray-500" href="#">
//                 <button onClick={() => dispatch(setSetupFalse())}>
//                   Contacts
//                 </button>
//               </Link>
//             </h2>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <div className="sm:hidden">
//           <IoMenuSharp
//             className="sm:hidden"
//             onClick={() => {
//               console.log("Menu clicked");
//               dispatch(setSetupTrue());
//             }}
//             style={{ display: setup ? "none" : "block" }}
//           />
//           <IoClose
//             className="sm:hidden"
//             // onClick={() =>console.log("Menu unclocked") dispatch(setSetupFalse())}
//             // style={{ display: setup ? "none" : "block" }}
//             onClick={() => {
//               console.log("Menu not");
//               dispatch(setSetupFalse());
//             }}
//             style={{
//               display: setup === true ? "block" : "none",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };
  const Close = () => {
    setMenuOpen((open) => !open);
  };
  return (
    <>
      <div className="flex p-4 items-center justify-between">
        <div>Niharika Deb</div>

        {isMenuOpen ? (
          <div className="fixed top-0 left-0 h-screen w-screen bg-green-50">
            <div className="sm:hidden p-6">
              <button className="fixed  " onClick={Close}>
                <IoClose />
              </button>
            </div>
            <div className=" sm:flex">
              <ul className="flex gap-4 flex-col items-center ">
                {" "}
                <li onClick={Close}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={Close}>
                  <Link to="#about">About</Link>
                </li>
                <li onClick={Close}>
                  <Link to="#project">Projects</Link>
                </li>
                <li onClick={Close}>
                  <Link to="#contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="block sm:hidden">
            <button onClick={toggleMenu}>
              <IoMenuSharp />
            </button>
          </div>
        )}

        <div className="hidden sm:flex">
          <ul className="flex gap-4">
            <li onClick={Close}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={Close}>
              <Link to="#about">About</Link>
            </li>
            <li onClick={Close}>
              <Link to="#project">Projects</Link>
            </li>
            <li onClick={Close}>
              <Link to="#contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//   return (
//     <div className="flex p-4 items-center justify-between ">
//       <div>Niharika Deb</div>
//       {isMenuOpen ? (
//         <div className="h-screen bg-green-400 w-screen">this is my name</div>
//       ) : (
//         <div className=" block sm:hidden">
//           <button onClick={toggleMenu}>
//             <IoMenuSharp />
//           </button>
//         </div>
//       )}

//       <div className="hidden  sm:flex ">
//         <ul className="flex gap-4">
//           <li>
//             {" "}
//             <Link>Home</Link>
//           </li>
//           <li>
//             {" "}
//             <Link>About</Link>
//           </li>
//           <li>
//             {" "}
//             <Link>Projects</Link>
//           </li>
//           <li>
//             <Link>Contacts</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
