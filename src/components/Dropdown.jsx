import NavbarItem from "./NavbarItem";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  if (depthLevel) {
    depthLevel = depthLevel + 1;
  } else {
    depthLevel = 1;
  }
  const dropdownClass = depthLevel > 1 ? "dropdown-submenus" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show " : ""}  `}>
      {submenus.map((submenu) => (
        <NavbarItem
          items={submenu}
          key={submenu.id}
          depthLevel={depthLevel}
          color={submenu.color}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
