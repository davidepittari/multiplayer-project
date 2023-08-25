//REACT
import React, { useState } from "react";

//COMPONENTS SVG
import { Logo } from "../components/svg/logo/Logo";
import Menu from "../components/svg/Menu";
import UserIcon from "../components/svg/UserIcon";

//COMPONENT BUTTON
import DropDownMenu from "../components/buttons/DropDownMenu";
import SearchGlass from "../components/buttons/SearchGlass";

//CSS
import "./Navbar.css";
import Button from "../components/buttons/Button";
import LoginModal from "../components/auth/LoginModal";

function Navbar() {
  const standardHeight = "1.5em";
  const userHeight = "2em";
  const desktopHeight = "0.9em";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("aperto");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="flex bg-primary lg:bg-opacity-80 justify-between min-h-fit lg:fixed lg:top-0 z-50 w-full backdrop-filter backdrop-blur backdrop-saturate-150 backdrop-brightness-125">
        <div className="flex flex-row items-center fill-white">
          <div className="h-full lg:hidden">
            <DropDownMenu>
              <Menu height={standardHeight} />
            </DropDownMenu>
          </div>
          <div className="p-2 cursor-pointer circle-red fill-white">
            <Logo height={standardHeight} />
          </div>
        </div>
        <div className="flex flex-row items-center fill-third">
          <div className="lg:flex flex-row items-center h-full hidden">
            <DropDownMenu>
              <Menu height={desktopHeight} />
              <span>PIATTAFORME</span>
            </DropDownMenu>
            <DropDownMenu>
              <Menu height={desktopHeight} />
              <span>RECENSIONI</span>
            </DropDownMenu>
            <DropDownMenu>
              <Menu height={desktopHeight} />
              <span>NEWS</span>
            </DropDownMenu>
            <Button color={"none"}>VIDEO</Button>
            <Button color={"none"}>LIVE</Button>
            <Button color={"none"}>GIOCHI</Button>
          </div>
          <span className="p-2 cursor-pointer fill-secondary hover:fill-third">
            <SearchGlass />
          </span>
          <span className="p-2 cursor-pointer fill-fourth hover:fill-third items-center flex ">
            <button onClick={openModal}>
              <UserIcon height={userHeight} />
            </button>
          </span>
        </div>
      </nav>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
