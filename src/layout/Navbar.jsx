//REACT
import React from "react";

//COMPONENTS SVG
import Logo from "../components/svg/Logo";
import MagGlass from "../components/svg/MagGlass";
import Menu from "../components/svg/Menu";
import UserIcon from "../components/svg/UserIcon";

//CSS
import "./Navbar.css";
import DropDownMenu from "../components/buttons/DropDownMenu";

function Navbar() {
  const glassHeight = "1.5em";
  const standardHeight = "1.5em";
  const userHeight = "2em";

  return (
    <nav className="flex bg-primary darkMode justify-between">
      <ul className="flex flex-row items-center">
          <DropDownMenu>
            <Menu height={standardHeight} />
          </DropDownMenu>
        <li className="p-2 cursor-pointer">
          <Logo height={standardHeight} />
        </li>
      </ul>
      <ul className="flex flex-row items-center">
        <li className="p-2 glass cursor-pointer">
          <MagGlass height={glassHeight} />
        </li>
        <li className="p-2 user cursor-pointer">
          <UserIcon height={userHeight} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
