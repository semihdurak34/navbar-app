import React from "react";
import "./Navbar.css"; // Navbar bileşenine özel CSS dosyası

const Navbar = ({ data }) => {
  const renderButtons = (buttons) => {
    return buttons.map((button) => {
      const { label, url, children, css, functionType } = button;
      const isParent = functionType === "parentButton";
      const isChild = functionType === "childButton";

      const isSubChild = children[1]?.functionType === "subChildButton";

      console.log(isSubChild);

      return (
        <li
          key={label}
          className={`nav-item ${isParent ? "parent" : ""} ${
            isChild ? "child" : ""
          }`}
        >
          <a href={url} className={`nav-link ${css}`}>
            {label}
          </a>
          {isParent && children && (
            <ul className="dropdown-menu">{renderButtons(children)}</ul>
          )}
        </li>
      );
    });
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">{renderButtons(data)}</ul>
    </nav>
  );
};

export default Navbar;
