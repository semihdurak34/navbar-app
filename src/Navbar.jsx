import React, { useState } from "react";
import "./Navbar.css";
const NavbarItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative drop"
    >
      <a
        href={item.link}
        className=" font-semibold mx-6 whitespace-nowrap"
        aria-hidden="true"
      >
        {item.title}
      </a>

      {hovered && item.children && (
        <ul
          className=" absolute left p-2 bg-white shadow-lg rounded-lg mt-5"
          onMouseEnter={handleMouseEnter}
        >
          {item.children.map((child) => (
            <NavbarItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = ({ data }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="container mx-auto">
        <ul className="flex justify-center py-4 ">
          {data.map((item) => (
            <NavbarItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
