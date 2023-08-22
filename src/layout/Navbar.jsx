//REACT
import React from "react";

//COMPONENTS SVG
import { Logo } from "../components/svg/logo/Logo";
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
  const desktopHeight = "0.9em";

  return (
    <nav className="relative flex bg-primary justify-between h-[40px]">
      <ul className="flex flex-row items-center">
        <li className="md:hidden fill-secondary">
          <DropDownMenu>
            <Menu height={standardHeight} />
          </DropDownMenu>
        </li>
        <li className="p-2 cursor-pointer circle-red fill-white">
          <Logo height={standardHeight} />
        </li>
      </ul>
      <ul className="flex flex-row items-center">
        <ul className="hidden md:flex text-white font-bold items-center fill-third">
          <li className="hover:bg-third">
            <DropDownMenu>
              <Menu height={desktopHeight} />
              PIATTAFORME
            </DropDownMenu>
          </li>
          <li>
            <DropDownMenu>
              <Menu height={desktopHeight} />
              RECENSIONI
            </DropDownMenu>
          </li>
          <li>
            <DropDownMenu>
              <Menu height={desktopHeight} />
              NEWS
            </DropDownMenu>
          </li>
          <li>VIDEO</li>
          <li>LIVE</li>
          <li>GIOCHI</li>
        </ul>
        <li className="p-2 glass cursor-pointer fill-secondary">
          <SearchGlass />
        </li>
        <li className="p-2 user cursor-pointer fill-fourth">
          <UserIcon height={userHeight} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
