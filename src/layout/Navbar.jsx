//REACT
import React from "react";

//COMPONENTS SVG
import Logo from "../components/svg/Logo";
import Menu from "../components/svg/Menu";
import UserIcon from "../components/svg/UserIcon";

//COMPONENT BUTTON
import DropDownMenu from "../components/buttons/DropDownMenu";
import SearchGlass from "../components/buttons/SearchGlass";

//CSS
import "./Navbar.css";


function Navbar() {
  const standardHeight = "1.5em";
  const userHeight = "2em";

  return (
    <nav className="relative flex bg-primary darkMode justify-between">
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
          <SearchGlass/>
        </li>
        <li className="p-2 user cursor-pointer">
          <UserIcon height={userHeight} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
