import NavbarItem from "./NavbarItem";
import data from "../FakeData";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const color = data.color;
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="mx-auto max-w-screen-xl flex flex-wrap justify-between p-2 h-18 items-center font-semibold">
        <a href="/SemihDurak" className="flex items-center h-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Superman_S_symbol.svg"
            className="h-8 mr-3"
            alt="Superman Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Semih
          </span>
        </a>

        <div
          className=" hidden w-full md:block  md:w-auto  "
          id="navbar-multi-level"
        >
          <ul className="menus " style={{ color: color }}>
            {data.map((item) => (
              <NavbarItem key={item.id} items={item} color={item.color} />
            ))}
          </ul>
        </div>
        {/*  hamburger menu */}
        <div onClick={handleHamburger} className=" block md:hidden">
          {hamburger ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={
            hamburger
              ? "closeHamburger  block fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-200 bg-slate-200 ease-in-out duration-400"
              : " hidden fixed left-[-100%]"
          }
        >
          <a
            href="/SemihDurak"
            className="flex items-center h-14 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Superman_S_symbol.svg"
              className="h-8 mr-3 pl-2"
              alt="Superman Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Semih
            </span>
          </a>
          <ul className="pt-5 p-0 uppercase">
            {data.map((item) => (
              <NavbarItem key={item.id} items={item} color={item.color} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
