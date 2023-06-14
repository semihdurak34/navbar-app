import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

const NavbarItem = ({ items, depthLevel, color }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  console.log(depthLevel);
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="menu-items text-uppercase md:textcapitalize"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* if item has url and submenu, we make the button clickable to visit 
      the url while still showing dropdown on hover. If no url, we only show 
      hover without linking the button. Else, we render a simple <a> element. 
      Be aware that they are internal links, so we will use the <Link> component from react-router. Here, we are using the <a> for simplicity. */}
      {items.url && items.submenu ? (
        <div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="hambutton "

            // onClick={() => setDropdown((prev) => !prev)}
          >
            <a style={{ color: color }} href={items.url}>
              {items.title}
            </a>
            {/* {items.title}{" "} */}
            {depthLevel > 2 ? (
              <span>&raquo;</span>
            ) : (
              <span
                className={`arrow${
                  items.url && items.submenu ? " custom " : ""
                }`}
              />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="hambutton"
          >
            {/* <a href="/#">{items.title}</a> */}
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a style={{ color: color }} href={items.url}>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default NavbarItem;
