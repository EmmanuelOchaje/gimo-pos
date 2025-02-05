import { useState } from "react";
import logo from "../assets/images/gimologo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <div>
      {/* pop-menu */}
      {menu ? (
        <div
          className="
        bg-transparent fixed h-screen w-screen"
          onClick={() => showMenu()}
        ></div>
      ) : null}
      <div
        className={`bg-white fixed z-10 ${
          menu ? "top-[0]" : "top-[-100%]"
        } duration-300 w-screen h-fit shadow-lg`}
      >
        <span className="float-right mr-8 mt-8 md:mt-10 md:text-5xl text-3xl text-black">
          <i class="bx bx-x" onClick={() => showMenu()}></i>
        </span>
        <ul className="mx-4 mt-12 my-">
          <li className="text-[#777777] text-[14px] md:text-[18px] mb-8 mr-8 font-normal">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#777777] text-[14px] md:text-[18px] mb-8 mr-8 font-normal">
            <Link to="/about">About</Link>
          </li>
          <li className="text-[#777777] text-[14px] md:text-[18px] mb-8 mr-8 font-normal">
            <Link to="/guide">Guide</Link>
          </li>
          <li className="text-[#777777] text-[14px] md:text-[18px] mb-8 mr-8 font-normal">
            <Link to="/privacy">Privacy</Link>
          </li>

          <li className="text-black mb-5  font-semibold">
            <button className="bg-black text-white text-center w-[100%] p-2 rounded-full">
              Signup
            </button>
          </li>
        </ul>
      </div>

      <div className="flex justify-between lg:pt-8 py-4 px-2 lg:px-[6rem] items-center">
        <Link to="/">
          <img
            src={logo}
            className="w-[150px] h-[35px] mt-4 md:mt-0 md:w-[250px] cursor-pointer md:h-fit"
            alt="Pontify"
          />
        </Link>

        <div>
          <ul className="lg:flex hidden mr-12">
            <li className=" cursor-pointer mr-8 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className=" cursor-pointer mr-8 font-semibold">
              <Link to="/about">About</Link>
            </li>

            <li className=" cursor-pointer mr-8 font-semibold">
              <Link to="/guide">Guide</Link>
            </li>
            <li className=" cursor-pointer mr-8 font-semibold">
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
          <span className="float-right lg:hidden mr-6 mt-4 md:mt-6 text-3xl md:text-5xl text-black">
            <i class="bx bx-menu" onClick={() => showMenu()}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
